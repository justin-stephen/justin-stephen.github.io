/* Justin Stephen: site scripts.
   You normally never need to edit this file. To add or change projects,
   edit projects-data.js (see README.md). */
(function () {
  "use strict";
  var root = document.documentElement;

  /* ---- tiny helper for building elements safely (text is never parsed as HTML) ---- */
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      var v = attrs[k];
      if (v === false || v == null) return;
      if (k === "text") n.textContent = v;
      else n.setAttribute(k, v === true ? "" : v);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }

  /* ---- light / dark toggle (remembered per browser) ---- */
  var toggle = document.getElementById("themeToggle");
  function setMode(mode) {
    if (mode === "light") root.setAttribute("data-mode", "light");
    else root.removeAttribute("data-mode");
    try { localStorage.setItem("mode", mode); } catch (e) {}
    if (toggle) toggle.setAttribute("aria-pressed", String(mode === "light"));
  }
  if (toggle) {
    toggle.setAttribute("aria-pressed", String(root.getAttribute("data-mode") === "light"));
    toggle.addEventListener("click", function () {
      setMode(root.getAttribute("data-mode") === "light" ? "dark" : "light");
    });
  }

  /* ---- footer year ---- */
  document.querySelectorAll("[data-year]").forEach(function (n) {
    n.textContent = new Date().getFullYear();
  });

  /* ---- hero video: stay still for people who prefer reduced motion ---- */
  var hero = document.querySelector(".hero-video");
  if (hero && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    hero.removeAttribute("autoplay");
    hero.pause();
  }

  var projects = window.PROJECTS || [];

  function makeVideo(src, poster) {
    var v = el("video", { src: src, poster: poster, controls: true, loop: true, playsinline: true, preload: "metadata" });
    v.muted = true;
    v.autoplay = true;
    return v;
  }

  /* ---- projects grid (projects.html) ---- */
  var grid = document.getElementById("projectGrid");
  if (grid) {
    projects.forEach(function (p) {
      var thumb = el("div", { class: "thumb" + (p.cover ? "" : " empty") });
      if (p.cover) {
        if (p.fit === "contain") thumb.classList.add("contain");
        thumb.appendChild(el("img", { src: p.cover, alt: p.coverAlt || p.title, loading: "lazy" }));
      } else {
        thumb.textContent = "Photos coming soon";
      }
      var when = el("span", { class: "when" }, [
        p.status === "ongoing" ? el("span", { class: "dot", title: "Ongoing" }) : null,
        document.createTextNode(p.dateLabel || "")
      ]);
      var body = el("div", { class: "card-body" }, [
        el("div", { class: "meta" }, [el("span", { text: p.category || "" }), when]),
        el("h2", { class: "card-title", text: p.title }),
        el("p", { class: "card-desc", text: p.summary || "" })
      ]);
      grid.appendChild(el("a", { class: "card", href: "project.html#" + encodeURIComponent(p.slug) }, [thumb, body]));
    });
  }

  /* ---- project detail (project.html#slug) ---- */
  var detail = document.getElementById("projectDetail");
  function renderDetail() {
    var slug = decodeURIComponent(location.hash.replace(/^#/, ""));
    var p = projects.filter(function (x) { return x.slug === slug; })[0];
    detail.textContent = "";
    var back = el("a", { class: "back", href: "projects.html", text: "← All projects" });

    if (!p) {
      document.title = "Project not found | Justin Stephen";
      detail.appendChild(back);
      detail.appendChild(el("h1", { class: "detail-title", text: "Project not found" }));
      return;
    }
    document.title = p.title + " | Justin Stephen";

    var media;
    if (p.video) {
      media = el("figure", {}, [
        el("div", { class: "media" }, [makeVideo(p.video, p.cover)]),
        p.videoCaption ? el("figcaption", { text: p.videoCaption }) : null
      ]);
    } else if (p.cover) {
      media = el("figure", {}, [
        el("div", { class: "media" }, [el("img", { src: p.cover, alt: p.coverAlt || p.title })]),
        p.coverCaption ? el("figcaption", { text: p.coverCaption }) : null
      ]);
    } else {
      media = el("div", { class: "media empty", text: "Photos coming soon" });
    }

    var facts = (p.facts || []).map(function (row) {
      return el("div", {}, [el("dt", { text: row[0] }), el("dd", { text: row[1] })]);
    });

    var side = el("div", {}, [
      el("p", { class: "summary", text: p.summary || "" }),
      facts.length ? el("dl", { class: "facts" }, facts) : null,
      p.result ? el("p", { class: "result-label", text: "Result" }) : null,
      p.result ? el("p", { class: "result", text: p.result }) : null
    ]);

    detail.appendChild(back);
    detail.appendChild(el("h1", { class: "detail-title", text: p.title }));
    detail.appendChild(el("p", { class: "detail-sub", text: [p.category, p.dateLabel].filter(Boolean).join(" · ") }));
    detail.appendChild(el("div", { class: "detail-top" }, [media, side]));

    (p.sections || []).forEach(function (s) {
      var kids = (s.paragraphs || []).map(function (t) { return el("p", { text: t }); });
      (s.images || []).forEach(function (im) {
        kids.push(el("figure", {}, [
          el("img", { src: im.src, alt: im.alt || im.caption || "", loading: "lazy" }),
          im.caption ? el("figcaption", { text: im.caption }) : null
        ]));
      });
      (s.videos || []).forEach(function (vd) {
        kids.push(el("figure", {}, [
          makeVideo(vd.src, vd.poster),
          vd.caption ? el("figcaption", { text: vd.caption }) : null
        ]));
      });
      detail.appendChild(el("section", { class: "sect" }, [
        el("h2", { text: s.heading }),
        el("div", { class: "sect-body" }, kids)
      ]));
    });
  }
  if (detail) {
    renderDetail();
    window.addEventListener("hashchange", function () { renderDetail(); window.scrollTo(0, 0); });
  }
})();

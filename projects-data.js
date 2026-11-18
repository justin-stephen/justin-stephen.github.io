/* =====================================================================
   YOUR PROJECTS: this is the file you edit to add or change projects.
   Each project is one block between { and }, separated by a comma.
   Full instructions are in README.md.

   Image paths always start with "assets/images/" and must match the
   file name EXACTLY (lowercase, no spaces: "chassis-fea.jpg").
   Leave "cover" as null and the card shows "Photos coming soon".
   ===================================================================== */

window.PROJECTS = [

  {
    slug: "wing-release-film",              // used in the web address; lowercase, hyphens, no spaces
    title: "Permanent-core vacuum layup for 3D composite wings",
    category: "Manufacturing",
    status: "ongoing",                      // "ongoing" shows a green dot; delete the line for none
    dateLabel: "Ongoing",
    cover: null,                            // e.g. "assets/images/wing-coupons.jpg"
    summary: "R&D into a lower-cost way to lay up compound-curvature carbon wings over a permanent foam core, without a dedicated release film layer.",
    facts: [
      ["Role", "Leading an independent R&D project"],
      ["Team", "Formula Electric at Berkeley (FSAE)"],
      ["Tools", "Onshape, 3D printing, vacuum bagging, carbon/epoxy"]
    ],
    result: "Standard vacuum-bag film works as a direct epoxy release film on cured carbon/epoxy laminate. A new 3D-geometry wing workflow is drafted and being iterated, aimed at cutting manufacturing time and halving tooling board consumable use.",
    sections: [
      {
        heading: "Goal",
        paragraphs: [
          "Find alternatives to Mylar release film for layups over a positive foam core with compound curvature, using flexible film approaches."
        ]
        // images: [ { src: "assets/images/your-photo.jpg", caption: "What the photo shows." } ]
      },
      {
        heading: "Test setup",
        paragraphs: [
          "I designed custom test coupons in Onshape and 3D printed them to test a dual-membrane vacuum architecture: an independent outer vacuum bag over a deformable inner film. The coupons covered concave, convex and compound-curvature geometry, and the film conformed to each."
        ]
      },
      {
        heading: "Findings",
        paragraphs: [
          "Standard vacuum-bag film is a viable direct epoxy release film on cured carbon/epoxy laminate. That removes the need for a dedicated release film layer and points to a lower-cost process."
        ]
      },
      {
        heading: "Next",
        paragraphs: [
          "I am drafting and iterating a new workflow for 3D-geometry wings, aimed at cutting manufacturing time and halving tooling board consumable use."
        ]
      }
    ]
  },

  {
    slug: "wind-tunnel",
    title: "Modular desktop wind tunnel",
    category: "Personal project",
    status: "ongoing",
    dateLabel: "Ongoing",
    cover: "assets/images/wind-tunnel-poster.jpg",
    coverAlt: "Airfoil in a purple-lit desktop wind tunnel with a mist wake streaming off the trailing edge",
    video: "assets/video/wind-tunnel.mp4",
    videoCaption: "Ultrasonic mist making the wake behind the airfoil visible.",
    summary: "A desktop wind tunnel I designed in Onshape with a 3D-printed structure, acrylic viewing panels and removable flow straighteners, plus an ultrasonic-mist system that shows airfoil wakes.",
    facts: [
      ["Role", "Designed and fabricated"],
      ["Type", "Personal engineering project"],
      ["Tools", "Onshape, 3D printing, acrylic, ultrasonic mist"]
    ],
    result: "Captured airfoil wake structures on video (above). Still iterating on mist delivery and component interfaces through physical prototyping.",
    sections: [
      {
        heading: "Design",
        paragraphs: [
          "The tunnel is modular, so parts can be swapped as it changes. The structure is 3D printed, the viewing panels are acrylic, and the flow straighteners are removable. Everything was designed in Onshape."
        ]
      },
      {
        heading: "Flow visualization",
        paragraphs: [
          "An ultrasonic-mist system puts visible streams into the airflow. The video shows the wake behind the airfoil."
        ]
      },
      {
        heading: "Iteration",
        paragraphs: [
          "Mist delivery and the interfaces between components are still being refined through physical prototyping."
        ]
      }
    ]
  },

  {
    slug: "bodywork-molds",
    title: "Rain cover and clamshell molds",
    category: "Manufacturing",
    status: "ongoing",
    dateLabel: "Fall 2025 – Present",
    cover: null,
    summary: "Primary mold engineer for the team's rain cover and clamshell: mold CAD geometry and CNC toolpaths for ShopBot and ShopSabre routers.",
    facts: [
      ["Role", "Bodywork Mold Designer & Wing Engineer"],
      ["Team", "Formula Electric at Berkeley (FSAE)"],
      ["Tools", "CAD, CAM programming, ShopBot, ShopSabre, carbon fiber layup, resin infusion"]
    ],
    result: "Took part in 25+ carbon-fiber layups, including 5 large-format resin infusion projects.",
    sections: [
      {
        heading: "Molds",
        paragraphs: [
          "I developed the mold CAD geometry and the CNC CAM toolpaths on my own, with roughing and finishing operations for ShopBot and ShopSabre routers."
        ]
      },
      {
        heading: "Resin infusion",
        paragraphs: [
          "On the large-format infusions I worked on fiber placement, flow media and vacuum-line configuration, resin inlet and outlet positioning, and infusion troubleshooting."
        ]
      }
    ]
  },

  {
    slug: "hydroponics-kit",
    title: "Plant hydroponics kit",
    category: "Product design",
    status: "ongoing",
    dateLabel: "Spring 2026 – Present",
    cover: null,
    summary: "A modular, affordable hydroponics system for urban food deserts. I lead growth chamber design.",
    facts: [
      ["Role", "Growth Chamber Design Lead"],
      ["Team", "Vertical Farming at Berkeley"]
    ],
    sections: [
      {
        heading: "Growth chamber",
        paragraphs: [
          "A hexagonal chamber with a push-to-lock enclosure and a rotating plate intended to harvest all the microgreens in one motion."
        ]
      },
      {
        heading: "Team",
        paragraphs: [
          "I scope prototype requirements and delegate design work across the pod integration, nutrient flow channel and cutting mechanism teams."
        ]
      }
    ]
  },

  {
    slug: "sauce-and-spoon",
    title: "Sauce & Spoon digital transformation",
    category: "Program management",
    dateLabel: "Simulated project",
    cover: null,
    summary: "A simulated point-of-sale rollout for a restaurant: charter, stakeholder analysis, scope trade-offs and a retrospective.",
    facts: [
      ["Type", "Simulated PM project"],
      ["Tools", "Project charter, stakeholder power/interest grid, quality metrics"]
    ],
    result: "Ran a 12-point retrospective review for process improvements across the project lifecycle.",
    sections: [
      {
        heading: "Charter and stakeholders",
        paragraphs: [
          "I wrote the project charter and a stakeholder power/interest grid, defining the core objectives and scope."
        ]
      },
      {
        heading: "Scope trade-offs",
        paragraphs: [
          "I modeled scope-change trade-offs against wait-time and table-turnover data to prioritize delivery decisions."
        ]
      },
      {
        heading: "Quality and retrospective",
        paragraphs: [
          "I developed quality metrics and conducted a 12-point retrospective review."
        ]
      }
    ]
  }

  /* ---- TO ADD A PROJECT: copy one block above, paste it here after a comma, and edit. ---- */
];

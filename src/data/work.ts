import drafting from "@/assets/work-2d-drafting.jpg";
import assembly from "@/assets/work-assembly.jpg";
import revit from "@/assets/work-revit-plan.jpg";
import sheetMetal from "@/assets/work-sheet-metal.jpg";
import model3d from "@/assets/work-3d-model.jpg";
import jig from "@/assets/work-jig-fixture.jpg";

export type WorkItem = {
  id: string;
  title: string;
  category: "2D Drafting" | "3D Modelling" | "Assembly" | "Fixture Design" | "Civil / Revit";
  image: string;
  alt: string;
  tool: string;
  note: string;
};

export const workItems: WorkItem[] = [
  {
    id: "coupling-detail",
    title: "Flanged Coupling Detail Drawing",
    category: "2D Drafting",
    image: drafting,
    alt: "AutoCAD detail drawing of a flanged shaft coupling with dimensions and parts list",
    tool: "AutoCAD 2D",
    note: "Multi-view detail sheet with fits, keyway callouts, general tolerance notes and a full item table.",
  },
  {
    id: "pump-exploded",
    title: "Centrifugal Pump Exploded Assembly",
    category: "Assembly",
    image: assembly,
    alt: "Exploded assembly drawing of a centrifugal pump with balloon callouts",
    tool: "AutoCAD / SolidWorks",
    note: "Exploded view with balloon callouts and a bill of materials for shop-floor assembly reference.",
  },
  {
    id: "civil-plan",
    title: "Residential Floor Plan Set",
    category: "Civil / Revit",
    image: revit,
    alt: "Civil floor plan drawing with hatched walls, grid axes and dimensions",
    tool: "Autodesk Revit",
    note: "Layout plan with wall types, door and window schedules, grid axes and dimension strings.",
  },
  {
    id: "sheet-metal",
    title: "Sheet Metal Enclosure Bracket",
    category: "3D Modelling",
    image: sheetMetal,
    alt: "3D render of a sheet metal enclosure bracket with louvers and slots",
    tool: "SolidWorks Sheet Metal",
    note: "Bend-aware model with louvers, mounting slots and a flat pattern ready for laser cutting.",
  },
  {
    id: "gear-model",
    title: "Spur Gear & Bracket Part Models",
    category: "3D Modelling",
    image: model3d,
    alt: "SolidWorks 3D model of a mechanical part with feature details",
    tool: "SolidWorks",
    note: "Parts modelled from 2D sketches and reference images using Extrude, Revolve and Cut features, with drawing views generated from the model.",
  },
  {
    id: "drill-jig",
    title: "Drilling Jig Concept",
    category: "Fixture Design",
    image: jig,
    alt: "Jig and fixture concept model with locating pins and clamps",
    tool: "SolidWorks / AutoCAD",
    note: "Locating and clamping concept for a repeatable drilling operation, with base plate detailing.",
  },
];

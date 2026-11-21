import { mkdirSync, writeFileSync } from "node:fs";

// "The Kettle Takes Its Time" — a short text written to leave its reader
// braver: steadier, unhurried, ready to move. The calm comes from the scene
// itself, never from an instruction: a kettle, steam, rain on a roof, a warm
// cup. Plain concrete words, a slow rhythm, one image to return to.
const TEXT =
  "The kettle takes its time. The steam rises in one thin line. " +
  "Outside, the rain finds the roof one drop at a time, and the roof holds every one. " +
  "Your hands are warm around the cup. Whatever comes next can wait. The cup is not empty yet.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, "utf8");

import fs from "fs";

export function readNoema(): string {
  return fs.readFileSync("noema.md", "utf-8");
}

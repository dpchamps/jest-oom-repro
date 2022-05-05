const { NUM_SPECS = "1000", TMP_SPECS_DIR = "tests-leak" } = process.env;
const fs = require("fs");
const path = require("path");
const numSpecs = parseInt(NUM_SPECS, 10);
const specsDirname = path.isAbsolute(TMP_SPECS_DIR)
  ? TMP_SPECS_DIR
  : path.resolve(process.cwd(), TMP_SPECS_DIR);
fs.mkdirSync(specsDirname, { recursive: true });

Array(numSpecs)
  .fill(0)
  .forEach((_, i) => {
    const spec = `
  describe("spec-${i}", () => {
    it("block-${i}", () => {
      window.memory_${i} = Array(1_000_000).fill(0).map((__, j) => j === 0 ? "spec-${i}" : Math.random())
      expect(0).toEqual(0)
    });
  });
  `;
    const evilSpecFilename = path.resolve(specsDirname, `${i}.spec.js`);
    fs.writeFileSync(evilSpecFilename, spec);
  });
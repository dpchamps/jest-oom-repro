const { NUM_SPECS = "1000", TMP_SPECS_DIR = "tests" } = process.env;
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
  describe("some-evil-spec=${i}", () => {
    it("evil-block-${i}", () => {
      window.evil_${i} = Array(1_000_000).fill(0).map((__, j) => j === 0 ? "spec-"+i : Math.random())
      expect(0).toEqual(0)
    });
  });
  `;
    const evilSpecFilename = path.resolve(specsDirname, `evil-${i}.spec.js`);
    fs.writeFileSync(evilSpecFilename, spec);
  });
const path = require("path");
const { execSync } = require("child_process");

const OK_FILES = ["LICENSE", "cat.txt", "pipe.txt", "cat.jpg", "pipe.jpg"];
const WRONG_FILES = ["cat-wrong.txt", "pipe-wrong.jpg"];
const LONELY_FILES = ["cat-lonely.jpg"];
const MISSING_FILES = ["cat-missing.txt"];

const run = (fileName) => {
  try {
    execSync(`node index.js ${fileName}`);
    return 0;
  } catch (err) {
    return err.status;
  }
};

describe("Missing files", () => {
  MISSING_FILES.forEach((fileName) => {
    test(fileName, () => {
      expect(run(path.join("test-files", fileName))).toBe(100);
    });
  });
});

describe("Lonely files", () => {
  LONELY_FILES.forEach((fileName) => {
    test(fileName, () => {
      expect(run(path.join("test-files", fileName))).toBe(101);
    });
  });
});

describe("Wrong files", () => {
  WRONG_FILES.forEach((fileName) => {
    test(fileName, () => {
      expect(run(path.join("test-files", fileName))).toBe(102);
    });
  });
});

describe("OK files", () => {
  OK_FILES.forEach((fileName) => {
    test(fileName, () => {
      expect(run(path.join("test-files", fileName))).toBe(0);
    });
  });
});

const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./src"
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "./src"],
  rootDir: "./src",
  "modulepaths": [
    "<rootdir>"
  ],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.js$': 'babel-jest',
    "^.+\\.jsx$": "babel-jest"
  },
};
module.exports = createJestConfig(customJestConfig);

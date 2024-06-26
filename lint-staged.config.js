module.exports = {
  "src/**/*.ts?(x)": () => "npm run tsc",
  "*.{ts,tsx}": ["npm run format --", "npm run lint --"],
  "*.{css,scss}": ["npm run style --", "npm run format --"],
  "*.md": "npm run format --list-different",
};

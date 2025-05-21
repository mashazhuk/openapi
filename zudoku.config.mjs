/** @type {import('zudoku').ZudokuConfig} */
const config = {
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
    { id: "docs/about", label: "About" },
    { id: "srs/general", label: "SRS" },
  ],
  sidebar: {
    docs: [
      {
        type: "category",
        label: "Overview",
        items: ["docs/installation", "docs/authorization", "docs/about"],
      },
    ],
  },
  redirects: [{ from: "/", to: "/docs/installation" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;

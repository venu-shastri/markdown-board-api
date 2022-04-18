
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/Venu/Documents/markdown-board-api/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Venu/Documents/markdown-board-api/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Venu/Documents/markdown-board-api/src/pages/index.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/Users/Venu/Documents/markdown-board-api/src/pages/using-typescript.tsx")),
  "component---src-templates-document-template-js": preferDefault(require("/Users/Venu/Documents/markdown-board-api/src/templates/documentTemplate.js"))
}


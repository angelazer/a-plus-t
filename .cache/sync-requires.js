const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/index.js"))),
  "component---src-pages-photos-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/photos.js"))),
  "component---src-pages-rsvp-js": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/rsvp.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/Angelazer/Desktop/github/a-plus-t/src/pages/using-typescript.tsx")))
}


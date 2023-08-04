// helpers.js
export function extractLastFragments(urls) {
  return urls.map((url) => {
    const fragments = url.split('/')
    return fragments[fragments.length - 1]
  })
}

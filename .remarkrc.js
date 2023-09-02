export default {
  settings: {
    listItemIndent: 1,
    emphasis: '_',
    strong: '_',
    bullet: '*',
    incrementListMarker: false
  },

  plugins: [
    '@form8ion/remark-lint-preset',
    ['remark-toc', {tight: true}],
    ['remark-usage', {heading: 'example'}]
  ]
}

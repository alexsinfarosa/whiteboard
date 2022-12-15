/**
 * Converts markdown headers to HTML.
 *
 * @param {string} markdown - The input markdown string.
 * @returns {string} The markdown with headers converted to HTML.
 */
const markdownParser = markdown => {
  // check for valid input
  if (markdown.startsWith(' ') || markdown.endsWith(' ')) {
    markdown = markdown.trim()
  }

  if (!markdown.startsWith('#')) {
    return markdown
  }

  // find the first space character after the hashes
  const spaceIndex = markdown.indexOf(' ')
  if (spaceIndex === -1) {
    return markdown
  }

  // count the number of hashes
  let numHashes = 0
  for (const char of markdown) {
    if (char !== '#') {
      break
    }
    numHashes++
  }

  // return the appropriate HTML
  switch (numHashes) {
    case 1:
      return `<h1>${markdown.substring(spaceIndex + 1).trim()}</h1>`
    case 2:
      return `<h2>${markdown.substring(spaceIndex + 1).trim()}</h2>`
    case 3:
      return `<h3>${markdown.substring(spaceIndex + 1).trim()}</h3>`
    case 4:
      return `<h4>${markdown.substring(spaceIndex + 1).trim()}</h4>`
    case 5:
      return `<h5>${markdown.substring(spaceIndex + 1).trim()}</h5>`
    case 6:
      return `<h6>${markdown.substring(spaceIndex + 1).trim()}</h6>`
    default:
      return markdown
  }
}

const header1 = '# This is a header'
console.log(markdownParser(header1))
const header2 = '## This is a header'
console.log(markdownParser(header2))
const header3 = '### This is a header'
console.log(markdownParser(header3))
const header4 = '#Invalid'
console.log(markdownParser(header4))
const header5 = '  #### Space Jam'
console.log(markdownParser(header5))

import axios from 'axios'

const xmlFetcher = async () => {
  const url = 'https://www.christianbook.com/sitemap4.xml'
  try {
    const response = await axios.get(url)
    const xmlString = response.data
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')

    const urlElements = xmlDoc.getElementsByTagName('url')

    /* urlElements.length; */
    // above is too long to loop over (50,000)
    // Uncaught RangeError: Maximum call stack size exceeded

    const startIndex = 0
    const endIndex = 50

    let books = []
    for (let i = startIndex; i <= endIndex; i++) {
      const urlElement = urlElements[i]
      if (urlElement) {
        const lines = urlElement.textContent.split('\n')
        const url = lines[1].trim()
        books.push(url)
      } else {
        break // Break the loop if the desired range exceeds the available elements
      }
    }
    // console.log(books)
    return books
  } catch (error) {
    console.error('xmlFetcher error:', error)
    return []
  }
}

/*

    const batchSize = 1000;
    const totalItems = urlElements.length
    while (startIndex < totalItems) {
      const endIndex = Math.min(startIndex + batchSize, totalItems)
      const batch = Array(urlElements.slice(startIndex, endIndex))

      for (const item of batch) {
        const urlElement = urlElements[i]
        if (urlElement) {
          const lines = urlElement.textContent.split('\n')
          const url = lines[1].trim()
          books.push(url)
        } else {
          break // Break the loop if the desired range exceeds the available elements
        }
      }
      // console.log(books)
      startIndex = endIndex
    }
    return books
  } 
*/

export default xmlFetcher

import axios from 'axios'
import * as cheerio from 'cheerio'

const secondFetcher = async () => {
  const url = 'https://www.christianbook.com/1-2-3/9781646388776/pd/388770'
  try {
    const response = await axios.get(url, { responseType: 'text' })
    const $ = cheerio.load(response.data)

    const titles = $('.CBD-ProductDetailTitle')
      .map((index, element) => $(element).text().trim())
      .get()
    const authors = $('.CBD-ProductDetailAuthor')
      .map((index, element) => $(element).text().trim())
      .get()
    const prices = $('.CBD-ProductDetailActionPrice')
      .map((index, element) => $(element).text().trim())
      .get()

    const dollarSignIndex = prices[0].indexOf('$')

    console.log('Titles:', titles[0])
    console.log('Authors:', authors[0])
    console.log('Prices:', prices[0].slice(dollarSignIndex))

    // CBD-ProductDetailTitle
    // CBD-ProductDetailAuthor
    // CBD-ProductDetailActionPrice
  } catch (error) {
    console.error('secondFetcher error:', error)
    return []
  }
}

secondFetcher()

export default secondFetcher

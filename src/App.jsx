import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import xmlFetcher from './utilities/xmlFetcher.jsx'
import './App.css'
import { extractLastFragments } from './utilities/extractSkus.jsx'

function App() {
  const [bookUrls, setBookUrls] = useState([])

  useEffect(() => {
    async function fetchData() {
      const fetchedBookUrls = await xmlFetcher()
      setBookUrls(fetchedBookUrls)
    }

    fetchData()
  }, [])

  const lastFragments = extractLastFragments(bookUrls)

  useEffect(() => {
    console.log(bookUrls) // This will log the updated value of 'books'
    console.log(lastFragments)
  }, [bookUrls, lastFragments])

  return (
    <div onLoad={xmlFetcher}>
      <Header />
      <h1>XML Sitemap Examiner</h1>
      <ul>
        {bookUrls &&
          bookUrls.map((bookUrl) => <li key={bookUrl}>{bookUrl}</li>)}
      </ul>
    </div>
  )
}

export default App

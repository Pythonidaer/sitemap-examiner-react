import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import xmlFetcher from './utilities/xmlFetcher.jsx'
import './App.css'
import { extractLastFragments } from './utilities/extractSkus.jsx'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'

function App() {
  const [bookUrls, setBookUrls] = useState([])
  const [singleSelection, setSingleSelection] = useState([])
  const [optionFragments, setOptionFragments] = useState([])

  useEffect(() => {
    async function fetchData() {
      const fetchedBookUrls = await xmlFetcher()
      setBookUrls(fetchedBookUrls)
    }

    fetchData()
  }, [])

  const lastFragments = extractLastFragments(bookUrls)

  // useEffect(() => {
  //   // Move the code inside this useEffect that depends on bookUrls
  //   setSingleSelection(lastFragments)
  //   const updatedFragments = singleSelection.map((sku) => ({
  //     name: sku,
  //   }))
  //   console.log(singleSelection)
  // }, [singleSelection])

  // setSingleSelection(lastFragments)
  // const updatedFragments = singleSelection.map((sku) => ({
  //   name: sku,
  // }))
  // const sortedFragments = [...updatedFragments].sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // )

  // useEffect(() => {
  //   console.log(bookUrls) // This will log the updated value of 'books'
  //   console.log(lastFragments)
  // }, [bookUrls, lastFragments])

  const fetchBookData = (url) => {
    axios
      .get(url)
      .then((response) => {
        // Assuming the specific class names you want to target are 'class1' and 'class2'
        const class1Data = response.data.getElementsByClassName(
          'CBD-ProductDetailTitle'
        )
        const class2Data = response.data.getElementsByClassName(
          'CBD-ProductDetailAuthor'
        )
        const class3Data = response.data.getElementsByClassName(
          'CBD-ProductDetailActionPrice'
        )

        console.log('Class 1 Data:', class1Data.textContent)
        console.log('Class 2 Data:', class2Data.textContent)
        console.log('Class 3 Data:', class3Data.textContent)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  const handleSearch = () => {
    console.log(singleSelection)
  }

  /*
Filter book URLs so that 
single selection in bookURL
equals URL to be used for cheerio

  */

  return (
    <div onLoad={xmlFetcher}>
      <Header />
      <Form.Group className='d-flex'>
        <Typeahead
          id='basic-typeahead-single'
          labelKey='name'
          onChange={setSingleSelection}
          options={lastFragments}
          placeholder='Choose a SKU...'
          selected={singleSelection}
          className='form-control'
        />
        <Button
          type='submit'
          variant='outline-success'
          className='p-2'
          onClick={handleSearch}
        >
          Search
        </Button>
      </Form.Group>
      <h1>XML Sitemap Examiner</h1>
      <ul>
        {bookUrls &&
          bookUrls.map((bookUrl) => (
            <li key={bookUrl}>
              <a
                target='_blank'
                onClick={() => fetchBookData(bookUrl)}
                href={bookUrl}
              >
                {bookUrl}
              </a>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
/*
  // Need to write a function that filters array based on SKU
  //https://www.christianbook.com/1-the-baxters-take-one/karen-kingsbury/9780310342649/pd/342641
  // bookUrls.filter(book) => in(342641) etc.
  // Need to either think of how I want to make request
  // To grab data from subsequent page and write on this one
  // Also need error handling

  
        // CBD-ProductDetailTitle
        // CBD-ProductDetailAuthor
        // CBD-ProductDetailActionPrice

        // Access the text content of the elements and log them
  */

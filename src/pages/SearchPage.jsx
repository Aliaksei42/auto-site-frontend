import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import styles from './SearchPage.module.css'
import Post from '../components/Post/Post'

const SearchPage = () => {
  const [allPosts, setAllPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://plankton-app-crfpr.ondigitalocean.app/posts')
        setAllPosts(response.data)
      } catch (error) {
        console.error('Ошибка при получении постов:', error)
      }
    }

    fetchPosts()
  }, [])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/posts?search=${searchTerm}`
      )
      setSearchResults(response.data)
    } catch (error) {
      console.error('Ошибка при выполнении поиска:', error)
    }
  }, [searchTerm])

  const filterPosts = (post) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase()
    return (
      post.title.toLowerCase().includes(lowercaseSearchTerm) ||
      post.text.toLowerCase().includes(lowercaseSearchTerm)
    )
  }

  const filteredResults = searchTerm ? allPosts.filter(filterPosts) : allPosts

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <div className={styles.searchLeft}>
          <div className={styles.inputWithButton}>
            <input
              type="text"
              placeholder="Wpisz tekst do wyszukania"
              value={searchTerm}
              onChange={handleSearchChange}
              className={styles.input}
            />
          </div>

          {searchTerm && (
            
              <div className={styles.search}> {/* Use a div instead of ul */}
              {filteredResults.map((post) => (
                <div key={post.slug} className={styles.search}>
                  <Post post={post} />
                </div>
              ))}
               </div>
           
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage

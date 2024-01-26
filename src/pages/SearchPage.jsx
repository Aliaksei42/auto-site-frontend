import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './SearchPage.module.css'
import Post from '../components/Post/Post'

const SearchPage = () => {
  const [allPosts, setAllPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://monkfish-app-s78sm.ondigitalocean.app/posts'
        )
        setAllPosts(response.data)
      } catch (error) {
        console.error('Receive error:', error)
      }
    }

    fetchPosts()
  }, [])

  const filterPosts = (post) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase()
    const searchTerms = lowercaseSearchTerm.split(' ')

    return searchTerms.every(
      (term) =>
        post.title.toLowerCase().includes(term) ||
        post.text.toLowerCase().includes(term)
    )
  }

  const filteredResults = searchTerm ? allPosts.filter(filterPosts) : []

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchRow}>
        <div className={styles.inputWithButton}>
          <input
            type="text"
            placeholder="Wpisz tekst do wyszukania"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.search}>
          {filteredResults.length === 0 && searchTerm.length > 0 ? (
            <div>Nie ma takiego wyniku</div>
          ) : (
            filteredResults.map((post) => (
              <div key={post.slug}>
                <Post post={post} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage

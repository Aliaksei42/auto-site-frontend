// src/pages/Trends.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../components/Posts/Posts'

const Trends = () => {
  const [allFetchedPosts, setAllFetchedPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://monkfish-app-s78sm.ondigitalocean.app/posts'
        )
        setAllFetchedPosts(response.data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()
  }, [])

  const trendsPosts = allFetchedPosts.filter(
    (post) => post.category === 'Trends'
  )
  const interestingPosts = allFetchedPosts.filter(
    (post) => post.category === 'Interesting'
  )

  const postsData = {
    category: trendsPosts,
    interesting: interestingPosts,
  }

  return (
    <div>
      <Posts category="Trends" allPosts={postsData} />
    </div>
  )
}

export default Trends

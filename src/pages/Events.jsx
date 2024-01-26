// src/pages/Events.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../components/Posts/Posts'

const Events = () => {
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

  const eventsPosts = allFetchedPosts.filter(
    (post) => post.category === 'Events'
  )
  const interestingPosts = allFetchedPosts.filter(
    (post) => post.category === 'Interesting'
  )
  const postsData = {
    category: eventsPosts,
    interesting: interestingPosts,
  }

  return (
    <div>
      <Posts category="Events" allPosts={postsData} />
    </div>
  )
}

export default Events

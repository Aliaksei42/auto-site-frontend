import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../components/Posts/Posts'

const Home = () => {
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

  const categoryPosts = allFetchedPosts.filter(
    (post) => post.category === 'Home'
  )
  const interestingPosts = allFetchedPosts.filter(
    (post) => post.category === 'Interesting'
  )

  const postsData = {
    category: categoryPosts,
    interesting: interestingPosts,
  }

  return (
    <div>
      <Posts category="Home" allPosts={postsData} />
    </div>
  )
}

export default Home

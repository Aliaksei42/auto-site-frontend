// PostPage.js
// Импортируем React и необходимые компоненты
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import styles from './PostPage.module.css' // Импортируем стили для компонента PostPage

// Компонент PostPage
const PostPage = () => {
  // Используем хук useParams для получения параметра из URL
  const { slug } = useParams()
  const [selectedPost, setSelectedPost] = useState(null)
  const [error, setError] = useState(null)
  console.log('Slug from URL:', slug)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!slug) {
          setError('Error fetching post: Slug is undefined')
          return
        }

        // Замените URL на ваш API MongoDB Atlas
        const response = await axios.get(`https://monkfish-app-s78sm.ondigitalocean.app/posts/${slug}`)

        if (response.data) {
          const matchingPost = response.data
          setSelectedPost(matchingPost)
        } else {
          setError(`Error fetching post: ${response.statusText}`)
        }
      } catch (error) {
        console.error('Error fetching post:', error.message)

        // Log the error for debugging
        console.error('Error stack:', error.stack)

        setError(`Error fetching post: ${error.message}`)
      }
    }

    fetchData()
  }, [slug])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!selectedPost) {
    return <h3>Loading...</h3>
  }

  const { img, title, text, date } = selectedPost
  // const postUrl = `http://localhost:3000/posts/${slug}`

  const formattedText = text.split('\n').map((paragraph, index) => (
    // Используем dangerouslySetInnerHTML для выделения нужных частей текста
    <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
  ))

  return (
    <div className={styles.postPage}>
      <div className={styles.postContainer}>
        <img src={img} alt={title} className={styles.postPageImage} />
        <div className={styles.postPageTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.postPageText}>
          {formattedText}
          {date}
        </div>
      </div>
    </div>
  )
}

// Экспортируем компонент PostPage
export default PostPage

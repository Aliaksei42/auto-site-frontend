// TopPost.js
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './TopPost.module.css'

const TopPost = ({ topPost }) => {
  // Используем useEffect для инициализации состояния
  useEffect(() => {
    if (topPost) {
      setIsExpanded(false)
    }
  }, [topPost])

  // Используем useState для хранения состояния
  const [isExpanded, setIsExpanded] = useState(false)

  if (!topPost) {
    return null 
  }

  const { img, title, text, slug } = topPost

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Link
      to={`/posts/${slug}`}
      className={styles.topPostLink}
      onClick={toggleExpand}
    >
      <div className={styles.topPost}>
        <img src={img} alt={title} className={styles.topPostImage} />
        <div className={styles.topPostTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.topPostText}>
          {isExpanded ? text : `${text.slice(0, 100)}...`}
        </div>
      </div>
    </Link>
  )
}

export default TopPost

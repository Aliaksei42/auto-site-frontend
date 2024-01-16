import { Link } from 'react-router-dom'
import { useState } from 'react'
import styles from './Post.module.css'

const Post = ({ post }) => {
  const { img, title, text, date } = post
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Link
      to={`/posts/${post.id}-${post.title.replace(/\s+/g, '-')}`}
      className={styles.postLink}
      onClick={toggleExpand}
    >
      <div className={styles.post}>
        <img src={img} alt={title} className={styles.postImage} />
        <div className={styles.postTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.postText}>
          {isExpanded ? text : `${text.slice(0, 100)}...`}
        </div>
        <h4>{date}</h4>
      </div>
    </Link>
  )
}

export default Post

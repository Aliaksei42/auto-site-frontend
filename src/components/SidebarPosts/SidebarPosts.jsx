// SidebarPosts.js
import { Link } from 'react-router-dom'
import React from 'react'
import styles from './SidebarPosts.module.css'

const SidebarPosts = ({ sidebarPosts }) => {
  const visiblePosts = 4

  // Перемешиваем массив случайным образом
  const shuffledPosts = sidebarPosts.sort(() => Math.random() - 0.5)

  // Берем первые 4 элемента
  const randomPosts = shuffledPosts.slice(0, visiblePosts)

  return (
    <div className={styles.sidebarPostsContainer}>
      <div className={styles.sidebarPosts}>
        {randomPosts.map((sidebarPost) => (
          <Link
            to={`/posts/${sidebarPost.slug}`}
            className={styles.sidebarPostLink}
            key={sidebarPost.slug}
            // onClick={toggleExpand}
          >
            <div className={styles.sidebarPost}>
              {/* Передаем компоненту Post информацию о посте */}
              <img
                src={sidebarPost.img}
                alt={sidebarPost.title}
                className={styles.sidebarPostImage}
              />
              <div className={styles.sidebarPostTitle}>
                <h3>{sidebarPost.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SidebarPosts

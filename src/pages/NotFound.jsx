// NotFound.js
import React from 'react'
import styles from './NotFound.module.css'

const NotFound = () => {
    const notFound = {
    img: '../../../../img/photo/NotFound.jpg',
    title: 'Страница не найдена',
    text: 'Попробуйте через 5 мин.',
  };
  const { img, title, text } = notFound;
  
  return (
    <div className={styles.postPage}>
      <div className={styles.notFoundContainer}>
        <img src={img} alt={title} className={styles.notFoundImage} />
        <div className={styles.notFoundPageTitle}>
          <h3>{title}</h3>
        </div>
        <div className={styles.postPageText}>{text}</div>
      </div>
    </div>
  )
}


export default NotFound
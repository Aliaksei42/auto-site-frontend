// src/components/Header.js
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [isLanguageMenuOpen, setLanguageMenuOpen] = useState(false)

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!isLanguageMenuOpen)
  }

  const handleLanguageSelect = (language) => {
    // Здесь можно добавить код для изменения языка в приложении
    console.log(`Selected language: ${language}`)
    // Пример: setLanguage(language);
    setLanguageMenuOpen(false) // Закрываем меню после выбора языка
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Выпадающее окно с возможностью выбора языка */}
        <div className={styles.languageSwitch}  onClick={toggleLanguageMenu}  >
          <span className={styles.currentLanguage}>PL</span>
          {isLanguageMenuOpen && (
            <div className={styles.languageMenu} >
              <div onClick={() => handleLanguageSelect('EN')}>EN</div>
              <div onClick={() => handleLanguageSelect('RU')}>RU</div>
              {/* Добавьте дополнительные языки, если необходимо */}
            </div>
          )}
        </div>
        {/* Средняя часть с логотипом и названием сайта */}
        <Link to="/" className={styles.logoLink}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
            <h1 className={styles.logoText}>Auto Wroclaw</h1>
          </div>
        </Link>

        {/* Правая часть с иконкой конверта */}
        <Link
          to="https://www.linkedin.com/in/aliaksei-iuko/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.emailLink}
          title="Contact us"
        >
          <div className={styles.emailIcon}>&#9993;</div>
        </Link>
      </div>
    </header>
  )
}

export default Header

import { useState } from 'react'
import styles from './Input.module.css'

const Input = ({  }) => {
  
  const [searchValue, setSearhValue] = useState('')
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Сработал Enter на Input')
    }
  }

  const onChangeSearchInput = (event) => {
    console.log(event.target.value)
    setSearhValue(event.target.value)
  }

  return (
    <>
    <div className={styles.inputWithButton}>
      <input
        type="text"
        placeholder="Wpisz tekst do wyszukania"
        value={searchValue}
        onChange={onChangeSearchInput}
        onKeyPress={handleKeyPress} // Добавляем обработчик нажатия клавиши
        className={styles.input}
        src="/img"
      />
      
        <button onClick={() => {}} className={styles.inputButton}>
          Szukaj
        </button>
     
    </div>
    <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'все посты'}</h1>
    </>
  )
}

export default Input

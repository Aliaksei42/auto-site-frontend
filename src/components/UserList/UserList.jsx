// UserList.jsx

import React, { useEffect, useState } from 'react';

import styles from './UserList.module.css';

const UserList = ({ post }) => {
  const { img, title, text, date } = post;

  // Состояние для хранения данных о пользователях
  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersData = await userService.getUsers();
//         setUsers(usersData);
//       } catch (error) {
//         console.error('Ошибка при получении данных о пользователях:', error);
//       }
//     };

//     fetchData();
//   }, []);

  return (
    <div className={styles.post}>
      <img src={img} alt={title} className={styles.postImage} />
      <div className={styles.postTitle}>
        <h3>{title}</h3>
      </div>
      <div className={styles.postText}>
        {text}
      </div>
      <h4>{date}</h4>

      {/* Отображаем карточку пользователя */}
      {users.map(user => (
        <div key={user.id} className={styles.userCard}>
          <img src={user.img} alt={user.title} />
          <h3>{user.title}</h3>
          <p>{user.text}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
// src/components/Navigation.js
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation(); // Hook для получения текущего пути страницы

  return (
    <div className={styles.NavigationSticky}>
      <nav className={styles.nav}>
        <NavLink to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>
        Główna
        </NavLink>
        <NavLink to="/news" className={`${styles.navLink} ${location.pathname === '/news' ? styles.active : ''}`}>
        Aktualności
        </NavLink>
        <NavLink to="/events" className={`${styles.navLink} ${location.pathname === '/events' ? styles.active : ''}`}>
        Wydarzenia
        </NavLink>
        <NavLink to="/trends" className={`${styles.navLink} ${location.pathname === '/trends' ? styles.active : ''}`}>
        Trendy
        </NavLink>
        <NavLink to="/searchPage" className={`${styles.navLink} ${location.pathname === '/searchPage' ? styles.active : ''}`}>
        Szukaj
        </NavLink>
        <NavLink to="/interesting" className={`${styles.navLink} ${location.pathname === '/interesting' ? styles.active : ''}`}>
        Ciekawy
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;

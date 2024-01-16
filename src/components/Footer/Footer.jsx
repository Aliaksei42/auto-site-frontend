import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.contacts}>
          <p>
            Connect with us:
            <br />
          </p>
          <div className={styles.footerLinks}>
            <Link to="https://www.linkedin.com/in/aliaksei-iuko/" target="_blank">
              <img
                src="/img/icons/emailIcon.png"
                alt="email"
                width={40}
                height={40}
              />
            </Link>
            {/* <Link to="https://www.instagram.com/your-instagram" target="_blank">
              <img
                src="/img/icons/instagramIcon.png"
                alt="instagram"
                width={40}
                height={40}
              />
            </Link>
            <Link to="https://web.telegram.org" target="_blank">
              <img
                src="/img/icons/telegramIcon.png"
                alt="telegram"
                width={40}
                height={40}
              />
            </Link> */}
          </div>
        </div>
        <div className={styles.details}>
          <p>
            © Auto-Wroclaw.pl - Twój samochód, Twoja droga, Twoje miasto{' '}
            {new Date().getFullYear()}
          </p>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer

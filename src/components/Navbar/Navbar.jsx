import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logoEevee from '../../assets/images/logoeevee.png'


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src={logoEevee}
          alt="Eevee Café logo"
          className={styles.logoImg}
        />
        <span className={styles.logoText}>Eevee Café</span>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>Menú</Link>
        <Link to="/" className={styles.btnPrimary}>Comience Ahora</Link>
      </div>
    </nav>
  )
}

export default Navbar
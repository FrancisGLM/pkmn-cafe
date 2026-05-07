import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'
import imagen404 from '../assets/images/404.png'

function NotFound() {
  return (
    <main className={styles.pagina}>
      <div className={styles.contenido}>
        <img
          src={imagen404}
          alt="Eevee perdido"
          className={styles.imagen}
        />
        <Link to="/" className={styles.btnVolver}>
          Volver al café
        </Link>
      </div>
    </main>
  )
}

export default NotFound
import styles from './SeccionReseñas.module.css'
import CardReseña from './CardReseña'
import { reseñas } from '../../data/dummy'

function SeccionReseñas() {
  return (
    <section className={styles.seccion}>
      <h2 className={styles.titulo}>¿Qué dicen nuestros clientes?</h2>
      <div className={styles.grid}>
        {reseñas.map((reseña) => (
          <CardReseña
            key={reseña.id}
            nombre={reseña.nombre}
            foto={reseña.foto}
            texto={reseña.texto}
            estrellas={reseña.estrellas}
          />
        ))}
      </div>
    </section>
  )
}

export default SeccionReseñas
import styles from './CardReseña.module.css'

function CardReseña({ nombre, foto, texto, estrellas }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <img src={foto} alt={`Foto de ${nombre}`} className={styles.avatar} />
        <span className={styles.nombre}>{nombre}</span>
      </div>
      <p className={styles.texto}>{texto}</p>
      <div className={styles.estrellas}>
        {Array.from({ length: estrellas }).map((_, i) => (
          <span key={i} className={styles.estrella}>★</span>
        ))}
      </div>
    </article>
  )
}

export default CardReseña
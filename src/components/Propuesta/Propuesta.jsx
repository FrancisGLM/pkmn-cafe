import styles from './Propuesta.module.css'

function Propuesta({ titulo, descripcion, imagen, estrellas }) {
  return (
    <section className={styles.propuesta}>
      <div className={styles.propuestaContent}>
        <h2 className={styles.propuestaTitulo}>{titulo}</h2>
        <p className={styles.propuestaTexto}>{descripcion}</p>
        <div className={styles.estrellas}>
          {Array.from({ length: estrellas }).map((_, i) => (
            <span key={i} className={styles.estrella}>★</span>
          ))}
        </div>
      </div>
      <div className={styles.propuestaImagen}>
        <img src={imagen} alt={titulo} />
      </div>
    </section>
  )
}

export default Propuesta
import { useState, useEffect } from 'react'
import { productosSlider } from '../../data/dummy'
import styles from './Slider.module.css'

function Slider() {
  const [actual, setActual] = useState(0)
  const total = productosSlider.length

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % total)
    }, 3500)
    return () => clearInterval(intervalo)
  }, [total])

  const anterior = () => setActual((prev) => (prev - 1 + total) % total)
  const siguiente = () => setActual((prev) => (prev + 1) % total)

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.titulo}>✨ Nuestras principales bebidas ✨</h2>

      <div className={styles.sliderWrapper}>

        <button
          className={styles.btnNav}
          onClick={anterior}
          aria-label="Anterior"
        >
          ‹
        </button>

        <div className={styles.sliderTrack}>
          <div
            className={styles.sliderInner}
            style={{ transform: `translateX(-${actual * 100}%)` }}
          >
            {productosSlider.map((producto) => (
              <div
                key={producto.id}
                className={styles.slide}
                style={{ '--slide-color': producto.color }}
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className={styles.slideImg}
                />
                <div className={styles.slideInfo}>
                    <span className={styles.slideBadge}>Bebida especial</span>
                    <h3 className={styles.slideNombre}>{producto.nombre}</h3>
                    <p className={styles.slideDesc}>{producto.descripcion}</p>
                    <div className={styles.tags}>
                        {producto.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles.btnNav}
          onClick={siguiente}
          aria-label="Siguiente"
        >
          ›
        </button>

      </div>

      <div className={styles.dots}>
        {productosSlider.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === actual ? styles.dotActivo : ''}`}
            onClick={() => setActual(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

export default Slider
import styles from './Hero.module.css'
import heroCafe from '../../assets/images/presentacion.png'  // REEMPLAZAR LUEGO CON ALGUNA IMAGEN QUE TENGA POR AHI DE CAFE 

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImage}>
        <img src={heroCafe} alt="Eevee latte art" />
      </div>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Bienvenido a<br />Eevee Café!</h1>
        <p className={styles.heroText}>
          Disfruta de la magía de tu Eeveevolution favorita en cada sorbo y bocado.
          ¡Delicioso y adorable! <br />
          {/* // REEMPLAZAR LUEGO POR ALGO MEJOR O MAS ELABORADO SI SE ME OCURRE */}
        </p>
        <a href="#menu" className={styles.heroCta}>¡Pide Ahora!</a>
      </div>
    </section>
  )
}

export default Hero
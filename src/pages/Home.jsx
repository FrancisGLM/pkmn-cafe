import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Propuesta from '../components/Propuesta/Propuesta'
import SeccionReseñas from '../components/Cards/SeccionReseñas'
import Footer from '../components/Footer/Footer'
import pasteleriaImg from '../assets/images/eeveecafes.png'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Propuesta
          titulo="Nuestras creaciones especiales. Pastelería temática de Eevee recién horneada y un menú que deleita."
          descripcion="Cada artículo de nuestro menú está hecho con amor e inspirado en tus Eeveevoluciones favoritas. Desde los lattes azules de Vaporeon hasta las galletas especiadas de Flareon, hay algo mágico para cada entrenador."
          imagen={pasteleriaImg}
          estrellas={3}
        />
        <SeccionReseñas />
      </main>
      <Footer />
    </>
  )
}

export default Home
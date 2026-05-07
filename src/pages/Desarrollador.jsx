import Navbar from '../components/Navbar/Navbar'
import Desarrollador from '../components/Desarrollador/Desarrollador'
import Footer from '../components/Footer/Footer'

function DesarrolladorPage() {
  return (
    <>
      <Navbar />
      <main>
        <Desarrollador
          nombre="Francisco Lopez M."
          carrera="Ingeniería Civil en Informática"
          ciudad="Talca"
          github="https://github.com/FrancisGLM/pkmn-cafe"
        />
      </main>
      <Footer />
    </>
  )
}

export default DesarrolladorPage
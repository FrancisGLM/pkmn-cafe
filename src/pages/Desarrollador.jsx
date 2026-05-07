import Desarrollador from '../components/Desarrollador/Desarrollador.jsx'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

const GITHUB_USER = 'FrancisGLM'

function DesarrolladorPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5e6c8', padding: '2rem 1rem' }}>
        <Desarrollador
          nombre="Francisco López M."
          carrera="Ingeniería Civil en Informática"
          ciudad="Talca, Chile"
          githubUser={GITHUB_USER}
          descripcion="Estudiante de Ingeniería Civil en Informática en la Universidad Católica del Maule, con experiencia en desarrollo web y automatización de procesos."
          tecnologias={['React', 'Vite', 'CSS Modules', 'React Router DOM', 'JavaScript']}
        />
      </main>
      <Footer />
    </>
  )
}

export default DesarrolladorPage
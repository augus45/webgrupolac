import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Empresa from './pages/Empresa'
import ServiciosPage from './pages/ServiciosPage'
import Contacto from './pages/Contacto'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

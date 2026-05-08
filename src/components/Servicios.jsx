import { Link } from 'react-router-dom'
import './Servicios.css'

const servicios = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Logística y Transporte',
    desc: 'Transporte de combustibles, lubricantes y cargas generales con flota propia y certificaciones de calidad.',
    link: 'https://www.lac.com.ar/website/?p=140',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Red de Estaciones de Servicio',
    desc: 'Estaciones YPF con combustibles, lubricantes, tienda y servicios para una experiencia completa.',
    link: 'https://www.lac.com.ar/website/?p=610',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Distribuidora Mayorista',
    desc: 'Comercialización de combustibles y lubricantes a grandes cuentas y estaciones de servicio.',
    link: 'https://www.lac.com.ar/website/?p=643',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/>
      </svg>
    ),
    title: 'Obras Viales y Hormigón',
    desc: 'Construcción de infraestructura vial y producción de hormigón elaborado con estándares de calidad.',
    link: 'https://www.lac.com.ar/website/?p=2033',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'LAC Agro',
    desc: 'Soluciones para el sector agroindustrial con insumos, logística y asesoramiento especializado.',
    link: 'https://www.lac.com.ar/website/?p=3076',
  },
]

export default function Servicios() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="servicios__header">
          <span className="section-label">Nuestros Servicios</span>
          <h2 className="section-title">Unidades de Negocio</h2>
          <p className="section-subtitle">
            Operamos en cinco áreas estratégicas con más de 50 años de trayectoria,
            generando valor en toda la cadena energética y logística.
          </p>
        </div>

        <div className="servicios__grid">
          {servicios.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="servicio-card"
            >
              <div className="servicio-card__icon">{s.icon}</div>
              <h3 className="servicio-card__title">{s.title}</h3>
              <p className="servicio-card__desc">{s.desc}</p>
              <span className="servicio-card__link">
                Ver más
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

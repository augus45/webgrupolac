import './Nosotros.css'

const stats = [
  { value: '50+', label: 'Años de trayectoria' },
  { value: '5', label: 'Unidades de negocio' },
  { value: '400+', label: 'Colaboradores' },
  { value: '3', label: 'Provincias con presencia' },
]

export default function Nosotros() {
  return (
    <section className="section section-dark" id="nosotros">
      <div className="container">
        <div className="nosotros__grid">
          <div className="nosotros__info">
            <span className="section-label">Quiénes Somos</span>
            <h2 className="section-title">Organización. Tecnología. Valor.</h2>
            <p className="nosotros__text">
              Grupo LAC es una empresa cordobesa con más de 50 años de experiencia
              en logística, comercialización de combustibles, construcción y agro.
              Nuestro propósito es generar valor a través de la mejora continua
              y el compromiso con la calidad, la seguridad y el medio ambiente.
            </p>
            <a
              href="https://www.lac.com.ar/website/?p=134"
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocé nuestra historia
            </a>
          </div>

          <div className="nosotros__stats">
            {stats.map((s, i) => (
              <div key={i} className="stat">
                <span className="stat__value">{s.value}</span>
                <span className="stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

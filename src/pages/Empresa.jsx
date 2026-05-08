import './Empresa.css'

export default function Empresa() {
  return (
    <main className="page">
      <div className="page__hero">
        <div className="container">
          <span className="section-label">Empresa</span>
          <h1 className="page__title">Organización. Tecnología. Valor.</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="empresa__grid">
            <div className="empresa__section">
              <h2>Historia</h2>
              <p>
                Grupo LAC nació en Córdoba hace más de 50 años como un pequeño
                emprendimiento familiar. Desde entonces, crecemos día a día
                impulsados por la convicción de que el trabajo bien hecho y la
                mejora continua son la base del verdadero progreso.
              </p>
              <p>
                Hoy somos una organización con presencia en logística y transporte,
                estaciones de servicio, distribución mayorista, obras viales y agro,
                generando valor en cada eslabón de nuestra cadena.
              </p>
            </div>

            <div className="empresa__section">
              <h2>Misión</h2>
              <p>
                Brindar soluciones integrales de logística, combustibles y
                construcción con los más altos estándares de calidad, seguridad
                y responsabilidad ambiental, generando valor para nuestros
                clientes, colaboradores y la comunidad.
              </p>
            </div>

            <div className="empresa__section">
              <h2>Visión</h2>
              <p>
                Ser referentes en cada uno de nuestros negocios, destacándonos
                por nuestra excelencia operativa, innovación tecnológica y
                compromiso con el desarrollo sostenible de la región.
              </p>
            </div>

            <div className="empresa__section">
              <h2>Valores</h2>
              <ul className="empresa__valores">
                <li>
                  <strong>Integridad</strong> — Actuamos con ética y transparencia en cada decisión.
                </li>
                <li>
                  <strong>Compromiso</strong> — Nos entregamos por completo a cada desafío.
                </li>
                <li>
                  <strong>Mejora Continua</strong> — Buscamos ser mejores cada día.
                </li>
                <li>
                  <strong>Trabajo en Equipo</strong> — Juntos logramos más.
                </li>
                <li>
                  <strong>Responsabilidad</strong> — Cuidamos a las personas y el medio ambiente.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="empresa__cta">
            <h2 className="section-title">Código de Ética y Conducta</h2>
            <p className="section-subtitle">
              Conocé el marco institucional que guía nuestras acciones y decisiones.
            </p>
            <a
              href="https://www.lac.com.ar/website/?p=4387"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Código de Ética
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

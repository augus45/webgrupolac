import './ServiciosPage.css'

const unidades = [
  {
    title: 'LAC Logística y Transporte',
    desc: 'Transporte de combustibles, lubricantes y cargas generales. Contamos con flota propia de camiones cisterna y equipos de última generación, choferes capacitados y certificaciones que garantizan la seguridad y la calidad en cada entrega.',
    features: [
      'Flota propia de camiones cisterna',
      'Certificaciones de calidad y seguridad',
      'Cobertura en Córdoba y regiones aledañas',
      'Sistema de monitoreo GPS en tiempo real',
    ],
    link: 'https://www.lac.com.ar/website/?p=140',
  },
  {
    title: 'LAC Red de Estaciones de Servicio',
    desc: 'Operamos estaciones de servicio YPF en ubicaciones estratégicas de Córdoba y La Rioja. Ofrecemos combustibles, lubricantes, tienda de conveniencia, lavadero y servicios mecánicos básicos.',
    features: [
      'Combustibles YPF de calidad',
      'Tienda de conveniencia',
      'Servicio de lavadero',
      'Atención al cliente personalizada',
    ],
    link: 'https://www.lac.com.ar/website/?p=610',
  },
  {
    title: 'LAC Distribuidora Mayorista',
    desc: 'Comercialización mayorista de combustibles y lubricantes para grandes cuentas, estaciones de servicio y clientes corporativos. Nos abastecemos de las principales refinerías del país.',
    features: [
      'Combustibles y lubricantes de primeras marcas',
      'Entrega a granel y en tambores',
      'Asesoramiento técnico especializado',
      'Logística de distribución eficiente',
    ],
    link: 'https://www.lac.com.ar/website/?p=643',
  },
  {
    title: 'LAC Obras Viales – Hormigón Elaborado',
    desc: 'Ejecutamos obras de infraestructura vial y producimos hormigón elaborado con rigurosos controles de calidad. Participamos en proyectos públicos y privados de la región.',
    features: [
      'Construcción y mantenimiento de caminos',
      'Hormigón elaborado con laboratorio propio',
      'Equipos y maquinaria pesada',
      'Experiencia en obras públicas y privadas',
    ],
    link: 'https://www.lac.com.ar/website/?p=2033',
  },
  {
    title: 'LAC Agro',
    desc: 'Soluciones integrales para el sector agroindustrial. Proveemos insumos, logística especializada y asesoramiento técnico para acompañar al productor en cada etapa del ciclo agrícola.',
    features: [
      'Insumos y agroquímicos',
      'Logística de granos e insumos',
      'Almacenamiento y acondicionamiento',
      'Asesoramiento técnico personalizado',
    ],
    link: 'https://www.lac.com.ar/website/?p=3076',
  },
]

export default function ServiciosPage() {
  return (
    <main className="page">
      <div className="page__hero">
        <div className="container">
          <span className="section-label">Servicios</span>
          <h1 className="page__title">Nuestras Unidades de Negocio</h1>
          <p className="page__subtitle">
            Operamos en cinco áreas estratégicas con más de 50 años de experiencia.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="serviciospage__list">
            {unidades.map((u, i) => (
              <div key={i} className="serviciospage__item">
                <div className="serviciospage__number">0{i + 1}</div>
                <div className="serviciospage__content">
                  <h2>{u.title}</h2>
                  <p>{u.desc}</p>
                  <ul>
                    {u.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={u.link}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Más información
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

import './Novedades.css'

const noticias = [
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-04-at-11.26.50.jpeg',
    title: 'LAC implementa su Código de Ética y Conducta',
    excerpt: 'La compañía formalizó su Código de Ética y Conducta como marco institucional obligatorio para todos los colaboradores.',
    link: 'https://www.lac.com.ar/website/?p=4427',
    date: 'Mar 2026',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2025/11/DESTACADA.jpg',
    title: 'Inauguramos la Estación de Servicio LAC–YPF en San José de la Dormida',
    excerpt: 'Un nuevo paso en el crecimiento del Grupo LAC y en el desarrollo del norte cordobés.',
    link: 'https://www.lac.com.ar/website/?p=4238',
    date: 'Nov 2025',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2025/12/DESTACADA-1.jpg',
    title: 'Campaña 2025 de Prevención de la Fatiga',
    excerpt: 'En el marco de nuestro Programa de Cultura de Seguridad, durante 2025 LAC llevó adelante una nueva campaña.',
    link: 'https://www.lac.com.ar/website/?p=4234',
    date: 'Dic 2025',
  },
  {
    img: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-03-at-12.06.37.jpeg',
    title: 'Celebramos el Día de la Madre en nuestras estaciones',
    excerpt: 'El domingo 19 de octubre, nuestras estaciones de servicio celebraron junto a las mamás.',
    link: 'https://www.lac.com.ar/website/?p=4205',
    date: 'Nov 2025',
  },
]

export default function Novedades() {
  return (
    <section className="section section-alt" id="novedades">
      <div className="container">
        <div className="novedades__header">
          <span className="section-label">Novedades</span>
          <h2 className="section-title">Últimas Noticias</h2>
          <p className="section-subtitle">
            Mantenete al día con las novedades del Grupo LAC.
          </p>
        </div>

        <div className="novedades__grid">
          {noticias.map((n, i) => (
            <a
              key={i}
              href={n.link}
              target="_blank"
              rel="noopener noreferrer"
              className="noticia-card"
            >
              <div className="noticia-card__img">
                <img src={n.img} alt={n.title} loading="lazy" />
              </div>
              <div className="noticia-card__body">
                <span className="noticia-card__date">{n.date}</span>
                <h3 className="noticia-card__title">{n.title}</h3>
                <p className="noticia-card__excerpt">{n.excerpt}</p>
                <span className="noticia-card__link">
                  Leer más
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

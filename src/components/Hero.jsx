import { useState, useEffect, useCallback } from 'react'
import './Hero.css'

const slides = [
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2026/02/Codigo-de-Etica-y-Conducta_BANNERWEB-1.jpg',
    title: 'Código de Ética y Conducta',
    subtitle: 'Compromiso con la transparencia y la integridad en cada acción.',
    link: 'https://www.lac.com.ar/website/?p=4387',
  },
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2022/04/lac_dh_LacAgro_promo.png',
    title: 'LAC Agro',
    subtitle: 'Soluciones agroindustriales con tecnología y compromiso.',
    link: 'https://www.lac.com.ar/website/?p=3076',
  },
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2026/03/lac_dh_LyT_cuatrinorma.png',
    title: 'Logística y Transporte',
    subtitle: 'Más de 50 años llevando valor a cada destino.',
    link: 'https://www.lac.com.ar/website/?p=140',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero__overlay" />
          <div className="container hero__content">
            <div className="hero__tagline">
              <span>Organización.</span>
              <span>Tecnología.</span>
              <span>Valor.</span>
            </div>
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__subtitle">{slide.subtitle}</p>
            <a
              href={slide.link}
              className="btn btn-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conocé más
            </a>
          </div>
        </div>
      ))}

      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Siguiente">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

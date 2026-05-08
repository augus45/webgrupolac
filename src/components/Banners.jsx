import './Banners.css'

const banners = [
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2022/04/lac_dh_LacAgro_promo.png',
    link: 'https://www.lac.com.ar/website/?p=3076',
  },
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2015/07/lac_dh_lyt_dondesea.png',
    link: 'https://www.lac.com.ar/website/?p=140',
  },
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2020/08/lac_dh_OVHE_promo.png',
    link: 'https://www.lac.com.ar/website/?p=2033',
  },
  {
    image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2015/07/lac_empresas-2.png',
    link: '',
  },
]

export default function Banners() {
  return (
    <section className="banners">
      {banners.map((b, i) => (
        <div key={i} className="banners__item">
          {b.link ? (
            <a href={b.link} target="_blank" rel="noopener noreferrer">
              <img src={b.image} alt="" loading="lazy" />
            </a>
          ) : (
            <img src={b.image} alt="" loading="lazy" />
          )}
        </div>
      ))}
    </section>
  )
}

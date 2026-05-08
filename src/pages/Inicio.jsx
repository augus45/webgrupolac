import Hero from '../components/Hero'
import Novedades from '../components/Novedades'
import Banners from '../components/Banners'
import Clientes from '../components/Clientes'

export default function Inicio() {
  return (
    <>
      <Hero />
      <Novedades />
      <Banners />
      <section className="banners">
        <div className="banners__item">
          <a href="https://www.lac.com.ar/website/?p=643" target="_blank" rel="noopener noreferrer">
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://www.lac.com.ar/website/wp-content/uploads/2015/07/lac_dh_DM_exigenciamercado.png" alt="LAC Distribuidora Mayorista de Combustibles y Lubricantes" loading="lazy" />
          </a>
        </div>
      </section>
      <Clientes />
    </>
  )
}

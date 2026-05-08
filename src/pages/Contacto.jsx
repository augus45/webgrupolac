import './Contacto.css'

export default function Contacto() {
  return (
    <main className="page">
      <div className="page__hero">
        <div className="container">
          <span className="section-label">Contacto</span>
          <h1 className="page__title">Conversemos</h1>
          <p className="page__subtitle">
            Estamos para ayudarte. Dejanos tu consulta y te respondemos a la brevedad.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contacto__grid">
            <div className="contacto__info">
              <div className="contacto__item">
                <div className="contacto__item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Dirección</h4>
                  <p>Ruta 9 Norte km 747, CP 5223<br />Colonia Caroya, Córdoba</p>
                </div>
              </div>

              <div className="contacto__item">
                <div className="contacto__item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4>Teléfono</h4>
                  <p>03525-463520/21/22</p>
                </div>
              </div>

              <div className="contacto__item">
                <div className="contacto__item-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@lac.com.ar</p>
                </div>
              </div>
            </div>

            <form className="contacto__form">
              <div className="form__group">
                <label htmlFor="nombre">Nombre completo</label>
                <input type="text" id="nombre" placeholder="Tu nombre" required />
              </div>
              <div className="form__group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="tu@email.com" required />
              </div>
              <div className="form__group">
                <label htmlFor="asunto">Asunto</label>
                <input type="text" id="asunto" placeholder="¿Sobre qué querés consultar?" />
              </div>
              <div className="form__group form__group--full">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" rows={5} placeholder="Escribí tu mensaje..." required />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

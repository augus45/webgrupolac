import './Clientes.css'

export default function Clientes() {
  return (
    <section className="section" id="clientes">
      <div className="container">
        <div className="clientes__row">
          <div className="clientes__info">
            <h2 className="clientes__title">Clientes de Combustible</h2>
            <p className="clientes__desc">Acceda desde aquí al área de clientes:</p>
          </div>
          <a
            href="https://www.lac.com.ar/webservice/clientes.asp"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            ACCESO
          </a>
        </div>
      </div>
    </section>
  )
}

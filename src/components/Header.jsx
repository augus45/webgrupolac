import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

const empresaItems = [
  { label: 'Historia', path: '/empresa' },
  { label: 'Propósito – Mejora continua – Compromiso', path: '/empresa' },
  { label: 'Misión – Visión – Valores', path: '/empresa' },
  { label: 'Unidades de Negocio', path: '/servicios' },
  { label: 'Código de Ética y Conducta', path: '/empresa' },
  {
    label: 'Nuestras Políticas',
    sub: [
      { label: 'Política de seguridad, salud y medio ambiente', href: 'https://www.lac.com.ar/website/?p=2206' },
      { label: 'Política de operación sustentable y calidad', href: 'https://www.lac.com.ar/website/?p=3647' },
      { label: 'Política de suspensión de tareas', href: 'https://www.lac.com.ar/website/?p=3650' },
      { label: 'Política de alcohol y drogas', href: 'https://www.lac.com.ar/website/?p=3653' },
    ],
  },
]

const serviciosItems = [
  { label: 'LAC Logística y transporte', href: 'https://www.lac.com.ar/website/?p=140' },
  { label: 'LAC Red de Estaciones de Servicio', href: 'https://www.lac.com.ar/website/?p=610' },
  { label: 'LAC Distribuidora Mayorista', href: 'https://www.lac.com.ar/website/?p=643' },
  { label: 'LAC Obras Viales – Hormigón Elaborado', href: 'https://www.lac.com.ar/website/?p=2033' },
  { label: 'LAC Agro', href: 'https://www.lac.com.ar/website/?p=3076' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedDropdown, setExpandedDropdown] = useState(null)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.open(`https://www.lac.com.ar/website/?s=${encodeURIComponent(searchQuery.trim())}`, '_blank')
    }
  }

  const toggleDropdown = (name) => {
    setExpandedDropdown(expandedDropdown === name ? null : name)
  }

  return (
    <header className="header">
      <div className="header__top">
        <div className="container header__top-inner">
          <Link to="/" className="header__logo">
            <img src="/logo-lac.png" alt="Grupo LAC" className="header__logo-img" />
          </Link>

          <form className="header__search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="header__search-input"
            />
            <button type="submit" className="header__search-btn" aria-label="Buscar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </form>

          <button
            className={`header__toggle ${open ? 'header__toggle--active' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`header__nav-wrapper ${open ? 'header__nav-wrapper--open' : ''}`}>
        <div className="container header__nav-inner">
          <nav className="header__nav">
            <div className="header__dropdown-group">
              <button
                className={`header__dropbtn ${expandedDropdown === 'empresa' ? 'header__dropbtn--active' : ''}`}
                onClick={() => toggleDropdown('empresa')}
                onMouseEnter={() => {}}
              >
                Empresa
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`header__dropdown ${expandedDropdown === 'empresa' ? 'header__dropdown--open' : ''}`}>
                {empresaItems.map((item, i) =>
                  item.sub ? (
                    <div key={i} className="header__dropdown-sub">
                      <span className="header__dropdown-label">{item.label}</span>
                      <div className="header__dropdown-submenu">
                        {item.sub.map((sub, j) => (
                          <a key={j} href={sub.href} target="_blank" rel="noopener noreferrer">{sub.label}</a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink key={i} to={item.path} onClick={() => setOpen(false)}>
                      {item.label}
                    </NavLink>
                  )
                )}
              </div>
            </div>

            <div className="header__dropdown-group">
              <button
                className={`header__dropbtn ${expandedDropdown === 'servicios' ? 'header__dropbtn--active' : ''}`}
                onClick={() => toggleDropdown('servicios')}
              >
                Servicios
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className={`header__dropdown ${expandedDropdown === 'servicios' ? 'header__dropdown--open' : ''}`}>
                {serviciosItems.map((item, i) => (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
                ))}
              </div>
            </div>

            <a href="https://www.lac.com.ar/website/?cat=1" target="_blank" rel="noopener noreferrer" className="header__nav-link">
              Novedades
            </a>
            <NavLink to="/contacto" className={({ isActive }) => `header__nav-link ${isActive ? 'header__nav-link--active' : ''}`} onClick={() => setOpen(false)}>
              Contacto
            </NavLink>
          </nav>

          <div className="header__right">
            <a href="https://www.lac.com.ar/webservice/clientes.asp" target="_blank" rel="noopener noreferrer" className="header__right-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Acceso Clientes
            </a>
            <a href="https://www.lac.com.ar/intranet" target="_blank" rel="noopener noreferrer" className="header__right-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
              Intranet LAC
            </a>
            <a href="https://www.lac.com.ar/website/?page_id=24" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/grupolac" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.facebook.com/EmpresaLAC" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com/LAC_Empresa" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.youtube.com/channel/UCx09erMBHZBtwNmf1hQEA8g" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.instagram.com/lac.empresacba/" target="_blank" rel="noopener noreferrer" className="header__right-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://denunciaslac.lineaseticas.com/" target="_blank" rel="noopener noreferrer" className="btn btn-accent btn-sm header__etica">
              Línea Ética
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

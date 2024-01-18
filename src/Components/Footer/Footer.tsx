import { useState } from 'react'
import { IconArrowBottom, IconArrowTop, IconFacebook, IconInstagram, IconLocation, IconMail, IconPhone } from '../Icons/Icons'

import './Footer.scss'

export default function Footer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <footer className="footerContainer">
      <div>
        <section className="follow">
          <h1>Síguenos</h1>
          <div>
            <IconFacebook />
            <IconInstagram />
          </div>
        </section>
        <section className="contact">
          <h1>Contáctanos</h1>
          <div>
            <p>
              <IconMail /> servicioalcliente@moviesshop.co
            </p>
            <p>
              <IconPhone /> +57 300 910 8311
            </p>
            <p>
              <IconLocation /> Nuestras tiendas
            </p>
          </div>
        </section>
      </div>
      <section className="acordeonMobile">
        <section>
          <header onClick={() => handleClick(0)}>
            <div>
              <p>Te ayudamos </p>
              <p>{activeIndex === 0 ? <IconArrowTop /> : <IconArrowBottom />}</p>
            </div>
          </header>
          {activeIndex === 0 && (
            <div>
              <p>Preguntas frecuentes</p>
              <p>Garantía de productos</p>
              <p>Cambios y devoluciones</p>
              <p>Contáctanos</p>
            </div>
          )}
        </section>

        <hr />

        <section>
          <header onClick={() => handleClick(1)}>
            <div>
              <p>Información legal </p>
              <p>{activeIndex === 1 ? <IconArrowTop /> : <IconArrowBottom />}</p>
            </div>
          </header>
          {activeIndex === 1 && (
            <div>
              <p>Modificar mi suscripción</p>
              <p>Términos y condiciones recoge en tienda física</p>
              <p>Términos y condiciones uso sitio web</p>
              <p>Política de tratamiento de la información personal</p>
              <p>Términos y condiciones promociones</p>
              <p>Derecho de retracto</p>
              <p>Superintendencia Industria y Comercio - SIC</p>
              <p>Autorización tratamiento de datos</p>
              <p>Transparencia y Ética Empresarial</p>
            </div>
          )}
        </section>

        <hr />

        <section>
          <header onClick={() => handleClick(2)}>
            <div>
              <p>Mi cuenta</p>
              <p> {activeIndex === 2 ? <IconArrowTop /> : <IconArrowBottom />}</p>
            </div>
          </header>
          {activeIndex === 2 && (
            <div>
              <p>Iniciar sesión</p>
              <p>Ratrear pedido</p>
            </div>
          )}
        </section>

        <hr />

        <section>
          <header onClick={() => handleClick(3)}>
            <div>
              <p>Acerca de movies </p>
              <p>{activeIndex === 3 ? <IconArrowTop /> : <IconArrowBottom />}</p>
            </div>
          </header>
          {activeIndex === 3 && (
            <div>
              <p>Nuestra Historia</p>
              <p>Trabaja con nosotros</p>
            </div>
          )}
        </section>
      </section>
      <section className="informationFooter">
        <div>
          <h1>Te ayudamos</h1>
          <p>Preguntas frecuentes</p>
          <p>Garantía de productos</p>
          <p>Cambios y devoluciones</p>
          <p>Contáctanos</p>
        </div>
        <div>
          <h1>Información legal</h1>
          <p>Modificar mi suscripción</p>
          <p>Términos y condiciones recoge en tienda física</p>
          <p>Términos y condiciones uso sitio web</p>
          <p>Política de tratamiento de la información personal</p>
          <p>Términos y condiciones promociones</p>
          <p>Derecho de retracto</p>
          <p>Superintendencia Industria y Comercio - SIC</p>
          <p>Autorización tratamiento de datos</p>
          <p>Transparencia y Ética Empresarial</p>
        </div>
        <div>
          <h1>Acerca de Movies</h1>
          <p>Nuestra Historia</p>
          <p>Trabaja con nosotros</p>
        </div>
      </section>
    </footer>
  )
}

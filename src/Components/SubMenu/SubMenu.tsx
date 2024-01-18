import './SubMenu.scss'
import { IMenu } from '../../Interfaces/Interfaces'

export default function SubMenu({ onClose, className }: IMenu) {
  const handleClose = () => {
    onClose()
  }

  return (
    <main className={`container ${className}`}>
      <header className="header">
        <h1>¡HOLA!</h1>
        <button onClick={handleClose}>x</button>
      </header>
      <hr />
      <section className="sectionMenu">
        <ul>
          <li>Mujer</li>
          <li>Hombre</li>
          <li>Nuevos lanzamientos</li>
          <li>Ropa deportiva 💪</li>
          <li>Ofertas 🔥</li>
        </ul>
      </section>
      <hr />
      <footer className="footer">
        <ul>
          <li>
            <img src="./user.png" alt="icono de usuario" />
            Mi cuenta
          </li>
          <li>
            <img src="./favorito.png" alt="icono de corazón" />
            Mis favoritos
          </li>
          <li>
            <img src="./ubicacion.png" alt="icono de ubicación" />
            Tiendas
          </li>
          <li>
            <img src="./comentario.png" alt="icono de mensaje" />
            Te ayudamos
          </li>
        </ul>
      </footer>
    </main>
  )
}

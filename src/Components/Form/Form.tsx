// Form.jsx
import './Form.scss'

export default function Form() {
  return (
    <section className="formContainer">
      <header>
        <h1>La historia continúa...</h1>
        <p>Suscríbete y entérate de lanzamientos exclusivos, nuevas colecciones y descuentos oficiales</p>
      </header>
      <section>
        <form>
          <div className="inputsForm">
            <label htmlFor="name">
              Nombres y apellidos
              <input type="text" id="name" />
            </label>
            <label htmlFor="email">
              Correo electrónico
              <input type="email" id="email" />
            </label>
            <label htmlFor="phone">
              Celular
              <input type="text" id="phone" />
            </label>
            <label htmlFor="NumDocument">
              Número de documento
              <input type="text" id="NumDocument" />
            </label>
          </div>
          <div className="checkboxGroup">
            <label htmlFor="female">
              <input type="checkbox" id="female" name="interest" value="" />
              Mujer
            </label>
            <label htmlFor="male">
              <input type="checkbox" id="male" name="interest" value="" />
              Hombre
            </label>
          </div>
          <label className="termsLabel">
            <input type="checkbox" id="terms" name="interest" value="" />
            Aceptas <span>Tratamientos de Datos Personales y Términos y Condiciones.</span>
          </label>
          <div className="sendForm">
            <button>Suscribirme</button>
          </div>
        </form>
      </section>
    </section>
  )
}

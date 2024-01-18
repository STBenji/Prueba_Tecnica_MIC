import { useState } from 'react'
import { IconArrowBottom, IconArrowTop } from '../Icons/Icons'
import './Acordeon.scss'
import { IDataAcordeon } from '../../Interfaces/Interfaces'

export default function Acordeon({ data }: IDataAcordeon) {
  const { description, specifications, composition, care, explore } = data.product

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <main className="mainDataProduct">
      <section>
        <header onClick={() => handleClick(0)}>
          <div>
            <p>Descripción del producto </p>
            <p>{activeIndex === 0 ? <IconArrowTop /> : <IconArrowBottom />}</p>
          </div>
        </header>
        {activeIndex === 0 && (
          <div>
            <p>{description}</p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <header onClick={() => handleClick(1)}>
          <div>
            <p>Especificaciones </p>
            <p>{activeIndex === 1 ? <IconArrowTop /> : <IconArrowBottom />}</p>
          </div>
        </header>
        {activeIndex === 1 && (
          <div>
            <strong>Pais:</strong> <p>{specifications.country}</p>
            <strong>Registro Sic:</strong> <p>{specifications.sic}</p>
            <strong>Especificaciones:</strong> <p>{specifications.specification}</p>
            <strong>Color:</strong> <p>{specifications.color}</p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <header onClick={() => handleClick(2)}>
          <div>
            <p>Composición</p>
            <p> {activeIndex === 2 ? <IconArrowTop /> : <IconArrowBottom />}</p>
          </div>
        </header>
        {activeIndex === 2 && (
          <div>
            <p>{composition}</p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <header onClick={() => handleClick(3)}>
          <div>
            <p>Cuidados </p>
            <p>{activeIndex === 3 ? <IconArrowTop /> : <IconArrowBottom />}</p>
          </div>
        </header>
        {activeIndex === 3 && (
          <div>
            <p>{care}</p>
          </div>
        )}
      </section>

      <hr />

      <section>
        <header onClick={() => handleClick(4)}>
          <div>
            <p>Descubre más</p>
            <h3>{activeIndex === 4 ? <IconArrowTop /> : <IconArrowBottom />}</h3>
          </div>
        </header>
        {activeIndex === 4 && (
          <div>
            <p>{explore}</p>
          </div>
        )}
      </section>
      <hr />

      <article>
        <img src="https://moviesshopco.vtexassets.com/arquivos/logoBlanco_resize.png" alt="" />
        <p>
          Compra ahora y págalo hasta en 6 cuotas con Credifin. <strong> Solicita aquí tu crédito.</strong>
        </p>
      </article>
    </main>
  )
}

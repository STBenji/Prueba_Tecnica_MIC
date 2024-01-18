import { useState } from 'react'
import './ProductData.scss'
import { departamentosColombia } from '../../DataStatic/DataStatic'
import { IconHeart } from '../Icons/Icons'
import Acordeon from '../Acordeon/Acordeon'
import { IDataProduct } from '../../Interfaces/Interfaces'

export default function ProductData({ dataProduct }: IDataProduct) {
  const { title, brand, referenceID, priceNow, priceBefore, sizes } = dataProduct.product

  const [selectedSize, setSelectedSize] = useState<number | null>(sizes.findIndex((item) => item.size === 'S'))

  const [count, setCount] = useState(0)

  const totalAvailableUnits = sizes.reduce((total, item) => total + item.availableUnit, 0)

  return (
    <main className="containerDataProduct">
      <header className="headerDataProduct">
        <span>{title}</span>
        <div>
          <p>{brand}</p>
          <p>Ref. {referenceID}</p>
        </div>

        <h2>{priceBefore}</h2>
        <h1>{priceNow}</h1>

        <div className="availableUnit">
          {sizes.length > 0 && (
            <h1>
              ¡Solo <span>{selectedSize !== null ? sizes[selectedSize].availableUnit : totalAvailableUnits}</span> unidades disponibles!
            </h1>
          )}
          <section>
            {sizes.map((item, index) => (
              <button key={index} onClick={() => setSelectedSize(index)} className={index === selectedSize ? 'active red' : ''}>
                {item.size}
              </button>
            ))}
          </section>
        </div>

        <section className="addBag">
          <div>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>
              -
            </button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} disabled={count === (selectedSize !== null ? sizes[selectedSize].availableUnit : totalAvailableUnits)}>
              +
            </button>
          </div>
          <div>
            <button>AGREGAR A MI BOLSA</button>
          </div>
        </section>
      </header>

      <aside className="asideDataProduct">
        <h1>Comprueba disponibilidad de entrega</h1>
        <select name="Departamento" id="">
          <option value="">Selecciona un departamento</option>
          {departamentosColombia.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="Municipio" id="">
          <option value="">Municipio</option>
        </select>
        <button>Comprobar diponibilidad</button>
        <section>
          <IconHeart />
          <p>Agregar a favoritos</p>
        </section>
      </aside>
      <footer>
        <Acordeon data={dataProduct} />
      </footer>
    </main>
  )
}

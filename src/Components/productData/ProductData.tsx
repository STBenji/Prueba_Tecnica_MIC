import { FormEvent, useContext, useState } from 'react'
import './ProductData.scss'
import { departamentosColombia } from '../../DataStatic/DataStatic'
import { IconHeart } from '../Icons/Icons'
import Acordeon from '../Acordeon/Acordeon'
import { IDataProduct, IShopingCartItems } from '../../Interfaces/Interfaces'
import { CartContext } from '../../context'
import { saveLocalStorage } from '../../utils/saveLocalStorage'
import { getLocalStorageItem } from '../../utils/getLocalStorageItem'

export default function ProductData({ dataProduct }: IDataProduct) {
  const cartContextState = useContext(CartContext)
  const { title, brand, referenceID, priceNow, priceBefore, sizes, images, id } = dataProduct.product

  const [selectedSize, setSelectedSize] = useState<number>(0)

  const sizesNumbers: Record<number, string> = {
    0: 'S',
    1: 'M',
    2: 'L',
    3: 'XL',
  }

  const [count, setCount] = useState(0)

  const totalAvailableUnits = sizes.reduce((total, item) => total + item.availableUnit, 0)

  const handleSubmit = (e: FormEvent<HTMLFormElement> | undefined) => {
    e?.preventDefault()
    if (count === 0) return
    const cartPreInformation: IShopingCartItems = {
      id: Number(id),
      brand,
      name: title,
      price: priceNow,
      quantity: count,
      size: sizesNumbers[selectedSize] || 'n',
      image: images[0]?.urlImage
    }
    const items = getLocalStorageItem<IShopingCartItems>('cartItems')
    if (items.length !== 0) {
      const updatedItems = items.map((item) => {
        if (item.id === cartPreInformation.id && item.size === cartPreInformation.size) {
          return { 
            ...item,
            quantity: item.quantity + cartPreInformation.quantity,
          }
        }
        return item
      })
      const searchSize = updatedItems.find(item => item.id === cartPreInformation.id && item.size === cartPreInformation.size)
      if (!searchSize) {
        updatedItems.push(cartPreInformation);
      }
      saveLocalStorage<IShopingCartItems>('cartItems', updatedItems)
    } else {
      saveLocalStorage<IShopingCartItems>('cartItems', [cartPreInformation])
    }


    cartContextState?.setCartState(() => ({
      items: [cartPreInformation]
    }))
  }

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
          <form action="" onSubmit={handleSubmit}>
            <div>
              <button type='button' onClick={() => setCount(count - 1)} disabled={count === 0}>
                -
              </button>
              <h1>{count}</h1>
              <button type='button' onClick={() => setCount(count + 1)} disabled={count === (selectedSize !== null ? sizes[selectedSize].availableUnit : totalAvailableUnits)}>
                +
              </button>
            </div>
            <div>
              <button type='submit'>AGREGAR A MI BOLSA</button>
            </div>
          </form>
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

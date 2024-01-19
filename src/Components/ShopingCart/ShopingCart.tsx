import { useState } from 'react'
import { IShopingCartItems, IShopingCartProps } from '../../Interfaces/Interfaces'
import { getLocalStorageItem } from '../../utils/getLocalStorageItem'
import './ShopingCart.scss'

export default function ShopingCart({ closeFunction }: IShopingCartProps) {
  const [cartItems, setCartItems] = useState<IShopingCartItems[]>(getLocalStorageItem<IShopingCartItems>('cartItems'))

  const handleShopingCart = () => closeFunction()

  const totalCost = cartItems.reduce((acc, current) => {
    const price = Number(String(current.price).replace('$', '').replace('.', ''))
    const quantity = Number(current.quantity)
    return acc + price * quantity
  }, 0)

  return (
    <section className="cartAside">
      <aside className={cartItems && cartItems.length === 0 ? 'noItems' : undefined}>
        <header>
          <h3>Mi bolsa de compras</h3>
          <button type="button" className="buttonIcon" onClick={handleShopingCart}>
            X
          </button>
        </header>
        <section>
          {cartItems && cartItems.length !== 0 ? (
            cartItems.map(({ brand, image, name, price, quantity }: IShopingCartItems, key) => {
              return (
                <section key={key} className="cartProduct">
                  <aside>
                    <img src={image} alt="Imagen referencia producto" />
                  </aside>
                  <section className="cartInfoProduct">
                    <header>
                      <p>{brand}</p>
                      <span>X</span>
                    </header>
                    <div>
                      <p>{name}</p>
                    </div>
                    <div>
                      <section>
                        <button
                          type="button"
                          onClick={() => {
                            if (quantity > 1) {
                              const updatedCart = cartItems.map((item, index) => (index === key ? { ...item, quantity: item.quantity - 1 } : item))
                              setCartItems(updatedCart)
                            }
                          }}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          name="quantity"
                          id="quantity"
                          value={quantity}
                          onChange={(e) => {
                            const updatedCart = cartItems.map((item, index) => (index === key ? { ...item, quantity: Number(e.target.value) } : item))
                            setCartItems(updatedCart)
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const updatedCart = cartItems.map((item, index) => (index === key ? { ...item, quantity: item.quantity + 1 } : item))
                            setCartItems(updatedCart)
                          }}
                        >
                          +
                        </button>
                      </section>
                      <p>{price}</p>
                    </div>
                  </section>
                </section>
              )
            })
          ) : (
            <p className="noItems">Tu carrito está vacío</p>
          )}
        </section>
        <footer className={cartItems && cartItems.length === 0 ? 'hidden' : undefined}>
          <section className="pricing">
            <div>
              <h3>Subtotal</h3>
              <p>${String(totalCost).split('')}</p>
            </div>
            <div>
              <h3>Costos de envío</h3>
              <p>A calcular</p>
            </div>
            <div>
              <h3>Total</h3>
              <p>${String(totalCost).split('')}</p>
            </div>
          </section>
          <section className="shipping">
            <p>{totalCost > 150000 && '¡Tu envío es totalmente gratis!'}</p>
            <section>
              <div className="priceBar" />
              <section>
                <span>$0</span>
                <span>$150.000</span>
              </section>
            </section>
          </section>
          <button type="button" className="buyCart">
            finalizar compra
          </button>
        </footer>
      </aside>
    </section>
  )
}

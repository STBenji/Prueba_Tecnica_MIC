import { CartContext } from '../../context'
import { getLocalStorageItem } from '../../utils/getLocalStorageItem'
import { IconBag, IconFavorite, IconLocation, IconMenu, IconMessage, IconOffers, IconSearch, IconUser } from '../Icons/Icons'
import ShopingCart from '../ShopingCart/ShopingCart'
import SubMenu from '../SubMenu/SubMenu'
import './Navbar.scss'
import { useContext, useEffect, useState } from 'react'

export default function Navbar() {
  const cart = useContext(CartContext)
  const cartItems = cart?.cartState.items

  

  useEffect(() => {
    const items = getLocalStorageItem('cartItems')
    if (cartItems) setCartItemsNumber(items.length)
  }, [cartItems]);

  useEffect(() => {
    const items = getLocalStorageItem('cartItems')
    setCartItemsNumber(items.length)
  }, [])

  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [cartItemsNumber, setCartItemsNumber] = useState(0);
  const closeMenu = () => {
    setIsOpen(false)
  }
    
  const handleShopingCart = () => {
    setCartIsOpen(!cartIsOpen)
    document.body.style.overflow = !cartIsOpen ? 'hidden' : '';
  }

  return (
    <>
      {isOpen && <SubMenu onClose={closeMenu} className={`${isOpen ? 'expanded' : 'closed'}`} />}
      <nav className="navbar">
        {cartIsOpen && <ShopingCart closeFunction={handleShopingCart}/>}

        <ul>
          <section className="navbarStart">
            <section>
              <button onClick={() => setIsOpen(!isOpen)}>
                <IconMenu />
              </button>
              <IconSearch />
            </section>
            <section>
              <li>
                <img src="https://moviesshopco.vtexassets.com/assets/vtex/assets-builder/moviesshopco.theme3/3.0.160/movies-logo___38662b246dad72023156ecfd25bec311.svg" alt="Variante del logo de Movies" width={113} />
              </li>
            </section>
          </section>
          <section className="navbarCenter">
            <li className="menuHover">
              Mujer
              <ul className="submenu">
                <div>
                  <h1>Mujer</h1>
                  <p>Ver todo</p>
                </div>
                <li>Camisas</li>
                <li>Camisetas</li>
                <li>Pijamas</li>
                <li>Ropa interior</li>
                <li>Chaquetas y buzos</li>
                <li>Joggers, pantalones y shorts</li>
                <li>Calzado y accesorios</li>
              </ul>
            </li>
            <li className="menuHover">
              Hombre
              <ul className="submenu">
                <div>
                  <h1>Hombre</h1>
                  <p>Ver todo</p>
                </div>
                <li>Camisas</li>
                <li>Camisetas</li>
                <li>Pijamas y ropa interior</li>
                <li>Chaquetas y buzos</li>
                <li>Joggers, pantalones y bermudas</li>
                <li>Accesorios</li>
                <li>Pantalonetas de baño</li>
              </ul>
            </li>
            <li className="menuHover">
              <span>Nuevos</span> lanzamientos
            </li>
            <li className="menuHover">
              <IconOffers />
              <span>Ofertas</span> de temporada
            </li>
            <li>
              <input type="text" placeholder="Encuentra tu preferido" />
              <IconSearch />
            </li>
          </section>
          <section className="icons navbarEnd">
            <li>
              <IconMessage />
            </li>
            <li>
              <IconUser />
            </li>
            <li>
              <IconFavorite />
            </li>
            <li>
              <IconLocation />
            </li>
            <li onClick={handleShopingCart} className='cartIcon'>
              <button type='button'>
                <IconBag />
                {cartItemsNumber > 0 && (
                  <span>{cartItemsNumber}</span>
                )}
              </button>
            </li>
          </section>
        </ul>
      </nav>
    </>
  )
}

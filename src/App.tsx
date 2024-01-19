import './App.scss'
import ProductPage from './Pages/Product.page'
import { CartProvider } from './context'

function App() {
  return (
    <>
      <CartProvider>
        <ProductPage />
      </CartProvider>
    </>
  )
}

export default App

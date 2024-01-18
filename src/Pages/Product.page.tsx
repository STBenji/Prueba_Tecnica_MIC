import Navbar from '../Components/Navbar/Navbar'
import Product from '../Components/Product/product'

import Data from '../Mocks/products.json'

export default function ProductPage() {
  return (
    <main>
      <Navbar />
      <Product data={Data} />
    </main>
  )
}

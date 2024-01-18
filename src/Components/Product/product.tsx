import Slider from '../Slider/Slider'
import ProductData from '../productData/ProductData'
import './Product.scss'
import { IProduct } from '../../Interfaces/Interfaces'
import SliderVertical from '../Slider/Slider.vertical'

export default function Product({ data }: IProduct) {
  const { images } = data.product

  return (
    <main className="productContainer">
      <section className="links">
        <p>
          Movies / Hombre / Chaquetas y Buzos/ <strong> Chaqueta de la Nasa multicolor con cierre para hombre</strong>
        </p>
      </section>
      <header className="headerProduct">
        <SliderVertical imageArray={images} />
        <Slider imageArray={images} />
        <ProductData dataProduct={data} />
      </header>
    </main>
  )
}

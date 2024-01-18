import Slider from '../Slider/Slider'
import ProductData from '../productData/ProductData'
import './Product.scss'
import { IProduct } from '../../Interfaces/Interfaces'
import SliderVertical from '../Slider/Slider.vertical'
import Gallery from '../Gallery/Gallery'

export default function Product({ data }: IProduct) {
  const { images } = data.product
  const { products } = data

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
      <article className="slider">
        <Gallery data={products} />
      </article>
    </main>
  )
}

import Slider from '../Slider/Slider'
import ProductData from '../productData/ProductData'
import './Product.scss'
import { IProduct } from '../../Interfaces/Interfaces'
import SliderVertical from '../Slider/Slider.vertical'
import Gallery from '../Gallery/Gallery'
import Shipment from '../Shipment/Shipment'
import Form from '../Form/Form'
import Footer from '../Footer/Footer'

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
      <section>
        <Shipment />
      </section>
      <section className="formProduct">
        <Form />
      </section>
      <section className="methodPay">
        <img src="https://www.moviesshop.co/arquivos/medios-de-pago-mic-footer.png" alt="" />
      </section>
      <section className='footerProduct'>
        <Footer />
      </section>
    </main>
  )
}

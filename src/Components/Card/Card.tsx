import { useState } from 'react'
import './Card.scss'
import SliderGallery from '../Slider/Slider.Gallery'
import { IconArrowLeft, IconArrowRigth } from '../Icons/Icons'
import { Size, Item, CardProductProps } from '../../Interfaces/Interfaces'

export default function CardProduct({ data }: CardProductProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % data.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 2 < 0 ? data.length - 2 : prevIndex - 2
      return newIndex
    })
  }

  return (
    <div className="mainContainer">
      <div className="Container">
        {data.slice(currentIndex, currentIndex + 2).map((item: Item) => (
          <section className="cardContainer" key={item.id}>
            <header>
              <SliderGallery imageArray={item.images} />
              <div>
                {item.sizes.map((size: Size, sizeIndex: number) => (
                  <button key={sizeIndex}>{size.size}</button>
                ))}
              </div>
            </header>
            <article className="informationProduct">
              <p>{item.brand}</p>
              <h1>{item.title}</h1>
              <div>
                <p>{item.priceBefore}</p>
                <p>{item.priceNow}</p>
              </div>
            </article>
            <footer className="footerInformationProduct">
              <button>VER PRODUCTO</button>
            </footer>
          </section>
        ))}
      </div>
      <div className="ContainerPC">
        {data.slice(currentIndex, currentIndex + 4).map((item: Item) => (
          <section className="cardContainer" key={item.id}>
            <header>
              <SliderGallery imageArray={item.images} />
              <div>
                {item.sizes.map((size: Size, sizeIndex: number) => (
                  <button key={sizeIndex}>{size.size}</button>
                ))}
              </div>
            </header>
            <article className="informationProduct">
              <p>{item.brand}</p>
              <h1>{item.title}</h1>
              <div>
                <p>{item.priceBefore}</p>
                <p>{item.priceNow}</p>
              </div>
            </article>
            <footer className="footerInformationProduct">
              <button>VER PRODUCTO</button>
            </footer>
          </section>
        ))}
      </div>

      <section>
        <button onClick={handlePrev}>
          <IconArrowLeft />
        </button>
        <button onClick={handleNext}>
          <IconArrowRigth />
        </button>
      </section>
    </div>
  )
}

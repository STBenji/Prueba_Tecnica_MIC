import { useState } from 'react'
import './Slider.Gallery.scss'
import { IconArrowLeft, IconArrowRigth } from '../Icons/Icons'
import { IImageArray, IImage } from '../../Interfaces/Interfaces'

export default function SliderGallery({ imageArray }: IImageArray) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1 < 0 ? imageArray.length - 1 : prevIndex - 1
      return newIndex
    })
  }

  return (
    <main className="imgContainerGallery">
      <div>
        <section>
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            <IconArrowLeft />
          </button>
        </section>
        <section className="imagesGallery">
          {imageArray.map((item: IImage, index) => (
            <div key={item.idImage}>{currentIndex === index && <img src={item.urlImage} alt="" />}</div>
          ))}
        </section>
        <section>
          <button onClick={handleNext} disabled={currentIndex === imageArray.length - 1}>
            <IconArrowRigth />
          </button>
        </section>
      </div>
    </main>
  )
}

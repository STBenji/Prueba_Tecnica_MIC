import { IImageArray } from '../../Interfaces/Interfaces'
import { useState } from 'react'
import './Slider.vertical.scss'
import { IconArrowBottom, IconArrowTop } from '../Icons/Icons'

export default function SliderVertical({ imageArray }: IImageArray) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % imageArray.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 2 < 0 ? imageArray.length - 2 : prevIndex - 2
      return newIndex
    })
  }

  return (
    <div className="slider-container">
      <button onClick={handlePrev} disabled={currentIndex === 0}>
        <IconArrowTop />
      </button>
      <div className="slider-wrapper">
        {imageArray.slice(currentIndex, currentIndex + 2).map((item, index) => (
          <img src={item.urlImage} alt={`slide-${index}`} className="slider-image" key={index} />
        ))}
      </div>
      <button onClick={handleNext} disabled={currentIndex === imageArray.length - 2}>
        <IconArrowBottom />
      </button>
    </div>
  )
}

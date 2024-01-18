import CardProduct from '../Card/Card'
import SendInformation from '../SendInformation/SendInformation'
import './Gallery.scss'

interface IData {
  data: {
    interest: []
    forYou: []
  }
}

export default function Gallery({ data }: IData) {
  const { interest, forYou } = data
  return (
    <section className="containerGallery">
      <section className="interest">
        También te puede <strong>INTERESAR</strong>
      </section>
      <CardProduct data={interest} />
      <section className="interest">
        Seleccionados para <strong>TI</strong>
      </section>
      <CardProduct data={forYou} />
      <section className='sendInfo  '>
        <SendInformation />
      </section>
    </section>
  )
}

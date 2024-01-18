import { IconCar, IconClock } from '../Icons/Icons'
import './SendInformation.scss'

export default function SendInformation() {
  return (
    <section className="sendInformation">
      <p>
        <IconCar />
        Envíos a <strong>toda Colombia</strong>
      </p>
      <p>
        <IconClock />
        Tiempo de entrega de <strong>3 a 7 días hábiles</strong>
      </p>
    </section>
  )
}

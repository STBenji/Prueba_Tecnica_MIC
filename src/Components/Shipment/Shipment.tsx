import { IconAtention, IconCar, IconDevolution, IconFollowUp, IconPay } from '../Icons/Icons'
import './Shipment.scss'

export default function Shipment() {
  return (
    <article className="shipmentContainer">
      <ul>
        <li>
          <IconPay />
          Pagos seguros
        </li>
        <li>
          <div />
          <IconCar />
          Envíos a todo el país
        </li>
        <li>
          <div />
          <IconAtention />
          Atención al cliente
        </li>
        <li>
          <div />
          <IconDevolution />
          Devoluciones gratuitas
        </li>
        <li>
          <div />
          <IconFollowUp />
          Seguimiento del pedido
        </li>
      </ul>
    </article>
  )
}

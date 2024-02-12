import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CardIn = ({title, number, icon, icon2}) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <FontAwesomeIcon icon={icon} />
      </div>

      <div>
        <p>{number}</p>
        <FontAwesomeIcon icon={icon2} />
      </div>
    </>
  )
}

export default CardIn

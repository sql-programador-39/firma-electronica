import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CardIn = ({title, number, icon, icon2}) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <FontAwesomeIcon icon={icon2} />
      </div>

      <div>
        <FontAwesomeIcon icon={icon} />
        <p>{number}</p>
      </div>
    </>
  )
}

export default CardIn

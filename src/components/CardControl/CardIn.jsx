import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CardIn = ({title, number, icon, icon2}) => {
  return (
    <>
     <div>
        <p>{title}</p>
        <p>{number}</p>
      </div>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={icon2} />
      </div> 
    </>
  )
}

export default CardIn

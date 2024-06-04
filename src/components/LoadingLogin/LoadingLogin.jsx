import Spinner from "../Spinner/Spinner"

import '../../components/Modal/ModalDetails.css'
import '../../pages/Login/Login.css'
import '../../components/CardControl/CardControl.css'

const LoadingLogin = ({ text, error }) => {

  const handleClick = () => {
    window.location.href = '/Web/'
  }

  return (
    <>
     <div className="loading-login">
        <div className="card-loading">
          <h2 className="parpadeo">{ text }</h2>

          <div>
            <Spinner />
          </div>
          <div className="button-flex-load">
            { error && <button onClick={handleClick} className="button-card">Regresar al login</button> }
          </div>
        </div>
      </div> 
    </>
  )
}

export default LoadingLogin

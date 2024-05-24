import './InfoLogin.css'

import img7 from '../../assets/7.webp'

const InfoLogin = () => {
  return (
    <>
     <h1 className='h1-info'>Firma <br/>Electrónica</h1>
     
      <p className='p-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum fuga ut delectus saepe suscipit ad placeat maiores minima! Deleniti quod unde beatae minus, corporis praesentium? Laboriosam ipsa officiis alias.</p>
    
      <div className='div-img-info'>
        <img src={img7} alt='company-logo' className='img-info'/>
      </div>
    </>
  )
}

export default InfoLogin

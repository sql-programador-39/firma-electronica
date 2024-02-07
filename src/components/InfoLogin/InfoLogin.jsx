import './InfoLogin.css'

import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'
import img7 from '../../assets/7.webp'

const InfoLogin = () => {
  return (
    <>
     <h1 className='h1-info'>Firma <br/>Electrónica</h1>
     
      <p className='p-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eum fuga ut delectus saepe suscipit ad placeat maiores minima! Deleniti quod unde beatae minus, corporis praesentium? Laboriosam ipsa officiis alias.</p>
    
      <div className='products'>
        <img src={img1} alt='product image' className='img-product'/>
        <img src={img2} alt='product image' className='img-product'/>
        <img src={img3} alt='product image' className='img-product'/>
        <img src={img4} alt='product image' className='img-product'/>
        <img src={img5} alt='product image' className='img-product'/>
      </div>

      <div className='div-img-info'>
        <img src={img7} alt='company-logo' className='img-info'/>
      </div>
    </>
  )
}

export default InfoLogin

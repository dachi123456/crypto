import { cardI } from '../iterfaces/hookI'
import './infoCard.css'

const InfoCard = ({img,price,name}:cardI) => {
  
  return (
    <div className="my-card">
       <img src={img} alt="" />
       <h5>{name}</h5>
       {price && <h6>{price} $</h6>}
    </div>
  )
}

export default InfoCard
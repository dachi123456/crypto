import chartIcon from '../assets/chart-state 1.png'
import './cryptoCard.css'
const CryptoCard = ({img,name,shortName,price}) => {
  return (
    <div className='crypto-card'>
        <span className='info-span'>
            <img src={img} alt="" />
            <h6>{shortName}</h6>
            <div className="name-span">{name}</div>
        </span>
        <span className="price-span">
            <p>{price}$</p>
            <img src={chartIcon} alt="" />
        </span>
    </div>
  )
}

export default CryptoCard
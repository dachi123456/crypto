import '../styles/header.css'
import { Link } from "react-router-dom"
import mainIcon from '../assets/Group 867.svg'
const HeaderComponent = () => {
  return (
    <div className="header-div">
      <Link to={''}><img src={mainIcon} alt="" /></Link>
      <div className='links-div'>
        <Link to={''}>Home</Link>
        <Link to={'chart'}>Dashboard</Link>
        <Link to={'info'}>Coins</Link>
      </div>
      
    </div>
  )
}

export default HeaderComponent
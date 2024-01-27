import { Button } from "react-bootstrap"
import './landingComponent.css'
import { useNavigate } from "react-router-dom"

const LandingMainComp = () => {
  const navigate = useNavigate()
  const onBtnClick = () => {
    navigate('/chart')
  }
  return (
    <div className="landing-main-div">
        <h1>Start and Build Your Crypto Portfolio Here</h1>
        <p>Only Here, you can build a good portfolio and learn 
          best practices about cryptocurrency.
        </p>
        <Button onClick={onBtnClick}>Dashboard</Button>
        
    </div>
  )
}

export default LandingMainComp
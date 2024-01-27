
import { useNavigate } from "react-router-dom"
import CoinPrice from "../components/CoinPrice"
import LandingMainComp from "../components/LandingMainComp"

const LandingPage = () => {
  const naviate = useNavigate()
  const onBtnClick = () => {
    naviate('/info')
  }
  return (
    <div>
      <LandingMainComp />
      <div className="mt-5">
        <h2 className="text-center mb-5 fw-3" style={{color:'white'}}>Coin Prices</h2>
        
         <CoinPrice />

        <div className="d-flex justify-content-center m-auto">
        <button onClick={onBtnClick} className="btn btn-primary mt-3 mb-5" style={{backgroundColor:'#0FAE96',border:'#0FAE96'}}>
          See More
          </button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
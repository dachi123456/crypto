import './coinPrice.css';
import CryptoCard from "./CryptoCard";
import data from '../data.json'
const CoinPrice = () => {
    const response = data
    const spl = response.slice(0,8)
    return (
        <div className="coin-price-div">
            <div className="row m-auto">
            {spl?.map((data,index) => (
               <div className="col-12 m-auto col-sm-6 col-md-4 col-lg-3 g-2 mt-1" key={index}>
                 <CryptoCard
                    img={data.image}
                    name={data.name}
                    price={data.current_price}
                    shortName={data.symbol}
                    key={index}
                />
               </div>
            ))}
            </div>
        </div>
    );
}

export default CoinPrice;

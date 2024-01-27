import { Alert, Spinner } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
import InfoCard from "./InfoCard";
import data from '../data.json'
import CryptoCard from "./CryptoCard";
const InfoCardList = () => {
  const { error, loading, response } = useFetch({ url:'https://api.coingecko.com/api/v3/search/trending' });
  const crypto = data 
  if (error) return <Alert variant="danger">Something went wrong</Alert>;
  if (loading) return <Spinner animation="border" variant="primary" style={{position:'absolute',top:'50%',left:'50%'}}/>;

  if (!response || !response.coins || !Array.isArray(response.coins)) {
    return <div>Data structure is not as expected.</div>;
  }
  
  return (
   <div className="mb-4">
    
       <div className="container">
        <h1>COINS</h1>
      <div className="row mt-5 g-3">
          {crypto.map((el,index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <CryptoCard
            img={el.image}
            name={el.name}
            price={el.current_price}
            shortName={el.symbol}
            key={index}
                />
          </div>
          ))}
        </div>
      </div>
      <div className="list-div">
     <h1 className="text-center">TRENDING</h1>
        {response.coins.map((data) => (
          <InfoCard
            img={data.item.small}
            name={data.item.name}
            key={data.item.coin_id}
          />
        ))}
     
      </div>
   </div>
  );
};

export default InfoCardList;

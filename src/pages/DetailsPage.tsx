import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import '../styles/details.css'
const DetailsPage = () => {
    const { id } = useParams();
    const { response } = useFetch({
        url: `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
    });
   
    if (!response) {
        return <div>Loading...</div>
    }

    const { name, image, description, market_cap_rank } = response;

    return (
        <div className="details-page-div">
            <div>
                {image && <img src={image.large} alt="" />}
                <h2>{name}</h2>
                <h4>Rank: {market_cap_rank}</h4>
                <p dangerouslySetInnerHTML={{__html:description.en}}></p>
            </div>
            
        </div>
    );
};

export default DetailsPage;

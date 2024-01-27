import moment from "moment";
import useFetch from "../hooks/useFetch";
import { CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import './historyChart.css';
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import CryptoCard from "./CryptoCard";
import btcI from '../assets/bitcoin.png';
import ethI from '../assets/eth.png';
import { useNavigate } from "react-router-dom";

const HistoryChart = () => {
    const navigate = useNavigate()
    const [select, setSelect] = useState<string>('bitcoin');
    const { response, error, loading } = useFetch({
        url: `https://api.coingecko.com/api/v3/coins/${select}/market_chart?vs_currency=usd&days=7`,
    });

    if (loading) return <Spinner animation="border" variant="primary" style={{position:'absolute',top:'50%',left:'50%'}}/>;
    if (error) return <Alert variant="danger">Something went wrong</Alert>;

    if (!response || !response.prices || response.prices.length === 0) {
        return <Alert variant="warning">No data available</Alert>;
    }

    const chartData = response.prices.map((val) => ({
        time: moment(val[0]).format("MM/DD"), 
        price: parseFloat(val[1].toFixed(2)), 
    }));

    const onChange = (e) => {
        setSelect(e.target.value)
    }
    const details = () => {
        navigate(`/${select}`)
    }
    return (
        <div className="chart">
            <select name="" id="" onChange={onChange} value={select}>
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
            </select>   
            <LineChart width={500} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 4 }}>
                <Line type="monotone" dataKey="price" stroke="#00C3FD" dot={false} strokeWidth={2} />
                <CartesianGrid stroke="#58626b" horizontal={true}/>
                <XAxis dataKey="time" /> 
                <YAxis/>
                <Tooltip />
            </LineChart>
            <div className="add-info" onClick={details}>
                <CryptoCard price={response.prices[response.prices.length - 1][1].toFixed(2)} name={select.toUpperCase()} img={select === 'bitcoin' ? btcI : ethI} shortName={select === 'bitcoin' ? 'BTC' : 'ETH'}/>
            </div>
        </div>
    );
};

export default HistoryChart;

interface CoinItem {
    item: {
      id: string;
      coin_id: number;
      name: string;
      symbol: string;
      market_cap_rank: number;
      small:string,
      price_btc:number,
      data: {
        price:string
      }
    };
  }
  
  export interface CoinData {
    coins: CoinItem[];
  }
  export interface cardI {
    img: string
    price?: number
    name: string
  }
  export interface coinPriceI{
    current_price: number
    image: string
    id:string
    name:string,
    symbol:string
  }
  export interface detailsI{
    name:string
    image: {
      large: string
    }
    description: {
      en:string
    }
    market_cap_rank:number
  }
  export interface ChartI {
    prices: [number, number][];
  }
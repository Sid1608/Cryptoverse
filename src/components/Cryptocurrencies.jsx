import React,{useState,useEffect} from 'react'
import millify from 'millify';
import {Card,Row,Col,Input} from 'antd';
import {Link} from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
const Cryptocurrencies = ({simplified}) => {
    const count=simplified ? 10 : 100;
    const {data:cryptosList, isFetching}=useGetCryptosQuery(count);
    // console.log("Hello",cryptosList);
    const [cryptos, setCryptos]= useState();
    const [searchTerm, setSearchTerm]=useState('')
    // console.log("Hello",cryptos);
    //useEffect is the combination of component did mount happening at start and also component dit update
    useEffect(()=>{
        // setCryptos(cryptosList?.data?.coins)
        const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    },[cryptosList,searchTerm])
    // function will get executed whenever one of these two things changed
    if(isFetching){
        return 'Loading... ';
    }
    return (
        <>
            {!simplified && <div className="search-crypto">
                <Input placeholder="Search Cryptocurrency" onChange={(e)=>setSearchTerm(e.target.value)}/>
            </div>}
            {/* gutters: spaces between the article */}
            <Row gutter={[32,32]} className="crypto-card-container">
                {cryptos?.map((currency)=>{
                    return <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                        <Link to={`/crypto/${currency.id}`}>
                            <Card 
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className="crypto-image" src={currency.iconUrl}/>}
                                hoverable
                            >
                                 <p>Price: {millify(currency.price)}</p>
                                 <p>Market Cap: {millify(currency.marketCap)}</p>
                                 <p>Daily Change: {millify(currency.change)}%</p>

                            </Card>
                        </Link>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default Cryptocurrencies

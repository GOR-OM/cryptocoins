import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack,Button } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinsCard from './CoinCard';
const Coins = () => {

  const [Coins, setCoins] = useState([]) ;
  const [loading, setLoading] = useState(true) ;
  const [error, setError] = useState(false) ;
  const [page, setpage] = useState(1) ;
  const [currency, setcurrency] = useState("inr") ;
  const cursymbol = currency === "inr" ? "₹" : currency==="eur" ? "€" : "$" ;
  const changePage = (page) => {
    setpage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);


  useEffect(() => {
    const fecthCoins = async () => {
      try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
         console.log(data)
        setCoins(data);
        setLoading(false);

      }catch(error){
        console.log(error);  
        setError(true);
        setLoading(false);

      }
    }
    fecthCoins()  ;

  }, [currency,page]);
  
  if(error) return <ErrorComponent/>

  return (
    <Container maxW={'container.xl'}>
      {loading ? <Loader/> : <>
      
      <HStack wrap={'wrap'}>
        {
          Coins.map((i) => (
            <CoinsCard
            key={i.id}
            name={i.name}
            img={i.image}
            price ={i.current_price}
            cursymbol={cursymbol}
            symbol={i.symbol}

          />
          
          ))
        }
      </HStack>
      <HStack
      w={"full"} 
      overflowX={"auto"} 
      p={"8"}
      >
        {
          btns.map((i,index) => (
            <Button
            key={index}
            bgColor={"blackAlpha.900"}
            color={"white"}
            onClick={() => changePage(index+1)}
            className={`btn ${page === index+1 ? "active" : null}`}
            >
              {index+1}
            </Button>
          ))
        }
      </HStack>

      
      </>}
     
    </Container>
  )
}



export default Coins

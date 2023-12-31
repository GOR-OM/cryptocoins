import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {server} from '../index'
import { Container, HStack,Button, RadioGroup,Radio } from '@chakra-ui/react';
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

  const btns = new Array(101).fill(1);


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

      <RadioGroup value={currency} onChange={setcurrency} p={'8'}>
            <HStack spacing={'4'}>
              <Radio value={'inr'}>INR</Radio>
              <Radio value={'usd'}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>
      
      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
        {
          Coins.map((i) => (
            <CoinsCard
            id= {i.id}
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
            _hover={{
              bg: 'blue.500', 
              transform: 'scale(1.1)', 
              cursor: 'pointer', 
            }}
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

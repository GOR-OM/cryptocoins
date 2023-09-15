import { Container,Box } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom' 
import axios from 'axios'
import {server} from '../index'
import ErrorComponent from './ErrorComponent'



const CoinDetail = () => {
  
const params = useParams();
const [Coins, setCoins] = useState({}) ;
const [loading, setLoading] = useState(true) ;
const [error, setError] = useState(false) ;
const [currency, setcurrency] = useState("inr") ;

useEffect(() => {
  const fecthCoins = async () => {
    try{
      const {data} = await axios.get(`${server}/coins/params.id`)
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

}, [params.id]);
if(error) return <ErrorComponent/>

  return (
      <Container maxW={'container.xl'}>
        {
          loading ? <Loader/> : <>
          
          <Box w={'full'} borderWidth={'1'}>

          </Box>
          
          
          </>
        }
      </Container>
  )
}

export default CoinDetail
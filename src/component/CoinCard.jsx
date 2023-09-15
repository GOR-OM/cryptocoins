import React from 'react'
import { VStack,Image,Heading,Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
   
const CoinCard = ({id,name,img,price,cursymbol='₹',symbol}) =>(
    <Link to={`/coin/${id}`} >
    <VStack
    w={"52"}
    cursor={"pointer"}
    shadow={"dark-lg"}
    p={"8"}
    borderRadius={"lg"}
    transition={"all 0.3s"}
    m={"4"}
    css={{
      "&:hover": {
        transform: "scale(1.1)",
      },
    }}
    >
      <Image
      src={img}
      w={"10"}
      h={"10"}
      
      objectFit={"contain"}
      alt={"Exchange"}
    />
      
      <Heading size={"md"} noOfLines={1} textTransform={"uppercase"}>
      {symbol}
      </Heading>

    <Text noOfLines={1}>{name}</Text>
    <Text noOfLines={2}>{price} {cursymbol}</Text>

    </VStack>
    </Link>
)

export default CoinCard
import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ColorModeSwitcher from '../ColorModeSwitcher'
const Header = () => {
  return (
    <>
    <HStack p={'4'} shadow={'base'} bgColor={'blackAlpha.900'} justifyContent={'space-between'}>
      <HStack>
        <Button color={'white'} variant={'unstyled'}>
          <Link to='/'>Home</Link>
        </Button>
        <Button color={'white'} variant={'unstyled'}>
          <Link to='/exchanges'>Exchange</Link>
        </Button>
        <Button color={'white'} variant={'unstyled'}>
          <Link to='/coins'>Coins</Link>
        </Button>
      </HStack>
      <HStack>
        <Button color={'white'} variant={'unstyled'}>
          <ColorModeSwitcher />
        </Button>
      </HStack>
    </HStack>
  </>
  
  )
}

export default Header
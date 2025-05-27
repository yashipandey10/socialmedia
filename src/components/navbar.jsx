import {Container,IconButton,Text,Flex} from '@chakra-ui/react'
import { GiTreeDoor } from "react-icons/gi";
import { NavLink } from 'react-router';

import React from 'react'
function Navbar(){
    return (
        <Container display={'flex'} shadow={'md'} padding={'5'} marginBottom={0} marginEnd={'0'} marginStart={0} fluid  style={{backgroundColor:'black'}} position="sticky" top="0"
      zIndex="sticky"  >
            <Flex >
         <IconButton fontWeight={'bold'} color={'white'} variant={'ghost'}> <GiTreeDoor /></IconButton>   
        <Text fontWeight={'bold'} color={'white'} padding={'2'} fontSize={'xl'}>EcoNet </Text> 
                <NavLink to="/" style={{ color: "blue", marginRight: "1rem", marginleft: "0"}} >Home</NavLink>
        
        </Flex>
 
        </Container>
    
    )
}

export default Navbar
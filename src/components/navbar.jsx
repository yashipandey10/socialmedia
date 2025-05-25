import {Container,Link,Text} from '@chakra-ui/react'
import {NavLink} from 'react-router'
import React from 'react'
function Navbar(){
    return (
        <Container display={'flex'} shadow={'md'} padding={3} margin={0} fluid  style={{backgroundColor:'black'}}>
        <Text fontWeight={'bold'} color={'white'}>Social</Text>
        <Container display={'flex'} >
            <NavLink to="/" style={{ color: "white", marginRight: "15px"}} >Home</NavLink>
            <NavLink to="/Loginpage" style={{ color: "white" , marginRight: "15px"}}>Login</NavLink>
            <NavLink to="/Registerpage" style={{ color: "white" }}>Register</NavLink>
        </Container>
        </Container>
    
    )
}

export default Navbar
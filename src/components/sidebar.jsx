import { useState } from "react";
import {Container,Text,Box, Stack,Button} from '@chakra-ui/react'
import { NavLink } from 'react-router';
function Sidebar(){
      const [showSidebar, setShowSidebar] = useState(false);
    return (
         <Container maxW={{base:10 ,md:10 ,lg:10}} marginStart={0} marginEnd={10}  >
      <Button
        display={{ base: "block", md: "none" }}
        mb={4}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? "Hide Menu" : "Show Menu"}
      </Button>
      <Box
        w={{ base: "full", md: "28" }}
        mr={4}
        display={{ base: showSidebar ? "block" : "none", md: "block" }}
        bg={{ base: "gray.100", md: "transparent" }}
        p={2}
        position="sticky"
        top="10rem"
        zIndex="sticky"
        borderRadius="md"
      >
        
        <Stack>
        <Text fontWeight="bold" mb={2}>Sidebar</Text>    
        <NavLink to="/" style={{ color: "#008009", marginRight: "1rem", marginleft: "0"}} fontWeight="bold" >Home</NavLink>
        <NavLink to="/Loginpage" style={{ color: "#008009" , marginRight: "1rem"}} fontWeight="bold">Login</NavLink>
        <NavLink to="/Registerpage" style={{ color: "#008009", marginRight: "1rem"}} fontWeight="bold">Register</NavLink>
        <NavLink to="/Profilepage" style={{ color: "#008009", marginRight: "1rem"}} fontWeight="bold">Profile</NavLink>
        </Stack>
        <Box bg="black.900"  borderRadius="md">

        </Box>
      </Box>
      
        </Container>
        
    );
}

export default Sidebar;
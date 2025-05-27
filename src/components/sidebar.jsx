import { useState } from "react";
import {Container,Text,Box, Stack,Button} from '@chakra-ui/react'
import { NavLink } from 'react-router';
function Sidebar(){
      const [showSidebar, setShowSidebar] = useState(false);
    return (
         <Container maxW={{base:10 ,md:10 ,lg:10}} marginStart={0} marginEnd={10} >
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
        top="20"
        zIndex="sticky"
        borderRadius="md"
      >
        <Text fontWeight="bold" mb={2}>Sidebar</Text>
        <Stack>
        <NavLink to="/" style={{ color: "blue", marginRight: "1rem", marginleft: "0"}} >Home</NavLink>
        <NavLink to="/Loginpage" style={{ color: "blue" , marginRight: "1rem"}}>Login</NavLink>
        <NavLink to="/Registerpage" style={{ color: "blue", marginRight: "1rem"}}>Register</NavLink>
        </Stack>
        <Box bg="black.900"  borderRadius="md">

        </Box>
      </Box>
      
        </Container>
        
    );
}

export default Sidebar;
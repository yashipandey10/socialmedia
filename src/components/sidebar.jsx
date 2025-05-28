import React from "react";
import {Box,Button,Container, VStack, Text,IconButton, Center,Drawer,Portal,CloseButton,Icon} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbChartBarPopular, TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoLogInOutline } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { GiTreeDoor } from "react-icons/gi";

function Sidebar({ onShowPopular ,onShowAll }){

  const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUser');
        alert("Logging out!");
        navigate('/loginpage');
    };

  return (
    <Container maxW="fit-content" p={0} >
      <Box
            w={{ base: "full", md: "250px", lg: "20rem" }} display={{base:'none',lg:'flow'}} bg="#255342" color="white" p={5} minH="100vh" position="fixed" left={0} top={'5rem'} zIndex={1000}
      >
        <VStack spacing={'4'} align="stretch">
           
 <Button bg="#006f5e" color="#def8d6" variant="solid"  w="275px"  display="flex" alignItems="center" gap={2} onClick={onShowAll} >
  <Icon as={FaHome} boxSize={6} />
    Home
 </Button>


<NavLink to="/Loginpage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={IoLogInOutline} />
    Login
  </Button>
</NavLink>


<NavLink to="/Registerpage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={SiGnuprivacyguard} />
    Register
  </Button>
</NavLink>


<NavLink to="/Profilepage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={CgProfile} />
    Profile
  </Button>
</NavLink>


<Button backgroundColor="#006f5e" color="#def8d6"  variant="solid" w="275px" display="flex" alignItems="center" gap={2} onClick={onShowPopular}>
  <Icon as={TbChartBarPopular} />
  Popular
</Button>


<Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2} onClick={handleLogout}>
  <Icon as={TbLogout2} />
  Logout
</Button>
        </VStack>
      </Box>
    
    <Drawer.Root >
      <Drawer.Trigger display={{base:'flow', lg:'none' }}>
                 <IconButton fontWeight={'bold'} color={'white'} variant={'ghost'}> <GiTreeDoor /></IconButton>   
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner rounded={3} padding={2}>
          <Drawer.Content >
            <Drawer.Header>
              <Drawer.Title>choose from menu</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
             <VStack spacing={'4'} align="stretch">
           
 <Button bg="#006f5e" color="#def8d6" variant="solid"  w="275px"  display="flex" alignItems="center" gap={2} onClick={onShowAll} >
  <Icon as={FaHome} boxSize={6} />
    Home
 </Button>


<NavLink to="/Loginpage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={IoLogInOutline} />
    Login
  </Button>
</NavLink>


<NavLink to="/Registerpage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={SiGnuprivacyguard} />
    Register
  </Button>
</NavLink>


<NavLink to="/Profilepage" style={{ textDecoration: 'none' }}>
  <Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
    <Icon as={CgProfile} />
    Profile
  </Button>
</NavLink>


<Button backgroundColor="#006f5e" color="#def8d6"  variant="solid" w="275px" display="flex" alignItems="center" gap={2} onClick={onShowPopular}>
  <Icon as={TbChartBarPopular} />
  Popular
</Button>


<Button backgroundColor="#006f5e" color="#def8d6" variant="solid" w="275px" display="flex" alignItems="center" gap={2}>
  <Icon as={TbLogout2} />
  Logout
</Button>
        </VStack>
      
            </Drawer.Body>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>

</Container>
  );
}

export default Sidebar;
import {Container,IconButton,Text,Flex, Input,InputGroup,Spacer, Avatar,Box} from '@chakra-ui/react'
import { GiTreeDoor } from "react-icons/gi";
import { LuSearch } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

import React from 'react'
function Navbar(){
    const [query, setQuery] = useState('');
  const navigate = useNavigate();
const currentUser = JSON.parse(localStorage.getItem('user'));
  const fullName = currentUser?.firstName
    ? `${currentUser.firstName} ${currentUser.lastName || ''}`
    : 'User';

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      if (currentUser && currentUser.email === query.trim()) {
        navigate('/profilepage');
      } else {
        alert('Profile not found or access denied.');
      }
    }
  };

    return (
<Container display="flex" shadow="md" padding="5" marginBottom={0} marginEnd={0} marginStart={0} fluid bg="#255342" position="sticky" top="0" zIndex="sticky">
  <Flex flexWrap="wrap" align="center" justify="space-between" w="100%" gap={4}  >
    <Flex align="center">
  <GiTreeDoor size="30px" color="white" />
  <Text fontWeight="bold" color="white" pl={2} fontSize="4xl">
    EcoNet
  </Text>
</Flex>

    
    <InputGroup maxW={{ base: '100%', md: '60%', lg: '50%' }}  marginLeft="64" flex="1" color="white" startElement={<LuSearch color="grey" />}  >
      <Input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyDown}  size="lg"  borderRadius="full"  placeholder="Search profiles" _placeholder={{ color: 'gray.400' }}/>
    </InputGroup>

    <Box ml="auto" flexShrink={0}>
      <Avatar.Root>
        <Avatar.Fallback name={fullName} />
      </Avatar.Root>
    </Box>
  </Flex>
</Container>

    
    )
}

export default Navbar;
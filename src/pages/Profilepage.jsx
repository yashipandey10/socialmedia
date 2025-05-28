import React, { useState } from 'react';
import { Box, Button, Center, Text, Avatar, Container, Flex, VStack } from '@chakra-ui/react';
import { useNavigate,useParams } from 'react-router-dom';
import Sidebar from '../components/sidebar'

function Profilepage() {
    
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const fullName = user?.firstName
  ? `${user.firstName} ${user.lastName || ''}`.trim()
  : 'User';
    if (!isLoggedIn || !user) {
        navigate('/loginpage');                 
        return null;
    }
    
    return (
    <Box bg="#255342" minH="100vh" m={0} p={0}>
       <Flex>
        {
        <Sidebar />
        }
        
        
      <Center minH="100vh" marginEnd={'45rem'} >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          boxShadow="lg"
          borderRadius="md"
          overflow="hidden"
          maxW="800px"
          bg={'#cbfbe6'}
        >
          <Flex direction="column" align="center" justify="center" p={10} bg="#568572 ">
            <Box mr={'5'} flexShrink={0}>
                          <Avatar.Root bg={'#cbfbe6'} >
                            <Avatar.Fallback bg={'#cbfbe6'} name={fullName} />
                          </Avatar.Root>
                        </Box>
            <Text mt={5} fontWeight="bold" fontSize="xl">{fullName}</Text>
          </Flex>

          <Box p={10} flex="1">
            <VStack align="start" spacing={4}>
              <Box w="100%">
                <Text fontWeight="bold" fontSize="2xl">User Details</Text>
                <hr />
                <Flex gap={8} my={4}>
                  <Text flex={1} marginEnd={'16'}><strong>FirstName</strong><br/>{user.firstName}</Text>
                  <Text flex={1}><strong>LastName</strong><br/>{user.lastName}</Text>
                </Flex>
                <Flex gap={8} mb={8}>
                  <Text flex={1} marginEnd={'16'}><strong>Email:</strong><br />{user.email}</Text>
                  <Text flex={1}><strong>Phone:</strong><br />{user.phone}</Text>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Center>
      </Flex>
    </Box>

    
  );
}
export default Profilepage;
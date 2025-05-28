import React, { useState } from 'react';
import { Box, Button, Center, Text, Avatar, Container, Flex, VStack } from '@chakra-ui/react';
import { useNavigate,useParams } from 'react-router-dom';

function Profilepage() {
    
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = JSON.parse(localStorage.getItem('currentUser'));

    if (!isLoggedIn || !user) {
        navigate('/loginpage');                 
        return null;
    }

    return (
        <Center minH="100vh" bg="gray.50">
            <Flex direction={{ base: 'column', md: 'row' }} boxShadow="lg" borderRadius="md" overflow="hidden" maxW="800px">
                <Flex direction="column" align="center" justify="center" p={"10"} backgroundColor={"grey"}>
                    <Avatar.Root >
                        <Avatar.Fallback name="Segun Adebayo" />
                        <Avatar.Image src="https://bit.ly/sage-adebayo" />
                    </Avatar.Root>
                    <Text fontWeight="bold" fontSize="lg" mt={"6"}>  User   </Text>
                    <Text fontWeight={'bold'} fontSize={'x-small'}>@username</Text>
                    <Text fontWeight="bold" fontSize="sm" mt={"2"}>Web Designer</Text>
                </Flex>

                <Box p={14} flex="1">
                    <VStack align="start" spacing={4}>
                        <Box w="100%">
                            <Text fontWeight="bold" fontSize="2xl">
                                User Details
                            </Text>
                            <hr />
                            <Flex gap={"8"} mb={"4"} mt={"4"} >
                                <Text fontSize="md" flex={"1"}>
                                    <strong>First name: </strong> <br /> {user.firstName}
                                </Text>
                                <Text fontSize="md" flex={"1"} >
                                    <strong>Last name: </strong> <br /> {user.lastName}
                                </Text>
                            </Flex>
                            <Flex gap={"8"} mb={"8"} >
                                <Text fontSize="md" flex={"1"} >
                                    <strong>Email: </strong> <br /> {user.email}
                                </Text>
                                <Text fontSize="md" flex={"1"}>
                                    <strong>Phone: </strong> <br /> {user.phone}
                                </Text>
                            </Flex>
                            
                        </Box>
                    </VStack>
                </Box>
            </Flex>
        </Center>
    );

}

export default Profilepage;
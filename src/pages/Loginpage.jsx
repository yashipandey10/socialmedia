import { useState } from 'react';
import { Card, Center, Container, Text, Input, Button, HStack, Stack, Box,Image,Flex,IconButton } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom"; 
import NotFound from './NotFound';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import Navbar from '../components/navbar';
import image from '../assets/ecosia-image.webp';
import { GiTreeDoor } from "react-icons/gi";

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from || '/';

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert('No user found. Please register first.');
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('isLoggedIn', true);
            alert('Login successful!');
            navigate(from, { replace: true }); 
        } else {
            alert('Invalid credentials.');
        }
    };

    return (
    
     <>
{/* {
        <Navbar/>
    } */}
    <Stack>
        {
        <Center marginTop={10} marginBottom={0}>
            <Card.Root>
                <Card.Body padding={4} shadow="lg">
                    <Container padding={'10'}>
                        <IconButton color={'black'} variant={'ghost'} margin={4}  > <GiTreeDoor size={10} /></IconButton>   
                        
                        <Text fontWeight={'bolder'} fontSize={'larger'} textAlign={'left'}>
                            Log in to your Account
                        </Text>
                        <Text color={'blackAlpha.800'} fontSize={'1rem'} textAlign={'left'}>
                            Welcome back! 
                        </Text>
                        <Container height={5} />
                        {/* <HStack spacing={4} marginBottom={5}>
                            <Button size={'md'} shadow={'xl'} background={'white'} color={'black'} onClick={() => navigate('/NotFound')}>
                                <FcGoogle /> Google
                            </Button>
                            <Button size={'md'} shadow={'xl'} background={'white'} color={'black'} onClick={() => navigate('/NotFound')}>
                                <MdFacebook /> Facebook
                            </Button>
                        </HStack> */}
                        {/* <Text fontWeight={'extralight'} fontSize={'x-small'} textAlign={'center'} marginBottom={5}>
                            or continue with email
                        </Text> */}
                        <HStack marginBottom={5}>
                            <Input size={'sm'} borderColor={'black'} borderRadius={'md'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        </HStack>
                        <HStack marginBottom={5}>
                            <Input size={'sm'} borderColor={'black'} borderRadius={'md'} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        </HStack>
                        <HStack marginBottom={5}>
                            <Button size={'lg'} width={'100%'} backgroundColor={'green.700'} fontSize={'1rem'} onClick={handleLogin}>
                                Sign In
                            </Button>
                        </HStack>
                        <Center>
                            <Text fontSize={'.8rem'}>
                                Don't have an account?{" "}
                                <Button onClick={() => navigate('/registerpage/')} color={'blue.700'} variant={'ghost'} size={'x-small'} padding={0} fontSize={'1rem'} marginBottom={1}>
                                    Create an Account
                                </Button>
                            </Text>
                        </Center>
                    </Container>
                </Card.Body>
            </Card.Root>
        </Center>
}
        {
            <Container marginStart={0} marginBottom={0} marginEnd={0} marginTop={0}  padding={0} maxW="100vw" >
            
                
                <Image  objectFit={'fill'}  width={'100%'} height={'20%'} src={image}/>

            </Container>
        }
        </Stack>
        
        </>
    );
}

export default Loginpage;

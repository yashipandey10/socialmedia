import { useState } from 'react';
import { Card, Center, Container, Text, Input, Button, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router";
import NotFound from './NotFound';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import loginpage from '../assets/loginpage.webp'

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (!storedUser) {
            alert('No user found. Please register first.');
            return;
        }

        if (email === storedUser.email && password === storedUser.password) {
            localStorage.setItem('isLoggedIn', true);
            alert('Login successful!');
            navigate('/');
        } else {
            alert('Invalid credentials.');
        }
    };

    return (
        <Container width="100vw" height="100vh" display="flex" flexDirection="row" padding="0" margin="0">
            {/* <Center marginTop={20}> */}
            <Container flex="1" display="flex" justifyContent="center" alignItems="center" margin="0" gap="0">
                    <Card.Root marginTop={0} width="100%" maxW="400px">
                        <Card.Body padding={6} shadow="lg">
                            <Container padding={'10'}>
                                <Text fontWeight={'bolder'} fontSize={'larger'} textAlign={'left'}>Log in to your Account</Text>
                                <Text color={'blackAlpha.800'} fontSize={'10px'} textAlign={'left'}>Welcome back! Select method to log in:</Text>
                                <Container height={5} />
                                <HStack spacing={4} marginBottom={5}>
                                    <Button size={'md'} width={'auto'} shadow={'xl'} background={'white'} color={'black'} flex={'max-content'} onClick={() => navigate('/NotFound')}><FcGoogle />Google</Button>
                                    <Button size={'md'} width={'auto'} shadow={'xl'} background={'white'} color={'black'} flex={'max-content'} onClick={() => navigate('/NotFound')}><MdFacebook />Facebook</Button>
                                </HStack>
                                <Text fontWeight={'extralight'} fontSize={'x-small'} textAlign={'center'} marginBottom={5}>or continue with email</Text>
                                <HStack marginBottom={5} >
                                    {/* <Text fontSize={'small'} fontWeight={'light'}>Email</Text> */}
                                    <Input size={'sm'} variant={'subtle'} borderColor={'black'} borderRadius={'md'} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                </HStack>
                                <HStack marginBottom={5}>
                                    {/* <Text fontSize={'small'} fontWeight={'light'}>Password</Text> */}
                                    <Input size={'sm'} variant={'subtle'} borderColor={'black'} borderRadius={'md'} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                                </HStack>
                                <HStack marginBottom={5}>
                                    <Button size={'lg'} width={'100%'} backgroundColor={'blue.700'} onClick={handleLogin}>Sign In</Button>
                                </HStack>
                                <Center>
                                    <Text fontSize={'x-small'}>
                                        Don't have an account? <Button onClick={() => navigate('/registerpage/')} color={'blue.700'} padding={0} marginBottom={1} variant={'ghost'} size={'x-small'}>Create an Account</Button>
                                    </Text>
                                </Center>
                            </Container>
                            

                        </Card.Body>
                    </Card.Root>
                {/* </Center> */}
            </Container>                
             <Container flex="1" height="100vh" padding="0" margin="0">
                    <img src={loginpage} alt="loading..."  style={{ width: '50%', height: '50%', objectFit: 'cover', display:'block' }} />
            </Container>
        </Container>  
    )
}


export default Loginpage;
import { useState , useEffect } from 'react';
import { Card, Center, Container, Text, Input, Button, HStack } from "@chakra-ui/react"
import { useNavigate } from 'react-router';

function Registerpage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        const userData = {
            firstName, lastName, email, phone, password,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        alert('Registration successful!');
        navigate('/loginpage');
    };
   

    return (
       <div >
        <Center marginTop={'20'}  >
            <Card.Root>
                <Card.Body padding={5} shadow={'lg'}>
                    <Text fontWeight={'bolder'} fontSize={'3xl'} textAlign={'center'}>Create Account</Text>
                    <Text fontWeight={'bold'} color={'grey.500'} fontSize={'small'} textAlign={'center'}>Join Us Today!</Text>
                    <Container height={5} />
                    <HStack marginBottom={5}>
                        <Container>
                            <Text fontSize={'small'} fontWeight={'light'}>First Name</Text>
                            <Input size={'sm'} variant={'subtle'} placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </Container>
                        <Container>
                            <Text fontSize={'small'} fontWeight={'light'}>Last Name</Text>
                            <Input size={'sm'} variant={'subtle'} placeholder="Enter your last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </Container>
                    </HStack>
                    <HStack marginBottom={5}>
                        <Container >
                            <Text fontSize={'small'} fontWeight={'light'}>Email</Text>
                            <Input size={'sm'} variant={'subtle'} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                        </Container>
                        <Container >
                            <Text fontSize={'small'} fontWeight={'light'}>Phone</Text>
                            <Input size={'sm'} variant={'subtle'} placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} />
                        </Container>
                    </HStack>
                    <Container marginBottom={5}>
                        <Text fontSize={'small'} fontWeight={'light'}>Password</Text>
                        <Input size={'sm'} variant={'subtle'} type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                    </Container>
                    <Container marginBottom={5}>
                        <Text fontSize={'small'} fontWeight={'light'}>Confirm Password</Text>
                        <Input size={'sm'} variant={'subtle'} placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </Container>
                    <Container marginBottom={5}>
                        <Button size={'lg'} width={'100%'} onClick={handleRegister}>Register</Button>
                    </Container>
                    <Center>
                        <Text fontSize={'smaller'}>
                            Already have an account? <Button onClick={() => navigate('/loginpage/')} color={'blue'} padding={0} marginBottom={1} variant={'ghost'} >Login</Button>
                        </Text>
                    </Center>

                </Card.Body>
            </Card.Root>
        </Center>
 </div>
    )
}

export default Registerpage;
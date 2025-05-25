
import {Center} from '@chakra-ui/react'
import notfound from '../assets/notfound.json'
import Lottie from 'lottie-react';
function NotFound(){
    return (
        <Center marginTop={10}>
            <Lottie
                   animationData={notfound}
                   loop={true}
            />
        </Center>
    )
}

export default NotFound;
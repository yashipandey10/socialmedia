import {useState,useEffect} from "react";
import PostCard from "../components/postcard";
 import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import {Flex,Stack,Container} from "@chakra-ui/react";
import axios from 'axios'
function Homepage() {
  const[posts,setPosts] = useState(null); 

  async  function getPosts(){
    axios.get('https://dummyjson.com/posts').then((res) =>
        {setPosts(()=>res.data.posts); 
        })
  
  }

  useEffect(()=>{getPosts();},[])

  return (
 <>
<Navbar/>   
<Flex>
{
 <Sidebar/>
}
<Container marginTop={40}>
<Stack>
{
        posts?.map((post,key) => (
               <PostCard post={post} key={key} />
        ))
    }
</Stack>
</Container>
</Flex>
    </>
  )
}

export default Homepage;

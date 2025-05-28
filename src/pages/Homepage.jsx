import {useState,useEffect} from "react";
import PostCard from "../components/postcard";
 import Navbar from '../components/navbar'
 import PostSkeleton from "../components/PostSkeleton";
import Sidebar from '../components/sidebar'
import {Flex,Stack,Container} from "@chakra-ui/react";
import axios from 'axios'
function Homepage() {
  const[posts,setPosts] = useState(null); 
    const [displayedPosts, setDisplayedPosts] = useState([]);

  async  function getPosts(){
    axios.get('https://dummyjson.com/posts').then((res) =>
        {setPosts(()=>res.data.posts); 
                setDisplayedPosts(res.data.posts);
        })
  
  }

  useEffect(()=>{getPosts();},[])

  const handleShowAll = () => {
  setDisplayedPosts(posts); 
};

const handleShowPopular = () => {
    const top10 = [...posts].sort((a, b) => b.views - a.views).slice(0, 10);
    setDisplayedPosts(top10);
  };

  return (
 <>
<Navbar/>   
<Flex>
{
<Sidebar onShowPopular={handleShowPopular} onShowAll={handleShowAll} />

}
<Container marginTop={40}>
<Stack>

 {posts === null
    ? Array.from({ length: 3 }).map((_, i) => <PostSkeleton key={i} />)
    : displayedPosts.map((post, key) => (
        <PostCard post={post} key={key} />
      ))}
</Stack>
</Container>
</Flex>
    </>
  )
}

export default Homepage;

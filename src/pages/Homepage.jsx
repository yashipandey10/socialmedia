import {useState,useEffect} from "react";
import PostCard from "../components/postcard";
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
    {
        posts?.map((post,key) => (
               <PostCard post={post} key={key} />
        ))
       
    }
   
    </>
  )
}

export default Homepage;

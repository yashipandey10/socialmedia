
import {Avatar, Card, Container, HStack, IconButton, Separator,Text,Icon} from "@chakra-ui/react"
import { useState } from "react";

import { FaRegThumbsUp,FaRegThumbsDown,FaThumbsUp,FaThumbsDown  } from "react-icons/fa";
import { GrFormView  } from "react-icons/gr";

function PostCard({post}){

    const[liked,setLiked] = useState('unliked')
console.log("Post Data:", {post});

    function setLikeState (LikeState,button){
        switch(LikeState){
            case 'unliked':
                setLiked(() => 'unliked');
                if(button === 'dislike'){
                    post.reactions.dislikes -=1;
                }
                else{ 
                    post.reactions.likes -=1;
                }
                break;
            case 'liked':

                if(liked === 'dislike'){
                    post.reactions.dislikes -=1;
                }
                setLiked(()=>'liked');
                    post.reactions.likes +=1;
                break;
            case 'disliked':
                if(liked === 'liked'){
                    post.reactions.likes -=1;
                }
                setLiked(()=>'disliked');
                post.reactions.dislikes +=1;
                break;
        }
    }
    return(
        
        <Container marginBottom={5} marginStart={{ base:"3", md:"16" , lg:"48"}} marginEnd={{base: "3" }}  shadow={"md"} maxW={{base:"4/5",md:"2/5" ,lg:"3/5"}} padding={0} >
            
            <Card.Root>
              <Card.Body>
                 <HStack>
                    <Avatar.Root>
                        <Avatar.Fallback name="Segun Adebayo"/>
                        <Avatar.Image src="https://bit.ly/sage-adebayo"/>
                    </Avatar.Root>
                    <Container padding={0}>
                        <Text fontWeight={'bold'} fontSize={'smaller'}>user</Text>
                        <Text fontWeight={'bold'} fontSize={'x-small'} color={'gray'}>@username</Text>
                    </Container>
                     </HStack>
                     <Container heigth={3} />
                <Container paddingX={0} marginBottom={4}>
                  <Text>
                    {post.title}
                  </Text>
                  <Container heigth={1} />
                  <Text color={'gray.600'} fontWeight={'light'} fontSize={'small'}>
                    {post.body}
                  </Text>
                </Container>
                <Separator>
                    <HStack spacing={6}>
            <HStack gapX={"2.5"}>
                {
                    liked === 'liked'
                     ?
                    <IconButton variant={'ghost'} rounded='full' onClick={() => setLikeState('unliked','like')}>
                        <FaThumbsUp />
                    </IconButton>
                    :
                    <IconButton variant={'ghost'} rounded='full' onClick={() => setLikeState('liked','like')}>
                        <FaRegThumbsUp />
                    </IconButton>
                } 
                  <Text fontSize="sm">{post.reactions.likes}</Text>
            </HStack>
            <HStack gapX={"2.5"}>
               {
                    liked === 'disliked' 
                    ?
                    <IconButton variant={'ghost'} rounded='full' onClick={() => setLikeState('unliked','dislike')}>
                        <FaThumbsDown />
                    </IconButton>
                    :
                    <IconButton variant={'ghost'} rounded='full' onClick={() => setLikeState('disliked','dislike')}>
                        <FaRegThumbsDown />
                    </IconButton>
                } 
                               
              <Text fontSize="sm">{post.reactions.dislikes}</Text>
            </HStack>
            <HStack >
                 <Icon variant={'ghost'} rounded='full' size={"2xl"} >
                    <GrFormView  /> 

                 </Icon>
                                       <Text fontSize="sm">{post.views}</Text>
            </HStack>
          </HStack>
                </Separator>
              </Card.Body>
            </Card.Root>
        </Container>

    )
    
}
export default PostCard;
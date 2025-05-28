import { Box, Skeleton, SkeletonText, Stack ,SkeletonCircle} from "@chakra-ui/react";

function PostSkeleton() {
  return (
    <Box p={5} boxShadow="md" borderRadius="md"  maxW={{base:"4/5",md:"2/5" ,lg:"3/5"}} marginStart={{ base:"3", md:"16" , lg:"48"}}  bg="white">  
    <Skeleton height="20px" mb={4} />
     <SkeletonCircle size="12" />
      <SkeletonText mt="4" noOfLines={4} spacing="3" />
    </Box>
  );
}

export default PostSkeleton;

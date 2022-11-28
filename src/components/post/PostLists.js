import { Box, Text } from "@chakra-ui/react"
import Post from '.'

export default function PostLists({posts}) {
  return (
    <Box px="4">
        {posts?.length===0 
        ? <Text fontSize="xl" textAlign="center"> No posts yet...</Text> 
        : posts?.map(post => <Post key={post.id} post={post} />)}
    </Box>
  );
}

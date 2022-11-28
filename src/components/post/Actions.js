import { Flex, IconButton } from "@chakra-ui/react"
import { FaRegHeart, FaHeart, FaComment, FaRegComment, FaTrash } from "react-icons/fa"
import { useAuth } from "../../hooks/auth";
import { useToggleLike, useDeletePost } from "../../hooks/posts";
import { Link } from "react-router-dom"
import { PROTECTED } from "../../lib/routes";


export default function Actions({post}) {
    const { id, likes } = post;
    const { user, isLoading: userLoading} = useAuth();

    const isLiked = likes.includes(user?.id);

    const config = {
        id,
        isLiked,
        uid: user?.id,
    }

    const {toggleLike, isLoading: likeLoading} = useToggleLike(config)
    const {deletePost, isLoading: deleteLoading} = useDeletePost(id);


  return (
    <Flex p="2">
        <Flex alignItems="center">
            <IconButton 
            onClick={toggleLike}
            isLoading={likeLoading || userLoading}
            size="md" 
            variant="ghost" 
            icon={isLiked ? <FaHeart /> : <FaRegHeart/> } 
            colorScheme="red" 
            isRound/>
            {likes.length}
        </Flex>
        <Flex alignItems="center" ml="2">
            <IconButton 
            as={Link}
            to={`${PROTECTED}/comments/${id}`}
            // onClick={toggleLike}
            // isLoading={likeLoading || userLoading}
            size="md" 
            variant="ghost" 
            // icon={isLiked ? <FaHeart /> : <FaRegHeart/> }
            icon={<FaComment />} 
            colorScheme="teal" 
            isRound/>
            5
        </Flex>

        <IconButton 
            onClick={deletePost()}
            isLoading={deleteLoading}
            size="md"
            ml="auto" 
            variant="ghost" 
            icon={<FaTrash />}
            colorScheme="red" 
            isRound/>
    </Flex>
  )
}

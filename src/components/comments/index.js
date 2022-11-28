import { Box } from "@chakra-ui/react";
import { usePost } from "../../hooks/posts";
import { useParams } from "react-router-dom";
import Post from "../post";


export default function Comments() {
    const {id} = useParams();
    const {post, isLoading} = usePost(id);

    if (isLoading) return "Loading..."

    return (
        <Box align="center" pt="50">
            <Post post={post} />
        </Box>
    )
}

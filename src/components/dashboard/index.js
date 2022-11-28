import React from 'react'
import { Box, Heading, HStack, Button, Textarea } from "@chakra-ui/react"
import TextareaAutosize from "react-textarea-autosize"
import { useForm } from "react-hook-form"
import { useAddPost, usePosts } from '../../hooks/posts';
import { useAuth } from '../../hooks/auth';
import PostLists from '../post/PostLists';


function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost, isLoading: addingPost} = useAddPost() 
    const {user, isLoading: authLoading} = useAuth();


    function handleAddPost(data) {
        reset();
        addPost({
            uid: user.id,
            text:data.text
        })
    }
    return(
        <Box maxW="600px" mx="auto" py="10">
        <form onSubmit={handleSubmit(handleAddPost)}>
            <HStack justify="space-between">
                <Heading size="lg">New Post</Heading>
                <Button colorScheme="teal" type="submit" isLoading={authLoading || addingPost} loadingText="Loading...">Post</Button>
            </HStack>
            <Textarea 
            as={TextareaAutosize} 
            resize='none' 
            mt="5" 
            placeholder='Create a new post...'
            minrows={3}
            {...register("text", {required: true})} />
        </form>
    </Box>
    );
}


export default function Dashboard() {
    const {posts, isLoading} = usePosts()

        if(isLoading) return "Loading posts..."

    return (
        <>
            <NewPost />
            <PostLists posts={posts} />
        </>
    )
}

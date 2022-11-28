import { setDoc, doc, query, collection, orderBy } from "firebase/firestore"
import { db } from "../lib/firebase";
import { useState } from "react"
import { uuidv4 } from "@firebase/util"
import { useToast } from "@chakra-ui/react"
import { useCollectionData } from "react-firebase-hooks/firestore"


export function useAddPost(){
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function addPost(post) {
        setLoading(true);
        const id = uuidv4()
        await setDoc(doc(db, "posts", id) ,{
            ...post,
            id,
            date: Date.now(),
            likes: []
        });
        setLoading(false);
        toast({
            title: "Post added succesfully.",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        })
    }

    return {addPost, isLoading};
}

export function usePosts() {
    const q = query(collection(db, "posts"), orderBy('date', "desc"));
    const [posts, isLoading, error] = useCollectionData(q);

    if (error) throw error;
    return {posts, isLoading}
}
import React from 'react'
import { Box, Text } from "@chakra-ui/react"
import Header from './Header';

export default function Post({post}) {
    const {uid, text} = post;
    return (
        <Box p="2" maxW="600px" textAlign="left">
          <Box border="2px solid" borderColor="gray.100" borderRadius="md">
            <Header uid={uid} />
    
            <Box p="2" minH="100px">
              <Text wordBreak="break-word" fontSize="md">
                {text}
              </Text>
            </Box>
    
            {/* <Actions post={post} /> */}
          </Box>
        </Box>
      );
}

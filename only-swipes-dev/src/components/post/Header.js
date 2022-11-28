import React from 'react'
import { Flex, Avatar, Text, Box } from "@chakra-ui/react"

export default function Header(uid) {
  return (
        <Flex
        alignItems="center"
        borderBottom="2px solid"
        borderColor="teal.100"
        p="3"
        bg="gray.50"
        >
        {/* <Avatar user={user} size="md" /> */}

        <Box ml="4">
        {/* <UsernameButton user={user} /> */}
        {/* <Text fontSize="sm" color="gray.500">
            {formatDistanceToNow(date)} ago
        </Text> */}
        </Box>
    </Flex>
  )
}

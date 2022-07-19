import React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

import Logo from './logo'
import Info from './info'

const Navigation = () => {
  return (
    <Box py='2' bg='blackAlpha.200'>
      <Flex as={Container} maxW='container.xl' justify='space-between' align='center'>
        <Logo />
        <Info />
      </Flex>
    </Box>
  )
}

export default Navigation

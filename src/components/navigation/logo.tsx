import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return <Heading as={Link} to='/' fontSize='xl'>V<Text as='span' color='orange.400'>Jest</Text></Heading>
}

export default Logo

import React from 'react'
import { Flex, Stack } from '@chakra-ui/react'

import { useAppSelector } from '../../hooks/redux'

import Rating from './rating'
import Profile from './profile'
import Notification from './notification'

const Info = () => {
  const { user } = useAppSelector((state) => state.auth)
  return (
    <Flex flexDir='row' gap='1' align='center'>
      <Stack direction='row' spacing='3' align='center'>
        <Rating rating={user?.rating} />
        <Notification />
      </Stack>
      <Profile />
    </Flex>
  )
}

export default Info

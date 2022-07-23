import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { AiFillBell } from 'react-icons/ai'

const Notification = () => {
  return (
    <IconButton
      p='0'
      m='0'
      variant='unstyled'
      _hover={{ color: 'orange.400' }}
      aria-label='notification'
      display='flex'
      justifyContent='center'
      alignItems='center'
      icon={<AiFillBell display='inline'/>
      }
    />
  )
}

export default Notification

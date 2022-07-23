import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import { AiOutlineLineChart } from 'react-icons/ai'

const Rating = ({ rating }: { rating: number | undefined }) => {
  return (
    <Stack direction='row' align='center' spacing='1' fontSize='sm'>
      <AiOutlineLineChart color='orange'  />
      <Text>{rating ? rating : 0}</Text>
    </Stack>
  )
}

export default Rating

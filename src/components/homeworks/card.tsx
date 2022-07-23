import React from 'react'
import { Box } from '@chakra-ui/react'

import { IHomework } from '../../store/homeworks/homeworksTypes'

interface CardPropsTYpe {
  homework: IHomework
}

const Card = ({homework}: CardPropsTYpe) => {
  return (
    <Box h='40' bg='gray.400'>Card</Box>
  )
}

export default Card
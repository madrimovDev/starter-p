import React, { useLayoutEffect } from 'react'
import { Container } from '@chakra-ui/react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getHomeworks } from '../../store/homeworks/homeworksAction'

const Homeworks = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.auth)

  useLayoutEffect(() => {
    if (user) {
      dispatch<any>(getHomeworks(user?.userId))
    }
  }, [dispatch, user])

  return (
    <Container maxW='container.xl'>
      Home
    </Container>
  )
}

export default Homeworks
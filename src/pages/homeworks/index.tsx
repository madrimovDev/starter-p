import React, { useLayoutEffect } from 'react'
import { Container } from '@chakra-ui/react'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getAllHomeworks } from '../../store/homeworks/homeworksAction'

import CategoryHomeworks from '../../components/homeworks'

const Homeworks = () => {
  const dispatch = useAppDispatch()
  const {
    auth: { user },
    homeworks,
  } = useAppSelector((state) => state)

  useLayoutEffect(() => {
    if (user) {
      dispatch<any>(getAllHomeworks(user.userId))
    }
  }, [dispatch, user])

  return (
    <Container maxW='container.xl'>
      <CategoryHomeworks title='Actual' homework={homeworks.actualHomeworks} />
      <CategoryHomeworks title='Next' homework={homeworks.nextHomeworks} />
      <CategoryHomeworks title='Prev' homework={homeworks.prevHomeworks} />
    </Container>
  )
}

export default Homeworks

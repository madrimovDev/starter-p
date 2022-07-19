import React, { useLayoutEffect } from 'react'
import { Navigate } from 'react-router-dom'
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { jwtLogin, login } from '../../store/auth/authAction'
import { getToken } from '../../utils/localStorage'

interface IFormInputs {
  username: string
  password: string
}

const scheme = yup.object({
  username: yup
    .string()
    .required('Please enter a username')
    .min(3, 'You must enter at least 3 letters'),
  password: yup
    .string()
    .required('Please enter a password')
    .min(4, 'You must enter at least 3 letters'),
})

const Login = () => {
  const { user, loading, error } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormInputs>({ resolver: yupResolver(scheme) })

  const onSubmit = (data: IFormInputs) => {
    dispatch<any>(login(data))
  }

    useLayoutEffect(() => {
      const jwt = getToken()
      if (jwt) {
        dispatch<any>(jwtLogin(jwt))
      }
    }, [dispatch])
  
  if (user) {
    return <Navigate to='/' replace />
  }

  return (
    <Flex align='center' flexDir='column'>
      <Heading fontWeight='thin' py='10'>
        Welcome to{' '}
        <Text as='span' color='orange.400'>
          VJest
        </Text>{' '}
        Platform
      </Heading>
      <Flex
        onSubmit={handleSubmit(onSubmit)}
        as='form'
        flexDir='column'
        gap='6'
        p='6'
        border='1px'
        borderColor='chakra-border-color'
        minW='xs'
        w='full'
        maxW='md'
      >
        {error && (
          <Alert status='error' size='sx'>
            <AlertIcon />
            {error}
          </Alert>
        )}
        <FormControl isInvalid={Boolean(errors.username)}>
          <FormLabel>Username</FormLabel>
          <Input type='text' placeholder='exemple: teshavoy' {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={Boolean(errors.password)}>
          <FormLabel>Password</FormLabel>
          <Input type='password' {...register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button type='submit' colorScheme='blue' isLoading={loading}>
          Login
        </Button>
      </Flex>
    </Flex>
  )
}
export default Login

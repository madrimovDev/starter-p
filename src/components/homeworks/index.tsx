import React from 'react'
import { Box, Divider, Flex, Grid, GridItem, Heading, Link, Skeleton } from '@chakra-ui/react'

import { IState } from '../../store/homeworks/homeworksTypes'

import Card from './card'

interface CategoryHomeworksPropsType {
  title: string
  homework: IState
}

const CategoryHomeworks = ({ title, homework }: CategoryHomeworksPropsType) => {
  return (
    <Box my='8'>
      <Flex justify='space-between' align='center'>
        <Heading as='h3' fontSize='lg' fontWeight='400' color='gray.400'>
          {title}
        </Heading>
        <Link fontSize='xs'>See All →</Link>
      </Flex>
      <Divider my='4' />
      <Grid templateColumns={'repeat(4, 1fr)'} gap='4'>
        {homework.loading &&
          new Array(4).fill('').map((item, index) => {
            return (
              <GridItem key={index}>
                <Skeleton w='100%' h='160px' />
              </GridItem>
            )
          })}
        {!homework.loading &&
          homework.data?.map((h, index) => {
            return (
              <GridItem key={index}>
                <Card homework={h} />
              </GridItem>
            )
          })}
      </Grid>
    </Box>
  )
}

export default CategoryHomeworks

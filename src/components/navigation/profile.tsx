import React from 'react'
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'

import { useAppSelector } from '../../hooks/redux'

import Avatar from './avatar'

const Profile = () => {
  const { toggleColorMode } = useColorMode()
  const Icon = useColorModeValue(BsFillSunFill, BsFillMoonFill)

  const { user } = useAppSelector((state) => state.auth)

  return (
    <Menu>
      <MenuButton as={Button} variant='unstyled'>
        <Avatar />
      </MenuButton>
      <MenuList>
        <MenuGroup title={`${user?.name} ${user?.surname}`}>
          <MenuItem>Account</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem
            as={Flex}
            cursor='pointer'
            onClick={toggleColorMode}
            justify='center'
            align='center'
          >
            <Icon />
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default Profile

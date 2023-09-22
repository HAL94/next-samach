'use client';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import WelcomeBox from '../WelcomeBox'

export default function AccountDropdown() {
    return (
        <Menu>
            <MenuButton
                colorScheme={'neptune'}
                variant="link"
                textDecorationStyle={'unset'}
                _hover={{ textDecorationStyle: 'unset' }}
                as={Button}
                rightIcon={<BiChevronDown size={18} />}
            >
                <WelcomeBox />
            </MenuButton>
            <MenuList zIndex={10}>
                <MenuItem>
                    Login
                </MenuItem>
                <MenuItem>
                    Signup
                </MenuItem>
                <MenuItem>
                    My Orders
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

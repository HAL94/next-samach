'use client';

import { Badge, Box, Container, Heading, IconButton, Input, InputGroup, InputRightAddon, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import LogoEn from '../../../../../../public/logo_5.png'
import LogoNoText from '../../../../../../public/logo_no_text.png';
import SideMenuDrawer from '../SideMenu'
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi'
import useGetLocaleDir from '@/app/hooks/use-get-locale'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

import { BsBackspace, BsBackspaceReverse, BsCart2 } from 'react-icons/bs'

import AccountDropdown from '../AccountDropdown';
import { useDictContext } from '@/app/[lang]/providers/dictionary';

export default function BottomHeader() {
  const [isSearch, setIsSearch] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isRTL = useGetLocaleDir();
  const [lessThan600] = useMediaQuery('(max-width: 600px)');
  const { dictionary } = useDictContext();
  return (
    <Container
        maxW="container.lg"
        role="menu"
        marginInline={'auto'}
        gap={6}
        display="flex"
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        height={50}
      >
        <Box
          role="Logo Desktop"
          sx={{
            display: { base: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: 150,
            aspectRatio: '16 / 7',
            width: { base: 90, sm: 120 },
          }}
          position="relative"
        >
            <Link href="/">
            <Image
              alt="Samach Logo"
              fill
              src={LogoEn}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
            />
          </Link>
        </Box>
        {!isSearch && (
          <Box
            role="mobile-tablet-menu"
            display={{ base: 'flex', lg: 'none' }}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={2}
            width={'100%'}
          >
            <SideMenuDrawer isOpen={isOpen} onClose={onClose} />
            <Box
              display={isSearch ? 'none' : 'flex'}
              alignItems={'center'}
              gap={2}
            >
              <IconButton
                colorScheme="primary"
                onClick={() => onOpen()}
                aria-label="Menu Button Drawer"
                icon={
                  isRTL ? (
                    <BiMenuAltRight size={25} />
                  ) : (
                    <BiMenuAltLeft size={25} />
                  )
                }
              />
              <Box
                role="Logo Mobile"
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                }}
                position="relative"
              >
                <Link href="/">
                  <Image
                    alt="Samach Logo With No Text"
                    fill
                    src={LogoNoText}
                    sizes="(max-width: 768px) 30vw, 100px"
                  />
                </Link>
              </Box>
            </Box>
          </Box>
        )}
        <Box
          role="Middle Search Box"
          flexGrow={1}
          display={{
            base: isSearch ? 'block' : 'none',
            xl: 'block',
          }}
        >
          <Box width="100%">
            <InputGroup>
              <Input
                type="text"
                placeholder={dictionary.header.searchPlaceholder}
              />
              {/* eslint react/no-children-prop: off */}
              <InputRightAddon
                as={IconButton}
                colorScheme="secondary"
                bg="secondary"
                color="#fff"
                children={<AiOutlineSearch size={25} />}
              />
            </InputGroup>
          </Box>
        </Box>
        {!isSearch && (
          <Box
            role="Right Menu Desktop"
            sx={{
              display: { base: 'none', lg: 'block' },
              marginInlineStart: { md: 'auto', lg: 'none' },
            }}
          >
            <Stack direction={'row'} spacing={6}>
              <Box
                aria-label="Delivery Box"
                position="relative"
                gap={2}
                display="flex"
                cursor={'pointer'}
              >
                <IconButton
                  colorScheme="secondary"
                  aria-label="Your Delivery Location"
                  icon={<IoLocationOutline size={lessThan600 ? 18 : 24} />}
                />
                <Box
                  display={'flex'}
                  flexDir={'column'}
                  justifyContent={'center'}
                  alignItems={'flex-start'}
                >
                  <Text
                    fontSize={{ lg: '10px', xl: '12px' }}
                    width="max-content"
                  >
                    {dictionary.header.deliverTo}
                  </Text>
                  <Heading size={'sm'}>
                    {dictionary.header.defaultLocation}
                  </Heading>
                </Box>
              </Box>
              <AccountDropdown />
              <Box aria-label="Cart Box" position="relative">
                <Badge
                  zIndex={2}
                  position={'absolute'}
                  top={-2}
                  right={0}
                  colorScheme="green"
                  rounded="full"
                >
                  3
                </Badge>
                <IconButton
                  colorScheme="secondary"
                  aria-label="Your Cart Items"
                  icon={<BsCart2 size={lessThan600 ? 18 : 24} />}
                />
              </Box>
            </Stack>
          </Box>
        )}
        <Box
          aria-label="Search Box"
          display={{ base: 'flex', lg: 'block', xl: 'none' }}
        >
          <IconButton
            colorScheme="secondary"
            onClick={() => setIsSearch((prev) => !prev)}
            aria-label="Search"
            icon={
              isSearch ? (
                isRTL ? (
                  <BsBackspace size={25} />
                ) : (
                  <BsBackspaceReverse size={25} />
                )
              ) : (
                <AiOutlineSearch size={25} />
              )
            }
          />
        </Box>
    </Container>
  )
}

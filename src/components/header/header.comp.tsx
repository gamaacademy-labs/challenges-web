import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import Link from 'next/link';
import React from 'react';
import Logo from 'img/Logo.png';
import * as S from './header.styles';
import Image from 'next/image'


export const Header: React.FC = () => {
  return (
    <S.StyledHeader  >
      <Box >
        <Image src="/img/Logo.png" height={30} width={135} />

        {/* <h2>gama academy</h2> */}

      </Box>
      <Box

        width={440} height={32}>

        <InputSearch
          // onChangeValue={function noRefCheck() { } }
          // onClear={function noRefCheck() { } }
          placeholder="Digite uma palavra-chave" m={undefined} margin={undefined} mt={undefined} marginTop={undefined} mb={undefined} marginBottom={undefined} ml={undefined} marginLeft={undefined} mr={undefined} marginRight={undefined} my={undefined} marginY={undefined} mx={undefined} marginX={undefined}        />
      </Box>

      <Box>
        <S.StyledNav  >
          <S.StyledNavItem>
            <Link href={"/"}>
              <Typography type='tips'> Início</Typography >
            </Link>
          </S.StyledNavItem>

          <S.StyledNavItem>
            <Typography type='tips'> Carreiras</Typography >
          </S.StyledNavItem>

          <S.StyledNavItem>

            <Icon.Material name="apps" color="secondary.4" size={25} />

          </S.StyledNavItem>
          <S.StyledNavItem>

            <Icon.Material name="notifications" color="#FFFFFF;" size={25} type="round" shape="round" />

          </S.StyledNavItem>

          <S.StyledAvatar>

          </S.StyledAvatar>
        </S.StyledNav >
      </Box>


    </S.StyledHeader >
  );
}


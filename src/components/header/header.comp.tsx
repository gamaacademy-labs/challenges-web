import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import Link from 'next/link';
import React from 'react';
import * as S from './header.styles';
import Image from 'next/image'


export const Header: React.FC = () => {
  return (
    <S.StyledHeader dir="row" width="100%" alignItems="center" justifyContent="space-between" padding="4" mb="2" border='1px solid gray' >
      <Box >
        <Image src="/img/Logo.png" width={120} alt="Logo" height={30} />
      </Box>
      <Box
        width={440} height={32}>
        <InputSearch
          placeholder="Digite uma palavra-chave"
          onChange={() => { }}
        />
      </Box>

      <Box dir="row" alignItems="center" >
        <Box>
          <Link href={"/"}>
            <Typography type='tips'> Início</Typography >
          </Link>
        </Box>

        <Box ml="2">
          <Typography type='tips'> Carreiras</Typography >
        </Box>
        <Box ml="2" >
          <Icon.Material name="apps" color="secondary.4" size={32} />

        </Box>
        <Box ml="2" backgroundColor={'secondary.4'} borderRadius="50%" size={24} display="flex" justifyContent="center">

          <Icon.Material name="notifications" color="white"size={16} type="round" />

        </Box>
        <S.StyledAvatar ml="2" size={32} backgroundColor='black' borderRadius="50%">
          
        </S.StyledAvatar>
      </Box>

    </S.StyledHeader >
  );
}


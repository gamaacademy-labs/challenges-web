import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import Link from 'next/link';
import React from 'react';
import * as S from './header.styles';
import Image from 'next/image'


export const Header: React.FC = () => {
  return (
    <S.StyledHeader dir="row"  >
      <Box >
        <Image src="/img/Logo.png"  width={120} alt="Logo" height={30} />
      </Box>
      <Box
        width={440} height={32}>
        <InputSearch
          placeholder="Digite uma palavra-chave"  
          onChange={()=>{}}
              />
      </Box>

      <Box dir="row">
          <Box>
            <Link href={"/"}>
              <Typography type='tips'> Início</Typography >
            </Link>
          </Box>

          <Box>
            <Typography type='tips'> Carreiras</Typography >
          </Box>
          <Box>
            <Icon.Material name="apps" color="secondary.4" size={24} />

          </Box>
          <Box>

            <Icon.Material name="notifications" color="secondary.4" size={24}  type="round"/>

          </Box>

          <Box>

          </Box>
       
      </Box>


    </S.StyledHeader >
  );
}


import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import Link from 'next/link';
import * as S from './header.styles';
import Image from 'next/image'


export const Header = () => {
  return (
    <S.StyledHeader dir="row" width="100%" alignItems="center" justifyContent="space-between" padding="4" mb="7" border='1px solid #D7DBDA' >
      <Box >
        <Image src="/img/Logo.png" width={135} alt="Logo" height={30} />
      </Box>
      <Box
        width={440} height={32}>
        <InputSearch
          placeholder="Digite uma palavra-chave"
          onChange={() => { }}
        />
      </Box>

      <Box dir="row" alignItems="center" >
        <Box mr={3}>
          <Link href={"/"}>
            <a href=""><Typography type='tips' fontSize='2'>  Início</Typography ></a>
          </Link>
        </Box>

        <Box mr={3}>
          <a href=""><Typography type='tips' fontSize='2'>  Carreiras</Typography ></a>
        </Box>
        <Box ml="2" mr={3}>
          <Icon.Material name="apps" color="black" size={24} />

        </Box >
        <Box ml="2" mr={3} backgroundColor={'secondary.4'} borderRadius="50%" size={24} display="flex" justifyContent="center">

          <Icon.Material name="notifications" color="white" size={16} type="round" />

        </Box>
        <S.StyledAvatar ml="2" size={32} backgroundColor='black' borderRadius="50%">

        </S.StyledAvatar>
      </Box>

    </S.StyledHeader >
  );
}


import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import Link from 'next/link';
import React from 'react';
import Logo from 'img/Logo.png';
import * as S from './styles';
import Image from 'next/image'


// import { IconName } from "react-icons/bs";

// import "./styles.css";

const Header: React.FC = () => {
  return (
    <S.StyledHeader  >
      <Box >
        <Image src="/img/Logo.png" height={30} width={135} />

        {/* <h2>gama academy</h2> */}

      </Box>



      <Box

        width={600} >

        <InputSearch
          label="Lorem Ipsum"
          onChangeValue={function noRefCheck() { }}
          onClear={function noRefCheck() { }}
          placeholder="Search something..."
        />
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

export default Header;
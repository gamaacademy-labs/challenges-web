import * as S from './header.styles';
import Image from 'next/image'
import { Box, InputSearch, Icon, Typography } from '@gama-academy/smash-web';
import { Nav, Navbar } from 'react-bootstrap/';
import { StyledHeader } from './header.styles';


export const Header = () => {
  return (

    <Navbar expand="md" style={{ borderBottom: '1px solid #e5e5e5', marginBottom: '50px' }}>
      <StyledHeader >
        <Navbar.Brand href="home">
          <Image src="/img/Logo.png" width="135" alt="Logo" height="30" />
        </Navbar.Brand>

        {/* input */}
        <S.IconsRemove>
          <Box width="350px" ml="13">
            <InputSearch
              placeholder="Digite uma palavra-chave"
              onChange={() => { }}
            />
          </Box>
        </S.IconsRemove>

        <Box dir='row' alignItems='center' justifyContent="space-between" >

          <S.IconsShow>
            <Icon.Material mr="1" name="search" color="black" size={24} />
          </S.IconsShow>
          <S.IconsShow>
            <Icon.Material mx="2" name="apps" color="black" size={24} />
          </S.IconsShow>

          <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: 'none' }} className="shadow-none" />
        </Box>
        <Navbar.Collapse style={{ flexGrow: '0', }} id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Carreiras</Nav.Link>

            <S.IconsRemove>
              <Icon.Material mx="3" name="apps" color="black" size={24} />
            </S.IconsRemove>

            <S.IconsRemove>
              <Nav.Link href="#link">
                <Box mr="2" backgroundColor={'secondary.4'} borderRadius="50%" size={24} display="flex" justifyContent="center">
                  <Icon.Material name="notifications" color="white" size={16} type="round" />
                </Box>
              </Nav.Link>
            </S.IconsRemove>
            <S.IconsRemove>
              <Nav.Link href="#link">
                <Box size={24} backgroundColor="black" borderRadius="50%">
                </Box>
              </Nav.Link>
            </S.IconsRemove>

          </Nav>
        </Navbar.Collapse>
      </StyledHeader>
    </Navbar>
  );
}
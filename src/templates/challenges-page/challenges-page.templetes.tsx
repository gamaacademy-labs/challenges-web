import { Box, MaterialIcon, Tag, Tooltip, Typography } from '@gama-academy/smash-web'
import * as S from './styles';
import { SidebarPageDesafios } from './sidebar.page.desafios'
import { BsFillBarChartFill } from 'react-icons/bs';
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/header';
import { Footer } from "../../components/footer";
import Image from 'next/image'
import Link from 'next/link';
import { Deliverables } from './components/deliverables-list/deliverables-list.comp';
import { getChallenges } from '../../services/challenges';

const ChallengesPageTempletes = () => {


  return (
    <Box>
      <Header />
      < Box dir="row"
        style={{ marginBottom: "8%" }}
        justifyContent="center"
      >
        <Box width="858px" mr={5} >
          <Box dir="row">
            <Box
              width="24px"
              height="24px"
              borderRadius="4" justifyContent="center" alignItems="center" backgroundColor="brand.primary"  >
              <Image src="/img/hipsterIcon.png" width="16" alt="Logo" height="5" />
            </Box>
            <Box>

              <Typography
                ml="2"
                type="title"
              >
                Quem tem dados é rei!
              </Typography>
            </Box>

          </Box>
          <Box
            mt="2"
          >

            <Typography
              type="description"
            >
              Neste exercício construiremos um clone perfeito da interface do AirBnb. escrever algo para o seu público, como utilizar tudo isso em e-mails, formulários, notificações e outros gatilhos.
            </Typography>
            <Typography
              type="description"
              mt="4"
            >
              Neste exercício construiremos um clone perfeito da interface do AirBnb. escrever algo para o seu público, como utilizar tudo isso em e- Além de falarmos sobre SEO, que são estratégias para potencializar e melhorar o posicionamento de um site, e HCI, que é um conjunto de estudos que envolve a interação entre pessoas (usuários) e equipamentos.
            </Typography>

          </Box>

          <Box dir="row" mt="4" pb="3"
            alignItems="center"
            style={{ borderBottom: 'solid #e5e5e5' }}>

            <S.Tags>
            SEO
            </S.Tags>
            <S.Tags>
            UI
            </S.Tags>
            <S.Tags>
            UX
            </S.Tags>
            
          </Box>
          <Box dir="row" justifyContent="space-between" pt="3" pb="3" style={{ borderBottom: 'solid #e5e5e5' }}>
            <Box dir="row" >
              <Box dir="row" alignItems="center" mr="3"  >
                <Box>
                  <MaterialIcon name="emoji_events" mr="1"
                    color="brand.secondary"
                  />
                </Box>
                <Box>
                  <Typography type="title" fontSize="1"  >Pontuação</Typography>
                  <Typography fontSize="1">150 pontos</Typography>
                </Box>

              </Box>
              <Box dir="row" alignItems="center" mr="3" >

                <Tooltip
                  alignment="start"
                  message="Nível de dificuldade do desafio."
                >
                  <Box>
                    <Box dir="row" alignItems="center" mr="3"  >
                      <Box  mr="2">
                        <BsFillBarChartFill color='secondary-4' />


                      </Box>
                      <Box>
                        <Typography type="title" fontSize="1" >Nível</Typography>
                        <Typography fontSize="1">Médio</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Tooltip>
              </Box>

              <Box

                mr="3"
                alignItems="center"
                justifyContent="center"

              >

                <Tooltip
                  alignment="start"
                  message={<Typography color="greyDark.7" fontSize="2" fontWeight="medium">Avaliação média.</Typography>}
                  position="top"
                >
                  <Box dir="row" alignItems="center">
                    <Box dir="row">
                      <MaterialIcon
                        height={27}
                        name="star"
                        width={24}
                        color="yellow.4"
                      />

                      <MaterialIcon
                        height={27}
                        name="star"
                        width={24}
                        color="yellow.4"
                      />

                      <MaterialIcon
                        height={27}
                        name="star"
                        width={24}
                        color="yellow.4"
                      />


                      <MaterialIcon
                        height={27}
                        name="star_half"
                        shapeBackground="yellow.4"
                        color="yellow.4"
                        width={24}
                      />
                      <MaterialIcon
                        height={27}
                        name="star_outline"
                        shapeBackground="yellow.4"

                        width={24}
                        color="yellow.4"
                      />

                    </Box>

                    <Typography>(461)</Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Box>

            <Box >
              <Box dir="row">
                <MaterialIcon
                  mr="1" name="share"
                  color="brand.secondary"
                />

                <Box cursor="pointer">
                  <a
                    className='myWonderfulButton'
                    onClick={
                      () => {
                        navigator.share({
                          title: 'compartilhar',
                          text: 'compartilhar',
                          url: "http://localhost:3000",

                        }
                        )
                      }
                    }>
                    Compartilhar
                  </a>
                </Box>
              </Box>
              <Box>

              </Box>
              <Box>
              </Box>

            </Box>

          </Box>

          <Typography pt="5" pb="4" fontWeight="bold" color="brand.secondary">
            ENTREGÁVEIS
          </Typography>
          <Deliverables
            title="{{Nome do entregável}}"
            time="Reserve 2 horas"
            description="Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla"

          />
          <Deliverables
            title="{{Nome do entregável}}"
            time="Reserve 2 horas"
            description="Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla"
          />
        </Box>
        <Box width="300"
          margin="2"
          padding="2"
        >
          <Box
            style={{
              border: '8px solid #68DE5A', marginBottom: '50px',
              width: "300px",
              height: "200px",
            }}
            borderRadius={8}
          >
            <Image src="/img/image.png" width="300" alt="Logo" height="200" />
          </Box>

          <Typography fontWeight="bold" color="brand.secondary">
            RANKING
          </Typography>
          <SidebarPageDesafios
            user_name='Thomas Lima'
            ranking={210}
          />
          <SidebarPageDesafios
            user_name='Thomas Lima'
            ranking={210}
          />
          <SidebarPageDesafios
            user_name='Thomas Lima'
            ranking={210}
          />
          <Box >
            <Box
              dir="row"
              justifyContent="end"
              pt="1"
              cursor="pointer"
            >
              <Link href="/" >
                <Typography fontWeight="bold" color="brand.secondary"
                >
                  Ver ranking completo
                </Typography>

              </Link>
            </Box>
          </Box>
        </Box>

      </Box>
      <Box dir="row"
        // position="fixed"
        bottom={0}
        justifyContent="center"

        backgroundColor="secondary.4"
      >
        <Box
          justifyContent="center"
          backgroundColor="secondary.4">

          <Box

            style={{
              width: "1254px",
              height: "72px",


            }}
            //  
            alignItems="center"
            dir="row"
            justifyContent="end"
          >
            <Footer />
          </Box>
        </Box>


      </Box>

    </Box>

  )
}

export default ChallengesPageTempletes;
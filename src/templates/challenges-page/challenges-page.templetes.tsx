import { Box, MaterialIcon,  Tag, Tooltip, Typography } from '@gama-academy/smash-web'
import{ Entregaveis} from './entregaveis.page.desafios'
import {SidebarPageDesafios } from './sidebar.page.desafios'
import React from 'react'
import { Header } from '../../components/header';
import Image from 'next/image'

const ChallengesPageTempletes = () => {

  return (
    <Box>
      <Header />
      < Box  dir="row"
        justifyContent="center"
      >
        <Box width="858px"
      mr={5}
        
        >
          <Box dir="row"

          >
            <Box>
              <MaterialIcon

                height={26}
                name="extension"
                shape="round"
                shapeBackground="green.2"
                size={18}
                color="brand.primary"
                width={24}
              />

            </Box>

            <Box>

              <Typography
                ml="4"

                type="title"

              >
                Quem tem dados é rei!
              </Typography>
            </Box>

          </Box>
          <Box
            mt="2"
          >
            {/* <MaterialIcon name="hipster" /> */}

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
            style={{ borderBottom: 'solid #e5e5e5' }}
          >

            <Tag
              borderRadius="4"
              align="center"
              color="brand.secondary"
              tag="span"
              pl="3"
              pr="3"
            >
              SEO
            </Tag>
            <Tag
              borderRadius="4"
              align="center"
              color="brand.secondary"
              tag="span"
              m="1"
            >
              UI
            </Tag>
            <Tag
              borderRadius="4"
              align="center"
              color="brand.secondary"
              tag="span"
              m="1"
            >


              UX
            </Tag>

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
                      <Box>
                        <MaterialIcon name="emoji_events" mr="1"
                          color="brand.secondary"
                        />
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

                <Box >


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

          

          <Entregaveis
          title="{{Nome do entregável}}"
         time="Reserve 2 horas"
          description="Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla"
          
          />
          <Entregaveis
          title="{{Nome do entregável}}"
        time="Reserve 2 horas"
          description="Nulla scelerisque libero vitae ex convallis congue. Praesent ut dignissim mi. Quisque lobortis pellentesque magna id malesuada. Proin sed urna porttitor, dapibus purus quis, malesuada nulla"
          
          />

        </Box>

        <Box width="300"
          border="1px solid black"
          margin="2"
          padding="2"

        >
   
<Box
style={{ border: '8px solid #68DE5A', marginBottom: '50px',
width: "300px",
height: "200px"
 }}

borderRadius={8}
>
<Image src="/img/image.png" width="300" alt="Logo" height="200" />
</Box>
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


</Box>




 </Box>
  </Box>

  )
}

export default ChallengesPageTempletes;
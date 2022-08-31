import { Box, Button, MaterialIcon, ProgressBar, Typography } from '@gama-academy/smash-web'
import * as S from './styles';
import { SidebarPageDesafios } from './sidebar.page.desafios'
import { BsFillBarChartFill } from 'react-icons/bs';
import { Header } from '../../components/header';
import { Footer } from "../../components/footer";
import Image from 'next/image'
import Link from 'next/link';
import { Deliverables } from './components/deliverables-list/deliverables-list.comp';
import { backgroundColor, padding } from 'styled-system';
import Modal, { ModalBody, ModalFooter, ModalHeader, useModal } from './components/modal/modal.comp';


const StartChallenges = () => {

  const { isShowing, toggle } = useModal();
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
            <Typography
              ml="2"
              type="title"
            >
              Quem tem dados é rei!
            </Typography>
          </Box>
          <Deliverables
            title="Instruções gerais"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada purus vel nisi vehicula, nec fringilla ipsum tempus. Sed fermentum, quam ac tempor ornare, ipsum dui ultrices arcu, sollicitudin lacinia libero eros nec arcu. Curabitur eget tincidunt quam. Duis quis nisi id libero auctor blandit. Ut et purus vitae ex elementum hendrerit.
            Vivamus et euismod ex, at rutrum nunc. Cras ultrices interdum vulputate. Fusce finibus blandit odio, sit amet condimentum quam mollis euismod. Suspendisse et sem sem. Curabitur malesuada sit amet risus a mattis. Nunc consectetur arcu id aliquet finibus."

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
            MATERIAL COMPLEMENTAR
          </Typography>
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

            </Box>
          </Box>
        </Box>

      </Box>
      <Box dir="row"
        //  position="fixed"
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
            <p style={{ color: "white" }} >Entregáveis</p>

            <div
              style={{
                width: '100%',
                margin: "15px"
              }}
            >
              <ProgressBar
                height={250}
                max={50}
                percentageSide="right"
                percentageTextProps={{
                  color: 'white',
                  // opacity:"0.4",
                }}

                progressBackgroundColor="white"
                progressLineBackgroundColor="white"
                scale="md"
                showPercentage
                value={20}
              />
            </div>



            <div>

              < Button
                buttonType="button"
                className=""
                color="white"
                onClick={toggle}
                shadowColor="success"
                size="4"
                variant="filled"

              >
                <Box
                  alignment="center"
                  dir="row"
                  justifyContent="space-between"
                  width="171px"
                  height="10px"   >
                  <Typography
                    mr="1"
                    color="greyDark.4"
                    type='title'

                  >
                    Iniciar desafio
                  </Typography>
                  <MaterialIcon
                    name="play_circle_filled"
                    shape="none"
                    color="primary.3"
                    type="round"

                  />
                </Box>
              </Button>

              <Modal {...{ isShowing, toggle }}>
              <ModalHeader {...{toggle}}>
              <Image src="/img/ilustracao-modal.png" width="150" alt="ilustracao-modal" height="135" />
              </ModalHeader>

               

                <Box justifyItems="center"  pr="12"  pl="12" dir="row" style={{ textAlign: "center",}}
                >
                  <ModalBody>
                    <Typography type="title" margin="2" >Adicione os entregáveis</Typography>
                    <Typography>
                      Para finalizar o desafio você precisa adicionar todos os entregáveis.
                    </Typography>

                  </ModalBody>
                </Box>
                <ModalFooter>

                  <Button
                    color="violet.4"
                    fluid
                    onClick={toggle}
                    size="4"
                    variant="filled"
                  >
                    Entendi
                  </Button>

                </ModalFooter>


              </Modal>
            </div>
          </Box>
        </Box>


      </Box>

    </Box>

  )
}

export default StartChallenges;
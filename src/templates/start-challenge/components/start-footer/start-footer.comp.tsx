import React from 'react';

import { Icon, Typography, Button, Box, MaterialIcon } from '@gama-academy/smash-web';
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook';
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive';
import Image from 'next/image'
import * as Styles from './start-footer.styles';
import { ModalBody, ModalFooter, ModalHeader, useModal, } from '../../../../components/modal';
import Modal from '../../../../components/modal/modal.comp';

const StartFooter: React.FC = () => {

    const { isShowing, toggle } = useModal();

    const { width } = useDimensions()

    const isMobile = width <= MOBILE_BREAKPOINT


    return (
        <Styles.Container
            backgroundColor="secondary.4"
            py="2"
            px="4"
            width="100%"
            justifyContent="flex-end"
            dir="row"
            flexWrap="wrap"
        >
            <Box
                dir="row"
                flex={1}
                justifyContent="center"
                alignItems="center"
                my={isMobile ? "2" : "0"}
            >
                <Icon.Material name="extension" size={16} color="white" />
                <Typography ml="2" color="white">{!isMobile ? "Entregáveis " : ""}0/2</Typography>
                <Box
                    flex={1}
                    backgroundColor="white"
                    borderRadius="2"
                    height={4}
                    ml="3"
                    minWidth={200}
                >
                    <Box></Box>
                </Box>
                <Typography color='white' mx="3">0%</Typography>
            </Box>

            <Button
                color="white"
                onClick={toggle}
                fluid={isMobile ? true : false}
            >
                <Typography mr="1" color="greyDark.4" fontWeight="bold">Iniciar desafio</Typography>

                <MaterialIcon name="flag"  shapeBackground="primary.3" shape="round"
                />
            </Button>
            <Modal {...{ isShowing, toggle }}>
                <ModalHeader {...{ toggle }}>
                    <Image src="/img/ilustracao-modal.png" width="150" alt="ilustracao-modal" height="135" />
                </ModalHeader>
                <ModalBody>
                    <Styles.modalDescription>
                        <Typography type="title" px="2" mt="2" mb="2" align="center">
                            Adicione os entregáveis
                        </Typography>
                        <Typography align="center">
                            Para finalizar o desafio você precisa adicionar todos os entregáveis.
                        </Typography>
                    </Styles.modalDescription>

                </ModalBody>
                <ModalFooter>
                    <Styles.BoxModal>
                        <Button

                            color="violet.4"
                            onClick={toggle}
                            fluid
                            variant="filled"
                        >
                            Entendi
                        </Button>
                    </Styles.BoxModal>

                </ModalFooter>
            </Modal>
        </Styles.Container>
    )
}
export default StartFooter;

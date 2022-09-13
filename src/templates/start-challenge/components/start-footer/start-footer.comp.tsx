import React, { useState } from 'react';

import { Icon, Typography, Button, Box, MaterialIcon } from '@gama-academy/smash-web';
import { useDimensions } from '../../../../hooks/layout/use-dimensions.hook';
import { MOBILE_BREAKPOINT } from '../../../../utils/responsive';
import * as Styles from './start-footer.styles';
import { StartOrientationModal } from '../start-modal/start-orientation-modal.comp';


const StartFooter: React.FC = () => {

 const [orientationModalVisible, setOrientationModalVisible] = useState(false)

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
                onClick={ () => setOrientationModalVisible(true)}
                fluid={isMobile ? true : false}
            >
                <Typography mr="1" color="greyDark.4" fontWeight="bold">Iniciar desafio</Typography>

                <MaterialIcon name="flag"  shapeBackground="primary.3" shape="round"
                />
            </Button>

<StartOrientationModal visible={orientationModalVisible} close={()=> setOrientationModalVisible(false)}  />
           
        </Styles.Container>
    )
}
export default StartFooter;

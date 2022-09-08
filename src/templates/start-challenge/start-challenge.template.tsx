import React from 'react';

import { Box } from '@gama-academy/smash-web';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';


const StartChallengeTemplate = () => {
    return (
        <>
            <Header />
            <Box pb="4" minHeight="100vh">
                <Box 
                    dir="row"
                    mb="6"
                    justifyContent="center"
                    flexWrap="wrap-reverse"
                    width="100%"
                >

                </Box>
            </Box>
            <Footer/>
        </>
    )
}

export default StartChallengeTemplate;
import { Box, Button, Typography } from '@gama-academy/smash-web';
import type { NextPage } from 'next'
import { useState } from 'react';
import { Header } from '../components/header/header.comp';
import { TimeUpModal } from '../templates/start-challenge/components/modal-Time-up/modal-time-up.comp';

const Home: NextPage = () => {
  const [orientationModalVisible, setOrientationModalVisible] = useState(false)
  return (
    <div>
      <Header/>


  

   
        <div></div>

        <Button
            color="white"
            onClick={ () => setOrientationModalVisible(true)}
        
        >
     

          buttom modal 
        </Button>

<TimeUpModal visible={orientationModalVisible} close={()=> setOrientationModalVisible(false)}  />
      <h1>
        ...
      </h1>
    </div>
  )
}

export default Home

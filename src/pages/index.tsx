import { Button } from '@gama-academy/smash-web';
import type { NextPage } from 'next'
import { useState } from 'react';
import { Header } from '../components/header/header.comp';
import { CongratulationModal } from '../templates/start-challenge/components/congratulation-modal/congratulation-modal.comp';
import { GabaritoModal } from '../templates/start-challenge/components/gabarito-modal /gabarito-modal.comp';

const Home: NextPage = () => {
  const [congratulationModalVisible, setCongratulationModal] = useState(false)
  return (
    <div>
      <Header/>
      <Button
    onClick={ () =>setCongratulationModal(true)}
      >
Congratulation Modal
      </Button>
<CongratulationModal visible={congratulationModalVisible} close={()=>  setCongratulationModal(false)}/>
      <Button
    onClick={ () =>setCongratulationModal(true)}
      >
Congratulation Modal
      </Button>
<GabaritoModal visible={congratulationModalVisible} close={()=>  setCongratulationModal(false)}/>

    </div>
  )
}

export default Home

import { Box, Card, MaterialIcon, Typography } from '@gama-academy/smash-web';
import React, {  } from 'react';




const Feedback: React.FC = () => {

    return (
      <Box px="2" >
        <Typography fontWeight="bold" color="brand.secondary">
        GABARITO
        </Typography>
      
            <Card 
             backgroundColor="grey.1"
                mt={3}
                shadowBehavior="never"
            >
                <Box dir="row" justifyContent="space-between" alignItems="center" px="2">
                    <Box dir="row" alignItems="center" justifyContent="space-around">
                            <MaterialIcon name="description" 
                            mr="1"
                                color="secondary.4"
                            />
                            <Box ml="2">
                                <Typography fontWeight="bold" >Gabarito-atividade.pdf</Typography>
                                <Typography color='secondary.4' fontSize="1" fontWeight="semi_bold">Disponível para assinantes</Typography>
                            </Box>      
                    </Box>
          
                </Box>
            </Card>
    </Box>
    )
}
export default Feedback;
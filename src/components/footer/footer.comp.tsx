
import { Box, Button, MaterialIcon, Typography } from '@gama-academy/smash-web';
import React from 'react';



export const Footer = () => {
  return (  
  
    < Button
    buttonType="button"
   className=""
   color="white"
   onClick={function noRefCheck(){}}
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
  );
}
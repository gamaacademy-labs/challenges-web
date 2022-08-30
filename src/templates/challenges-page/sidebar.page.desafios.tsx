
import { Box, MaterialIcon, Typography } from '@gama-academy/smash-web'
import Image from 'next/image'
import { RankingProps  } from './challenges.types';
export const SidebarPageDesafios = ({ user_name, ranking}:RankingProps ) => {
  return (
    <Box padding={3}
      borderRadius="3"
      border="1px solid #D7DBDA"
      backgroundColor="white"
      justifyContent="space-between"
      mt={3}
  
    height={70}
    >
      <Box dir="row" alignItems="center"  justifyContent="space-around">

        <Box>
          <Box dir="row">
            <Box
              width={24}
              height={24}
              >
              <MaterialIcon name="emoji_events" mr="1"
                color="yellow.4"
              />

            </Box >
            <Box
            mr={2}
            ml={2}
              width={24}
              height={24}
              >
                <Image src="/img/user-foto.png" width="32" alt="Logo" height="32"  />

            </Box >         
            <Box >
            <Typography type="tips">{ user_name}</Typography>
              
            </Box>
            <Box>
     
            </Box>
          </Box>

          <Box>
      </Box>
        </Box>

        <Box dir="row" ml={4}
         
        >
          <span >{ranking}</span>
        </Box>

      </Box>
       
    </Box>
  )
};

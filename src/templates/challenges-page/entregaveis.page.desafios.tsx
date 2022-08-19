
import { Box, MaterialIcon, Typography } from '@gama-academy/smash-web'

import { EntregaveisProps } from './challenges.types';

export const Entregaveis = ({ title, time, description }: EntregaveisProps) => { 
  return (
  <Box padding={3}
    borderRadius="3"
    border="1px solid #D7DBDA"
    backgroundColor="white"
    mt={3}
  >
    <Box dir="row" alignItems="center"  >

      <Box>
        <Box borderRadius={24}
          alignItems="center"
          justifyContent="center"
          p={3}
          width={24}
          height={24}
          mr={1}
          backgroundColor="secondary.1"
        >
          <MaterialIcon
            name="task"
            width={16}
            height={16}
            color="brand.secondary"
          />

        </Box >
      </Box>

      <Typography type="title">{title}</Typography>
      <Box dir="row" ml={4}
        // backgroundColor="grey.1"
        backgroundColor="grey.1"
        borderRadius="1"
        padding={1}
        alignItems="center"
      >
        <MaterialIcon
          height={27}
          name="schedule"
          width={24}
          color="brand.secondary"


        />

        <Typography type="tips" >{time}</Typography>
      </Box>

    </Box>
    <Box mt={1}>
      <Typography type="description">{description}</Typography>
    </Box>
  </Box>
  )
};

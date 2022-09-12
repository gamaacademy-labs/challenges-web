import React from 'react';
import { Box, Card, Icon, Typography } from '@gama-academy/smash-web';

const StartDescriptionTab = () => {
  return (
    <Card
      shadowBehavior='never'
      mt="4"
    >
      <Box p="3">
        <Box dir="row">
          <Icon.Material name="style" size={24} color="secondary.4" />
          <Typography ml="2" fontWeight="semi_bold">Instruções gerais</Typography>
        </Box>
        <Typography type='description' mt="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada purus vel nisi vehicula, nec fringilla ipsum tempus. Sed fermentum, quam ac tempor ornare, ipsum dui ultrices arcu, sollicitudin lacinia libero eros nec arcu. Curabitur eget tincidunt quam. Duis quis nisi id libero auctor blandit. Ut et purus vitae ex elementum hendrerit.
          Vivamus et euismod ex, at rutrum nunc. Cras ultrices interdum vulputate. Fusce finibus blandit odio, sit amet condimentum quam mollis euismod. Suspendisse et sem sem. Curabitur malesuada sit amet risus a mattis. Nunc consectetur arcu id aliquet finibus.</Typography>
      </Box>
    </Card>
  )
}

export default StartDescriptionTab;
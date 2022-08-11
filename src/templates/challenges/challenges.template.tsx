import { Box, Button, Typography } from '@gama-academy/smash-web'
import { IChallenges } from './index'

const ChallengesTemplate = ({ challenges }: { challenges: IChallenges[] }) => {
    return (
        <>
            <Box display="flex" mb={66} flexDirection="column" alignItems="center">Header</Box>

            <Typography fontFamily={'monospace'} align='center' ><h1>Desafios</h1></Typography>

            <Box alignment='center' margin='lg' dir='column'  >
                {challenges.map((challenge: IChallenges) => {
                    return (
                        <Box className='hoverEffect' padding={4} borderRadius={'10px'} style={{ width: '75vw' }} border={'1px solid #8d52e5'} justifyContent={'space-between'} alignment={'center'} margin={'lg'} dir={'row'} key={challenge.id}>
                            <Typography fontFamily={''} tag='p' align='center'>{challenge.title}
                            </Typography>
                            <Box >
                                <Button onClick={() => { }} buttonType='button' size='1'>Iniciar desafio</Button>
                            </Box>
                        </Box>

                    )
                })}
            </Box>

        </>
    )
}

export default ChallengesTemplate;
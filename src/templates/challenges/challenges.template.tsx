import { Box, Button, Typography } from '@gama-academy/smash-web'
import { IChallenges } from './index'

const ChallengesTemplate = ({ challenges }: { challenges: IChallenges[] }) => {
    return (
        <>
            <Typography align='center'><h1>Desafios</h1></Typography>
            <ul>
                {challenges.map((challenge: IChallenges) => {
                    return (
                        <Box alignment='center' margin='lg' dir='row' key={challenge.id}>
                            <Button onClick={() => { }} buttonType='button' size='1'>Iniciar desafio</Button>
                            <Typography tag='p' align='center'>{challenge.title}
                            </Typography>
                        </Box>
                    )
                })}
            </ul>
        </>
    )
}

export default ChallengesTemplate;
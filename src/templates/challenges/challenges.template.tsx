// CONTEUDO DISPONIVEL NO ARQUIVO PAGES > DESAFIOS.TSX


// import { Box, Button, Typography } from '@gama-academy/smash-web'
// import { GetServerSideProps } from 'next'
// import React from 'react'
// import axios from 'axios'

// interface IChallenges {
    //     id: number
    //     title: string
    // }
    
    // interface ChallengesProps {
        //     challenges: IChallenges[]
        // }
        
        // export const getServerSideProps: GetServerSideProps = async () => {
            //     const challengesUrl = 'https://jsonplaceholder.typicode.com/posts'
            //     const challengesFromApi = await axios.get(challengesUrl)
            //     const challenges: IChallenges[] = challengesFromApi.data
            
            //     if (!challenges) {
                //         return {
                    //             notFound: true,
                    //         };
                    //     }
                    //     return {
//         props: { challenges: challenges },
//     }
// }

// const ChallengesTemplate = ({ challenges }: { challenges: IChallenges[] }) => {
//     return (
//         <>
//             <Typography align='center'><h1>Desafios</h1></Typography>
//             <ul>
//                 {challenges.map((challenge: IChallenges) => {
    //                     return (
        //                         <Box alignment='center' margin='lg' dir='row' key={challenge.id}>
        //                             <Button mr="10px" buttonType='button' size='1'>Iniciar desafio</Button>
        //                             <Typography tag='p' align='center'>{challenge.title}
        //                             </Typography>
        //                         </Box>
        //                     )
        //                 })}
        //             </ul>
        //         </>
        
        //     )
        // }
        
        // export default ChallengesTemplate;
        
        export {} // parar erro 'isolatedModules'
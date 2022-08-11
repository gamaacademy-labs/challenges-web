// CONTEUDO DISPONIVEL NO ARQUIVO PAGES > DESAFIOS.TSX


// import { Box, Typography } from '@gama-academy/smash-web'
// import { GetServerSideProps } from 'next'
// import React from 'react'
// import axios from 'axios'

// interface IChallenges {
//   id: number
//   title: string
// }

// interface ChallengesProps {
//   challenges: IChallenges[]
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   console.log('getStaticProps')
//   const apiUrl = 'https://jsonplaceholder.typicode.com/posts'
//   const challengesFromApi = await axios.get(apiUrl)
//   const challenges: IChallenges[] = challengesFromApi.data
  
//   if (!challenges) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {challenges: challenges},
//   }
// }



// const ChallengesTemplate = ({ challenges }: {challenges: IChallenges[]}) =>{
//   return (
//     <Box>
//       hello
//       {challenges.map((challenge: IChallenges) => {
//         return (
//           <Typography type='title' key={challenge.id}>{challenge.title}</Typography>
//         )
//       })}
//     </Box>
//   )
// }

// export default ChallengesTemplate
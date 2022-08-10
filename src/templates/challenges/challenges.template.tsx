import { Box, Typography } from '@gama-academy/smash-web'
import React from 'react'
import api from "../../services/challenges.json" 

interface IChallenges{
  id: number
  title: string
}

interface ChallengesProps{
  ChallengesTemplate:IChallenges[]
}


export default function ChallengesTemplate ({ChallengesTemplate}:ChallengesProps){
  return (
    <Box dir="row">
      {ChallengesTemplate.map(challenge => {
        return (
      <Typography type='title' key={ChallengesTemplate.id}>{ChallengesTemplate.title}</Typography>

        )
      })}
      
    </Box>
  )
}

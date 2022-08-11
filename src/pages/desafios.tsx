import axios from 'axios'
import ChallengesTemplate from '../templates/challenges/challenges.template'
import { GetServerSideProps } from 'next'
import { IChallenges, ChallengesProps } from '../templates/challenges/index'

const ChallengesPage = ({ challenges }: ChallengesProps) => {
    return (
        <ChallengesTemplate challenges={challenges} />
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const challengesUrl = 'https://jsonplaceholder.typicode.com/posts'
    const challengesFromApi = await axios.get(challengesUrl)
    const challenges: IChallenges[] = challengesFromApi.data

    if (!challenges) {
        return {
            notFound: true,
        };
    }
    return {
        props: { challenges: challenges },
    }
}

export default ChallengesPage
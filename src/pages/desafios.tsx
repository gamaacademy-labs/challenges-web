import ChallengesTemplate from '../templates/challenges/challenges.template'
import { GetServerSideProps } from 'next'
import { ChallengesProps } from '../templates/challenges/index'
import { getChallenges } from '../services/challenges/challenges.service'

const ChallengesPage = ({ challenges }: ChallengesProps) => {
    return (
        <ChallengesTemplate challenges={challenges} />
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const challenges = await getChallenges()

    if (!challenges) {
        return {
            notFound: true,
        };
    }

    return {
        props: {challenges: challenges },
    }
}

export default ChallengesPage
import type { GetServerSideProps, NextPage } from 'next'


const Home: NextPage = () => {

  return (
    <div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
      redirect: {
        destination: "/desafios",
        permanent: true
      }
  }
}

export default Home

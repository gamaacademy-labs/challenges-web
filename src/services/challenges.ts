import axios from "axios"

interface challenges {
    name: string,
    email: string,
    message: string
}

const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
})


export const getChallenges = async (): Promise<challenges []> => {
  try {
      const response = await baseUrl.get("/challenges")
      return response.data
  } catch (error) {
      throw new Error("Não foi possivel pegar os dados")
  }
}

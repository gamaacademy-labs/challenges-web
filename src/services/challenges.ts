import axios from "axios"


    export interface challenges{
        title:string;
        time:string;
        description:string;
      }



const baseUrl = axios.create({
    baseURL: "http://localhost:3350"
})


export const getChallenges = async (): Promise<challenges []> => {
  try {
      const response = await baseUrl.get("/challenges")
      return response.data
  } catch (error) {
      throw new Error("Não foi possível pegar os dados")
  }
}

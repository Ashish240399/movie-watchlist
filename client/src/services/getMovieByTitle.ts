import axios from "axios";

export async function getMoviewByTitle(movieTitle: string) {
  console.log(movieTitle);
  try {
    const response: any = await axios.get(
      `https://www.omdbapi.com/?t=${movieTitle}&apikey=5a31aba3`
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

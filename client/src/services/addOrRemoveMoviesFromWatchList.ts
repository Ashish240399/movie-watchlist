import axios from "axios";

export async function addOrRemoveMoviesFromWatchList(email:string,movie:Movie) {
    try {
        const response:any = await axios.post("/api/addOrRemoveFromWatchlist",{email:email,movie:movie})
        return response.data;
    } catch (error) {
        return error;
    }
}
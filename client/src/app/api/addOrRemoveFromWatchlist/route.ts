
import { addMovieToWatchList, removeMovieFromWatchList } from "@/redux/slices/usersDataSlice";
import { store } from "@/redux/store";

// Define the POST handler for the route
export const POST = async(req:Request,res:Response) => {
  const userData = store.getState().userData
    // Parse the request body
    const body: any = await req.json();
    // Extract email and movie from the request body
    const email = body.email;
    const movie:Movie = body.movie;

    // Check if email is provided
    if (email) {
      // Find the user in the userData array
      console.log(userData,"from addOrRemoveFromWatchlist");
      console.log(email);
      const user = userData.find(user => user.email === email);

      // Check if the user exists
      if (user) {
        // The user already exists
        // Check if the movie is already in the user's watchList
        if (user.watchList.some((obj:Movie)=>obj.Title===movie.Title)) {
            // If the movie is in the watchList, remove it
            store.dispatch(removeMovieFromWatchList({email:email,movie:movie}))
        }
        else{
            // If the movie is not in the watchList, add it
            store.dispatch(addMovieToWatchList({email:email,movie:movie}))
        }
        // Return the updated user data
        return Response.json(user, {
            status: 200
        })
      } else {
        // If the user does not exist, return an error message
        return Response.json({message:"User does not exist"}, {
            status: 404
        })
      }
    } else {
        // If email is not provided, return a bad request message
        return Response.json({ message: 'Bad request' }, {
            status: 400
        })
    }
}
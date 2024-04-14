import { addUser } from "@/redux/slices/usersDataSlice";
import { store } from "@/redux/store";

// Define the POST handler for the route
export const POST = async(req:Request,res:Response) => {
  const userData = store.getState().userData
    // Parse the request body
    const body: any = await req.json();
    // Extract the email from the request body
    const email = body.email;

    // Check if email is provided
    if (email) {
      // Find the user in the userData array
      const user = userData.find(user => user.email === email);

      // Check if the user exists
      if (user) {
        // If the user already exists, return an error message
        return Response.json({message:"User already exists"}, {
          status: 409
        })
      } else {
        // If the user doesn't exist, create a new user
        const newUser: User = { email: email, watchList: [] };
        store.dispatch(addUser(newUser))

        // Return the new user data
        return Response.json(newUser, {
          status: 200
        })
      }
    } else {
      // If email is not provided, return a bad request message
      return Response.json({ message: 'Bad request' }, {
        status: 400
      })
    }
}
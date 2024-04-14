import path from "path";
import fs from 'fs';

// Define the POST handler for the route
export const POST = async(req:Request,res:Response) => {
    // Parse the request body
    const body: any = await req.json();
    // Extract the email from the request body
    const email = body.email;

    // Check if email is provided
    if (email) {
      // Define the path to the users data file
      const usersFilePath = path.resolve(process.cwd(), "./src/data/userData.json");

      // Read the users data file
      const usersFileContent = await fs.promises.readFile(usersFilePath, 'utf-8');
      let users;

      // Try to parse the users data file content
      try {
        users = JSON.parse(usersFileContent);
      } catch (error) {
        // Log an error message if the parsing fails
        console.error('Error parsing JSON:', error);
        // Initialize users as an empty object
        users = {};
      }

      // Check if the user exists
      if (users[email]) {
        // If the user already exists, return an error message
        return Response.json({message:"User already exists"}, {
          status: 409
        })
      } else {
        // If the user doesn't exist, create a new user
        const newUser = { email: email, watchList: [] };
        users[email] = newUser;

        // Write the updated users object back to the JSON file
        await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

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
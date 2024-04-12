import path from "path";
import fs from 'fs';

export const POST = async(req:Request,res:Response) => {
    const body: any = await req.json();
    const email = body.email;
    if (email) {

      const usersFilePath = path.resolve(process.cwd(), "./src/data/userData.json");

      const usersFileContent = await fs.promises.readFile(usersFilePath, 'utf-8');
      let users;
        try {
        users = JSON.parse(usersFileContent);
        } catch (error) {
        console.error('Error parsing JSON:', error);
        users = {};
        }

      if (users[email]) {
        // The user already exists
          return Response.json(users[email], {
            status: 200
        })
      } else {
        // The user doesn't exist, so create a new user
        const newUser = { email: email, watchlist: [] };
        users[email] = newUser;

        // Write the updated users object back to the JSON file
        await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));

        return Response.json(newUser, {
            status: 200
        })
      }
    } else {
        // Handle the case where req.body is null
        return Response.json({ message: 'Bad request' }, {
            status: 400
        })
    }
}
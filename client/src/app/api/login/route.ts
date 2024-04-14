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
          return Response.json(users[email], {
            status: 200
        })
      } else {
        return Response.json({message:"User does not exist"}, {
            status: 404
        })
        
      }
    } else {
        // Handle the case where req.body is null
        return Response.json({ message: 'Bad request' }, {
            status: 400
        })
    }
}
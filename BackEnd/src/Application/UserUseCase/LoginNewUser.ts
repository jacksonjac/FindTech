import { RegisterNewUserRepo } from "../../Framework/MongoDb/Repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const secretKey = "your-256-bit-secret";


export const loginNewUser = (dependencies: any) => {
  const { loginNewUserRepo } = dependencies.repositery;

  const executeFunction = async (data: any) => {
    const { email, password } = data;

    // Fetch user data based on email
    const responseFromLoginNewUser = await loginNewUserRepo.postExist({
      email,
    });

    // Debugging: Log the fetched user data
    console.log("Fetched user data:", responseFromLoginNewUser);

    if (responseFromLoginNewUser.status === true) {
      const userData = responseFromLoginNewUser.Data;
      const hashedPassword = userData.password;

      if (hashedPassword) {
        // Check if the provided password matches the hashed password
        const passwordMatch = await bcrypt.compare(password, hashedPassword);

        // Debugging: Log the result of password comparison
        console.log("Password match:", passwordMatch);

        if (passwordMatch) {
          // Passwords match, generate a JWT token
          const token = jwt.sign(
            {
              sub: userData._id, // Include user-specific details
              name: userData.name, // You can add more claims as needed
            },
            secretKey,
            { expiresIn: "1h" } // Token expires in 1 hour
          );

          return {
            message: "Login successful",
            data: userData,
            token: token, 
            status:true// Include the JWT token in the response
          };
        } else {
          // Passwords do not match
          return {
            status: false,
            message: "Login failed: Invalid password",
            data: null,
          };
        }
      } else {
        // No hashed password found
        return {
          status: false,
          message: "Login failed: No hashed password found",
          data: null,
        };
      }
    } else {
      // User not found
      return {
        status: false,
        message: "Login failed: User not found",
        data: null
      };
    }
  };

  return { executeFunction };
};

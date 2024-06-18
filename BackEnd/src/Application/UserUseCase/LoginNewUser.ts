import { RegisterNewUserRepo } from "../../Framework/MongoDb/Repository";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const secretKey = "your-256-bit-secret";
console.log(process.env.SECRET_KEY);

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

    if (responseFromLoginNewUser.status) {
      const userData = responseFromLoginNewUser.Data;
      const hashedPassword = userData.password;

      // Debugging: Ensure the hashed password is available
      console.log("Hashed password:", hashedPassword);

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
            token: token, // Include the JWT token in the response
          };
        } else {
          // Passwords do not match
          return {
            message: "Login failed: Invalid password",
            data: null,
          };
        }
      } else {
        // No hashed password found
        return {
          message: "Login failed: No hashed password found",
          data: null,
        };
      }
    } else {
      // User not found
      return {
        message: "Login failed: User not found",
        data: responseFromLoginNewUser,
      };
    }
  };

  return { executeFunction };
};

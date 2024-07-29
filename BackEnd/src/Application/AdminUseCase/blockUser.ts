import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";




export const AdminBlockUser = (dependencies: any) => {
    const { blockUserRepo } = dependencies.repositery;
     console.log("adlokingfksdjf")
    const executeFunction = async (userid:any) => {
        try {
            // Fetch user data
            const responseFromUserList = await blockUserRepo.PostExit(userid);

            // Debugging: Log the fetched user data
            console.log("Fetched user data:", responseFromUserList);

           
        } catch (error) {
            // Handle any unexpected errors
            console.error("Error fetching user list:", error);
            return {
                status: false,
                message: "An error occurred while fetching user list",
                data: null
            };
        }
    };

    return { executeFunction };
};
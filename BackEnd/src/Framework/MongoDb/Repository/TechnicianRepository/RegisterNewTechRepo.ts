import { Technican } from "../../Database";

export default {
  postExist: async (data: any) => {
    try {
      // Check if the user with the provided email already exists
      console.log("Checking if user exists with email:", data.email);
      let existingUser = await Technican.findOne({ email: data.email });

      if (existingUser) {
        // Update existing user data with the latest values
        console.log("User exists, updating data for:", data.email);
        existingUser.name = data.name;
        existingUser.district = data.district;
        existingUser.phone = data.phone;
        existingUser.workexp = data.workexp;
        existingUser.worklevel = data.worklevel;
        existingUser.designation = data.designation;
        existingUser.aadarNo = data.aadarNo;
        existingUser.panNo = data.panNo;
        existingUser.serviceCharge = data.serviceCharge;
        existingUser.password = data.password; // Assuming password is already hashed

        await existingUser.save();

        console.log("User data updated successfully for:", data.email);
        return { status: true, message: "User data updated successfully", data: existingUser };
      } else {
        // Create a new user if no existing user is found
        console.log("No existing user found, creating new user with email:", data.email);
        const newUser = await Technican.create({
          name: data.name,
          email: data.email,
          district: data.district,
          phone: data.phone,
          workexp: data.workexp,
          worklevel: data.worklevel,
          designation: data.designation,
          aadarNo: data.aadarNo,
          panNo: data.panNo,
          serviceCharge: data.serviceCharge,
          password: data.password, // Assuming password is already hashed
        });

        console.log("User registered successfully with email:", data.email);
        return { status: true, message: "User registered successfully", data: newUser };
      }
    } catch (error) {
      console.error("Error in postExist:", error);
      return { status: false, message: "An error occurred during registration", error: error };
    }
  },
};
import { User } from "../../Database";

export default {
  postExist: async (data: any) => {
    try {
      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email: data.email });

      if (existingUser) {
        // Update existing user data only if new data fields are not empty
        existingUser.name = data.name || existingUser.name;
        existingUser.district = data.district || existingUser.district;
        existingUser.phone = data.phone || existingUser.phone;

        // Update password only if a new one is provided
        if (data.password) {
          existingUser.password = data.password;
        }

        await existingUser.save();

        return { status: true, message: "User data updated successfully", Data: existingUser };
      } else {
        // Create a new user
        const newUser = new User(data);
        await newUser.save();

        return { status: true, message: "User registered successfully", Data: newUser };
      }
    } catch (error) {
      console.error("Error in postExist:", error);
      return { status: false, message: "An error occurred during registration", error: error };
    }
  },
};

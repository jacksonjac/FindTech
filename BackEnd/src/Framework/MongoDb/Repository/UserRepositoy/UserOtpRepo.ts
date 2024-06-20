import { UserOtp } from "../../Database";

export default {
  storeOtp: async (userId: string, otp: string) => {
    try {
      const createOtp = await UserOtp.create({
        userId: userId,
        OTP: otp,
      });

      return { success: true, data: createOtp };
    } catch (error) {
      console.error("Error storing OTP:", error);
      return { success: false, error };
    }
  }
};
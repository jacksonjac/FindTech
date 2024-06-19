import nodemailer, { Transporter } from "nodemailer";
import { generateOTP } from "../../Adaptors/Utilities/Otp-GenerateFn";
import { sendOtpEmail } from "../../Adaptors/Utilities/sendOtpEmail";

export const RegisterNewUser = (dependencies: any) => {
  const {
    repositery: { RegisterNewUserRepo },
  } = dependencies;

  const executeFunction = async (data: any) => {
    const responceFromRegisterNewUser = await RegisterNewUserRepo.postExist(
      data
    );

    if (responceFromRegisterNewUser.status === true) {
      const email: string = responceFromRegisterNewUser.data?.email;

      if (!email) {
        console.error("Email is undefined or null.");
        return {
          message: "Failed to extract email",
          Data: responceFromRegisterNewUser,
        };
      }

      const otp: string = generateOTP();
      await sendOtpEmail(email, otp);


     
      return {
        message: "OTP sent to email",
        Data: responceFromRegisterNewUser,
      };
    }

    return {
      message: responceFromRegisterNewUser.status,
      Data: responceFromRegisterNewUser,
    };
  };

  return { executeFunction };
};

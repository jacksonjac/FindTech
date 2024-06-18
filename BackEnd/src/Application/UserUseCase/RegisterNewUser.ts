import nodemailer, { Transporter } from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
const appPass = process.env.APP_PASS;
console.log('App Password:', appPass);
const transporter: Transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'jacksonjack333r@gmail.com',
    pass: 'ispi oava uktt atrg',
  },
});

const generateOTP = (): string => {
  return crypto.randomInt(100000, 999999).toString();
};



export const RegisterNewUser = (dependencies: any) => {
  const {
    repositery: { RegisterNewUserRepo }} = dependencies;

  

  

  const sendOtpEmail = async (email: string, otp: string): Promise<void> => {
    const mailOptions = {
      from: 'jacksonjack333r@gmail.com',
      to: email,
      subject: 'FindTech OTP for verification',
      text: `Your OTP is ${otp}`,
      html:'<h1>I Love You</h1>'
    };

    try {
      console.log("Sending email to:", email);
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: " + info.response);
    } catch (error) {
      console.error("Error sending email: ", error);
    }
  };

  const executeFunction = async (data: any) => {
    console.log("Executing function with data:", data);

    const responceFromRegisterNewUser = await RegisterNewUserRepo.postExist(data);

    console.log("Response from repository:", responceFromRegisterNewUser);

    if (responceFromRegisterNewUser.status === true) {
      const email: string = responceFromRegisterNewUser.data?.email;
      console.log("Extracted email:", email);

      if (!email) {
        console.error("Email is undefined or null.");
        return {
          message: 'Failed to extract email',
          Data: responceFromRegisterNewUser,
        };
      }
      
      const otp: string = generateOTP();

      console.log("Generated OTP:", otp);

      await sendOtpEmail(email, otp);

      // You might want to store the OTP in the database for later verification
      await RegisterNewUserRepo.storeOtp(email, otp); // Implement this function in your repository

      return {
        message: 'OTP sent to email',
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

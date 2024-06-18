import { User } from "../../Database";

export default {
  postExist: async (data: any) => {
    

    const loginUser = await User.findOne({ email: data.email });

    if (loginUser) {
      return { status: true, Data: loginUser };
    } else {
      return { status: false };
    }
  },
};

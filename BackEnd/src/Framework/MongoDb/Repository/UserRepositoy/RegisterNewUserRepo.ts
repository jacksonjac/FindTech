import { User } from "../../Database";

export default {
  postExist: async (data: any) => {
    const createUser = await User.create({
      name: data.name,
      email: data.email,
      district: data.district,
      phone: data.phone,
      password: data.password,
    });

    if (createUser) {
      return { status: true, data: createUser };
    } else {
      return { status: false };
    }
  },
};

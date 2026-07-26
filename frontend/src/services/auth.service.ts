import api from "./api";


interface LoginPayload {
  email: string;
  password: string;
}


interface RegisterPayload {
  full_name: string;
  email: string;
  password: string;
}


export const authService = {


  register: async (
    data: RegisterPayload
  ) => {

    console.log("REGISTER PAYLOAD:", data);

    const response = await api.post(
      "/auth/register",
      data
    );

    return response.data;
  },


  login: async (
    data: LoginPayload
  ) => {

    console.log("LOGIN PAYLOAD:", data);

    const response = await api.post(
      "/auth/login",
      data
    );

    return response.data;
  },


};
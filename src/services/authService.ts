import { error } from "console";
import api from "./api";

interface RegisterParams {
    firstName: string;
    lastName: string;
    phone: string;
    birth: string;
    email: string;
    password: string;
}

interface LoginParams {
    email: string;
    password: string;
}

const authService = {
    register: async (params: RegisterParams) => {
        const res = await api.post("/auth/register", params).catch((error)=>{
            if(error.response.status === 400){
                return error.response;
            }

            return error;
        });

        return res;
    },

    login: async (params: LoginParams) => {
        const res = await api.post("/auth/login", params).catch((error)=>{
            if(error.response.status === 400 || error.response.status === 401) {
                return error.response
            }

            return error;
        });

        if(res.status === 200){
            sessionStorage.setItem("onebitflix-token", res.data.token)
        }

        return res;
    },
}

export default authService;
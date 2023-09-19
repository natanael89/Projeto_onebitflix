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

const authService = {
    register: async (params: RegisterParams) => {
        const res = await api.post("/auth/register", params).catch((error)=>{
            if(error.response.status === 400){
                return error.response;
            }

            return error;
        });

        return res;
    }
}

export default authService;
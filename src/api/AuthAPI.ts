
import api from '@/lib/axios';
import { isAxiosError } from 'axios';
import { countriesSchema } from "@/types/country";
import { UserCompanyRegisterForm } from '@/types/user';

export async function Auth(){
    try {
        const {data} = await api.post("/auth");
        const response = countriesSchema.safeParse(data);
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        } 
    }
}

export async function RegisterUserCompanyAccount(formData: UserCompanyRegisterForm){
    try {
        const { data } = await api.post<string>("/UserCompany/create-account",formData);
        return data;
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data);
        } 
    }
}
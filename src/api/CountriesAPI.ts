
import api from '@/lib/axios';
import { isAxiosError } from 'axios';
import { countriesSchema } from "@/types/country";

export async function GetCountries(){
    try {
        
        const {data} = await api("/countries");
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
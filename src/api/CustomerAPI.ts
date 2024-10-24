import { CustomerFormData, customerSchema, customersSchema } from "@/types/customer";
import api from '@/lib/axios';
import { isAxiosError } from 'axios';

export async function GetCustomers(){
    try {
        
        const {data} = await api("/customer");
        const response = customersSchema.safeParse(data);
        if(response.success){
            return response.data
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            throw new Error(error.response.data.error);
        } 
    }
}

export async function AddCustomer(formData : CustomerFormData){
    try {
        const { data } = await api.post<typeof customerSchema>("/customer",formData);
        const response = customerSchema.safeParse(data);
        if(response.success){
            return response.data;
        }
    } catch (error) {
        if(isAxiosError(error) && error.response){
            console.log(error.response)
            throw new Error(error.response.data);
        }
    }
}
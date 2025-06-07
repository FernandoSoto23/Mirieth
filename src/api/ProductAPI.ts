import { CustomerFormData, customerSchema} from "@/types/customer";
import api from '@/lib/axios';
import { isAxiosError } from 'axios';
import { productsSchema } from "@/types/product";
import dataProducts from "@/test/test1.json";

export async function GetProducts() {
    try {
        /* const { data } = await api("/products"); */
        const response = productsSchema.safeParse(dataProducts);
        console.log(response.error)
        if (response.success) {
            return response.data
        }
        /*         const {data} = await api("/customer");
                const response = customersSchema.safeParse(data);
                if(response.success){
                    return response.data
                } */
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error);
        }
    }
}

export async function AddProduct(formData: CustomerFormData) {
    try {
        const { data } = await api.post<typeof customerSchema>("/customer", formData);
        const response = customerSchema.safeParse(data);
        if (response.success) {
            return response.data;
        }
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            console.log(error.response)
            throw new Error(error.response.data);
        }
    }
}
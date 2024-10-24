import { z } from "zod";

export const customerSchema = z.object({
    id: z.number(),
    name : z.string(),
    email: z.string().email(),
    phone: z.string(),
    countryId : z.string(),
    gender : z.string(),
    birthdate : z.string(),
    svg : z.string(),
    membership : z.number(),
    status : z.number()
})
export const customersSchema = z.array(
    customerSchema.pick({
        id : true,
        name : true,
        email: true,
        phone: true,
        countryId : true,
        gender : true,
        birthdate : true,
        svg: true,
        membership : true,
        status : true
        
    })
);
export type Customer = z.infer<typeof customerSchema>;

export type CustomerFormData = Pick<Customer, "id"| "name" | "email" | "birthdate" |"gender" | "phone" | "membership" | "countryId" >;


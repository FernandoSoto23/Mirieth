import { z } from 'zod';

const authSchema = z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string(),
    password: z.string(),
    passwordConfirm: z.string(),
    companyId: z.string(),
    branchesId: z.string(),
    lisense: z.string(),
    admin: z.boolean(),
    status: z.number(),
    token: z.string()
});

export type Auth = z.infer<typeof authSchema>;

export const userSchema = authSchema.pick({
    username: true,
    password : true,
});
export const userCompanyRegister = authSchema.pick({
    name: true,
    username : true,
    email:true,
    password: true,
    passwordConfirm: true,
})
export type UserLoginForm = z.infer<typeof userSchema>;

export type UserCompanyRegisterForm = z.infer<typeof userCompanyRegister>;


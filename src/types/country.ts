import { z } from 'zod';

const countrySchema = z.object({
    id : z.string(),
    name : z.string(),
    svg : z.string()
});

export const countriesSchema = z.array(
    countrySchema.pick({
        id: true,
        name : true
    })
);

export type Country = z.infer<typeof countrySchema>;
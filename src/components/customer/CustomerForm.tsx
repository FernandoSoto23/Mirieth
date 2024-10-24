
import ErrorMessage from "../Tools/ErrorMessage";

import { FieldErrors, UseFormRegister } from "react-hook-form"
import { useQuery } from "@tanstack/react-query";
import { CustomerFormData } from "../../types/customer";
import "react-datepicker/dist/react-datepicker.css";
import { GetCountries } from "@/api/CountriesAPI";
type CustomerFormProps = {
    errors: FieldErrors<CustomerFormData>;
    register: UseFormRegister<CustomerFormData>;
}
export default function CustomerForm({ register, errors }: CustomerFormProps) {

    const { data, isLoading } = useQuery({
        queryKey: ["countriesList"],
        queryFn: GetCountries
    });
    if (isLoading) return "cargando..."
    if (data) return (
        <>
            <div className="flex flex-col gap-5">

                <label
                    className="font-normal text-2xl"
                    htmlFor="name"
                >Nombre:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nombre de nuevo cliente"
                    className="w-full border p-3 border-gray-300"
                    {...register("name", {
                        required: "El nombre del cliente es obligatorio"
                    })}
                />
                {errors.name &&
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                }

                <label
                    htmlFor="email"
                    className="font-normal text-2xl"
                >Correo Electronico:</label>
                <input
                    id="email"
                    type="text"
                    className="w-full border p-3 border-gray-300"
                    placeholder="Correo electronico del cliente"
                    {...register("email")}
                />
                {errors.email &&
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                }

                <label
                    htmlFor="phone"
                    className="font-normal text-2xl"

                >Numero de telefono:</label>
                <input
                    id="phone"
                    type="text"
                    className="w-full border p-3 border-gray-300"
                    placeholder="Ingrese su numero de telefono"
                    {...register("phone", {
                        pattern: {
                            value: /^[0-9]{10,15}$/, 
                            message: "El teléfono solo debe contener entre 10 y 15 dígitos numéricos"
                        }
                    })}

                />
                {errors.phone &&
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                }

                <label
                    htmlFor="birthdate"
                    className="font-normal text-2xl"
                >Fecha de nacimiento:</label>
                <input
                    id="birthdate"
                    type="date"
                    className="w-full border p-3 border-gray-300"
                    {...register("birthdate",{
                        required : "La fecha de nacimiento es obligatoria"
                    })}
                />

                <label
                    htmlFor="gender"
                    className="font-normal text-2xl"
                >Genero:</label>
                <select
                    id="gender"
                    className="w-full border p-3 border-gray-300"
                    {...register("gender", {
                        required: "Selecciona una opcion"

                    })}
                    defaultValue={""}
                >
                    <option value={""}>-- Selecciona una opcion --</option>
                    <option value={"Male"}>Masculino</option>
                    <option value={"Famale"}>Femenino</option>
                    <option value={"Other"}>Otro</option>
                </select>
                <label
                    htmlFor="countryId"
                    className="font-normal text-2xl"
                >Pais:</label>
                <select
                    id="countryId"
                    className="w-full border p-3 border-gray-300"
                    defaultValue={"MEX"}
                    {...register("countryId")}
                >
                    {data && data.map((country) => (
                        <option key={country.id} value={country.id} >{country.id} - {country.name}</option>
                    ))}
                </select>
                <label
                    className="font-normal text-2xl"
                >Membresia:</label>
                <select
                    id="membership"
                    className="w-full border p-3 border-gray-300"
                    {...register("membership", {
                        required: "Seleccione un estado"
                    })}
                    defaultValue={0}
                >
                    <option value={0}>No</option>
                    <option value={1}>Si</option>

                </select>
            </div>

        </>

    )
}

import ErrorMessage from "@/components/Tools/ErrorMessage";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { UserCompanyRegisterForm } from "@/types/user";
import { Auth } from "@/api/AuthAPI";


export default function RegisterAccount() {
    const { mutate } = useMutation({
        mutationFn: Auth,
        onError: () => {
            
        },
        onSuccess: () => {

        }
    })
    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: ""

    }
    const { register, handleSubmit, formState: { errors } } = useForm<UserCompanyRegisterForm>({ defaultValues: initialValues });

    const handleSubmitRegister = (formData: UserCompanyRegisterForm) => {
        console.log(formData)
    }
    return (
        <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit(handleSubmitRegister)}
        >
            <h1
                className="text-6xl font-extrabold text-white"
            >Crea una <span className="text-amber-300">Cuenta</span></h1>
            <p className="text-white text-2xl m-3">Para <span className="text-amber-300 font-bold">gestionar</span> tus sucursales <span className="text-amber-300 font-bold">disponibles</span></p>
            <div className="p-5 bg-gray-700 min-w-96 flex flex-col items-center justify-center rounded-xl shadow-2xl">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="text-4xl font-outfit font-extrabold text-white ml-2">
                        Gym
                        <span className="text-amber-300">
                            App
                        </span>
                    </h1>
                </a>
                <div className="flex flex-col p-5 w-full gap-2">
                    <input
                        id="name"
                        type="text"
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre Completo"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                    {errors.name &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    }

                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre de Usuario"
                        {...register("username", {
                            required: "El nombre de usuario es obligatorio"
                        })}
                    />
                    {errors.username &&
                        <ErrorMessage>{errors.username?.message}</ErrorMessage>
                    }

                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre Completo"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                   {/*  {errors.use &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    } */}

                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre Completo"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                  {/*   {errors.user &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    } */}

                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre Completo"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                    {/* {errors.user &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    } */}

                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Nombre Completo"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                    {/* {errors.user &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    } */}
                    <input
                        type="password"
                        className="p-3 rounded-sm  border-"
                        placeholder="Contraseña"
                        {...register("password", {
                            required: "La contraseña es requerida"
                        })}
                    />
                    {errors.password &&
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    }
                    <button
                        type="submit"
                        className="bg-amber-400 hover:bg-amber-500 p-3 rounded-sm"
                    >Iniciar Sesion</button>
                    <button
                        className="text-white hover:text-amber-400"
                    >¿Has olvidado tu contraseña?</button>

                    <p
                        className="text-white text-center "
                    >¿No tienes cuenta? <span className="text-amber-300 hover:text-amber-400 cursor-pointer font-bold">Crea una </span></p>

                    <p
                        className="text-2xl font-bold text-amber-300 hover:text-amber-400 cursor-pointer"
                    >Conoce nuestros planes de servicios</p>
                </div>

            </div>
        </form>
    )
}

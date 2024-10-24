import ErrorMessage from "@/components/Tools/ErrorMessage";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { UserCompanyRegisterForm } from "@/types/user";
import { Auth, RegisterUserCompanyAccount } from "@/api/AuthAPI";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function RegisterUserCompany() {
    const navigate = useNavigate();
    let email = "";
    const { mutate } = useMutation({
        mutationFn: RegisterUserCompanyAccount,
        onError: (error) => {
            toast.error(error.message);
        },
        onSuccess: ( data ) => {
            navigate(`/auth/confirm-account?email=${email}`);
            toast.success(data);
        }
    })
    const initialValues = {
        name: "",
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    }
    const { register, handleSubmit, formState: { errors } } = useForm<UserCompanyRegisterForm>({ defaultValues: initialValues });

    const handleSubmitLogin = (formData: UserCompanyRegisterForm) => {
        email = formData.email;
        mutate(formData);
    }

    const handleConfirmAccountLink = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault();

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                navigate("/auth/confirm-account");
            })
        } else {
            navigate("/confirm-account");
        }
    }
    return (
        <form
            className="flex flex-col items-center justify-center"
            onSubmit={handleSubmit(handleSubmitLogin)}
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
                    <label className="text-white text-xl">Nombre: </label>
                    <input
                        id="name"
                        type="text"
                        className="p-3 rounded-sm border-"
                        placeholder="Ej. Juan Perez"
                        {...register("name", {
                            required: "El nombre es obligatorio"
                        })}
                    />
                    {errors.name &&
                        <ErrorMessage>{errors.name?.message}</ErrorMessage>
                    }
                    <label className="text-white text-xl">Nombre de usuario: </label>
                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Ej. JuanP"
                        {...register("username", {
                            required: "El nombre de usuario es obligatorio"
                        })}
                    />
                    {errors.username &&
                        <ErrorMessage>{errors.username?.message}</ErrorMessage>
                    }
                    <label className="text-white text-xl">Correo Electronico: </label>
                    <input
                        type="email"
                        className="p-3 rounded-sm border-"
                        placeholder="gymapp@gymapp.com"
                        {...register("email", {
                            required: "El email es obligatorio"
                        })}
                    />
                    {errors.email &&
                        <ErrorMessage>{errors.email?.message}</ErrorMessage>
                    }
                    <label className="text-white text-xl">Contraseña: </label>
                    <input
                        type="password"
                        className="p-3 rounded-sm border-"
                        placeholder="Ej. JFp123#23"
                        {...register("password", {
                            required: "La contraseña es obligatorio"
                        })}
                    />
                    {errors.password &&
                        <ErrorMessage>{errors.password?.message}</ErrorMessage>
                    }
                    <label className="text-white">Confirmar Contraseña: </label>
                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Ej. JFp123#23"
                        {...register("passwordConfirm", {
                            required: "Confirma la contraseña para continuar"
                        })}
                    />
                    {errors.passwordConfirm &&
                        <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
                    }

                    <button
                        type="submit"
                        className="bg-amber-400 hover:bg-amber-500 p-3 rounded-sm"
                    >Iniciar Sesion</button>

                    <p
                        className="text-white text-center "
                    >¿Ya tienes cuenta? <span className="text-amber-300 hover:text-amber-400 cursor-pointer font-bold" onClick={handleConfirmAccountLink}>Activala </span></p>

                    <p
                        className="text-2xl font-bold text-amber-300 hover:text-amber-400 cursor-pointer"
                    >Conoce nuestros planes de servicios</p>
                </div>

            </div>
        </form>
    )
}

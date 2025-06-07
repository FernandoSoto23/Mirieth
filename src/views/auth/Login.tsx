import ErrorMessage from "@/components/Tools/ErrorMessage";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { UserLoginForm } from "@/types/user";
import { Auth } from "@/api/AuthAPI";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();
    const { mutate } = useMutation({
        mutationFn: Auth,
        onError: () => {
        },
        onSuccess: () => {

        }
    })
    const initialValues = {
        username: "",
        password: ""
    }
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

    const handleSubmitLogin = (formData: UserLoginForm) => {
        console.log(formData)
    }


    const handleCreateAccountLink = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> ) =>{
        e.preventDefault();
  
        if(document.startViewTransition){
            document.startViewTransition(()=>{
                navigate("/auth/register-user-company");
            })
        }else{
          navigate("/register-user-company");
        }
    }

    return (
        <form
            className="bg-gray-800 h-screen w-full flex flex-col items-center justify-center"
            onSubmit={handleSubmit(handleSubmitLogin)}
        >
            <h1
                className="text-6xl font-extrabold text-white"
            >Inicia <span className="text-blue-200">Sesion</span></h1>
            <p className="text-white text-2xl m-3">Para <span className="text-blue-200 font-bold">gestionar</span> tus productos <span className="text-blue-200 font-bold">disponibles</span></p>
            <div className="p-5 bg-gray-700 min-w-96 flex flex-col items-center justify-center rounded-xl shadow-2xl">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <h1 className="text-4xl font-outfit font-extrabold text-white ml-2">
                        Miri
                        <span className="text-blue-200">
                            Eth
                        </span>
                    </h1>
                </a>
                <div className="flex flex-col p-5 w-full gap-2">
                    <input
                        className="p-3 rounded-sm border-"
                        placeholder="Usuario"
                        {...register("username", {
                            required: "El usuario es requerido"
                        })}
                    />
                    {errors.username &&
                        <ErrorMessage>{errors.username?.message}</ErrorMessage>
                    }
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
                        className="bg-blue-300 hover:bg-blue-500 p-3 rounded-sm  font-bold"
                    >Iniciar Sesion</button>
{/*                     <button
                        className="text-white hover:text-amber-400"
                    >¿Has olvidado tu contraseña?</button>

                    <p
                        className="text-white text-center "
                    >¿No tienes cuenta? <span className="text-blue-200 hover:text-amber-400 cursor-pointer font-bold" onClick={handleCreateAccountLink}>Crea una </span></p>

                    <p
                        className="text-2xl font-bold text-blue-200 hover:text-amber-400 cursor-pointer"
                    >Conoce nuestros planes de servicios</p> */}
                </div>

            </div>
        </form>
    )
}

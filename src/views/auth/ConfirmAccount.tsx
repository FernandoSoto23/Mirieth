import ErrorMessage from "@/components/Tools/ErrorMessage";

import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  PinInput,
  PinInputField,
  usePinInput,
  usePinInputField,
} from "@chakra-ui/pin-input"

import { UserCompanyRegisterForm } from "@/types/user";
import { Auth } from "@/api/AuthAPI";


export default function ConfirmAccount() {
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
    passwordConfirm: "",
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues });

  const handleSubmitLogin = (formData: UserCompanyRegisterForm) => {
    console.log(formData)
  }
  return (
    <form
      className="flex flex-col items-center justify-center h-screen"
      onSubmit={handleSubmit(handleSubmitLogin)}
    >
      <h1
        className="text-6xl font-extrabold text-white"
      >Ingresa el <span className="text-amber-300">Codigo</span> de Verificacion</h1>
      <p className="text-white text-2xl m-3">Para <span className="text-amber-300 font-bold">Activar</span> tu cuenta <span className="text-amber-300 font-bold">disponibles</span></p>
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
          <label className="font-normal text-2xl text-center block text-white">Codigo: </label>
          <div className="flex justify-center gap-5">
            <PinInput>
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white font-bold" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white font-bold" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white font-bold" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white font-bold" />
              <PinInputField className="w-10 h-10 p-3 rounded-lg border-gray-300 border placeholder-white font-bold" />
            </PinInput>
          </div>

          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 p-3 rounded-sm"
          >Verificar Codigo</button>

          <p
            className="text-white text-center "
          >¿Ya tienes cuenta? <span className="text-amber-300 hover:text-amber-400 cursor-pointer font-bold">Activala </span></p>

          <p
            className="text-2xl font-bold text-amber-300 hover:text-amber-400 cursor-pointer"
          >Conoce nuestros planes de servicios</p>
        </div>

      </div>
    </form>
  )
}

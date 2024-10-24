import { Customer } from "@/types/customer"
import EditButton from "../buttonsCrud/EditButton";
import DeleteButton from "../buttonsCrud/DeleteButton";
import { AgeCalculate } from "@/utils/index";
import { useNavigate } from "react-router-dom";
type CustomerCardProps = {
  customer: Customer;
}

export default function CustomerCard({ customer }: CustomerCardProps) {
  const navigate = useNavigate();
  return (
    <div className=' md:h-auto md:w-60 rounded-lg shadow-xl flex md:flex-col transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-105 hover:bg-amber-100 duration-300 cursor-pointer mt-3'>
      <div className='p-3 flex items-center justify-center'>
        <img className='bg-blue-500 h-28 w-28 rounded-full' src='https://media.istockphoto.com/id/1300845620/es/vector/icono-de-usuario-plano-aislado-sobre-fondo-blanco-s%C3%ADmbolo-de-usuario-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=grBa1KTwfoWBOqu1n0ewyRXQnx59bNHtHjvbsFc82gk=' />
      </div>

      <div className='p-3'>
        <p className='font-extrabold'>{customer.name}</p>
        <div className='flex md:flex-col md:items-start items-center gap-2 md:gap-0'>
          <p>Edad <span className='text-green-500 font-extrabold'>{AgeCalculate(customer.birthdate)}</span></p>
          <div className='flex items-center gap-2'>
            <p>Pais</p>
            <div
              dangerouslySetInnerHTML={{ __html: customer.svg }}
              // Opcionalmente, puedes agregar un estilo para el contenedor del SVG si es necesario
              className="svg-container"
            />
          </div>
        </div>



        <p>Genero <span className={` font-extrabold ${customer.gender === "Male" ? "text-blue-500" : "text-pink-500"}`}>{customer.gender === "Male" ? "Hombre" : "Mujer"}</span></p>
        <p>Number: <span>{customer.phone}</span></p>
        <p>Miembro: <span className={` p-1 rounded-lg font-extrabold ${customer.membership === 1 ? "text-amber-400" : "text-red-400"}`}>{customer.membership === 1 ? "Activo" : "Inactivo"}</span></p>
        <div className="flex gap-2 items-center justify-center mt-4">
          <EditButton onClick={() => navigate(location.pathname + `?${customer.id}`)}>Editar</EditButton>
          <DeleteButton onClick={() => { }} >Eliminar</DeleteButton>
        </div>
      </div>

    </div>
  )
}

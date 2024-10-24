import { Fragment } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from 'react-toastify';

import CustomerForm from './CustomerForm';
import { CustomerFormData } from '../../types/customer';
import { AddCustomer } from '@/api/CustomerAPI';

export default function AddCustomerModal() {
    const navigate = useNavigate();
    /* const queryClient = useQueryClient(); */
    //Leer SI modal Existe
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const modalTask = queryParams.get("newCustomer");


    const show = modalTask ? true : false

    //Obtener ProjectID
    /* const params = useParams(); */
    /* const projectId = params.projectId!; */
    /*     const initialValues : TaskFormData = {
            name: "",
            description: ""
        } */
    const initialValues : CustomerFormData = {
        id : 0 ,
        name : "",
        email : "",
        phone : "",
        birthdate : "2000-12-23",
        gender : "",
        countryId : "MEX",
        membership : 0
    }
    const { register, handleSubmit, reset, formState: { errors }} = useForm({ defaultValues : initialValues });

    const queryClient = useQueryClient();


        const { mutate } = useMutation({
            mutationFn: AddCustomer,
            onError : ( error )=>{
                toast.error(error.message);
            },
            onSuccess : ( data ) => {
                toast.success( `El cliente ${data?.name} fue registrado con exito` );
                queryClient.invalidateQueries({queryKey: ["customers"]})
                navigate(location.pathname, { replace:true});
                reset();
            }
        });
    /*     const handleCreateTask = (formData: TaskFormData)=>{
            const data = {
                formData,
                projectId
            }
            mutate(data)
        } */
    const handleCreateCustomer = (formData: CustomerFormData) =>{
        mutate(formData);
    }
    return (
        <>
            <Transition appear show={show} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => navigate(location.pathname, { replace: true })}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/60" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all p-16">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-black text-4xl  my-5"
                                    >
                                        Nuevo Cliente
                                    </Dialog.Title>

                                    <p className="text-xl font-bold">Llena el formulario y crea  {''}
                                        <span className="text-amber-600">un nuevo cliente</span>
                                    </p>
                                    <form
                                        className="mt-10 space-y-3"
                                        noValidate
                                        onSubmit={handleSubmit(handleCreateCustomer)}

                                    >
                                        <CustomerForm 
                                            register={register} 
                                            errors={errors} 
                                        />
                                        <input
                                            type='submit'
                                            className='bg-amber-400 hover:bg-amber-600 w-full cursor-pointer p-3 text-2xl font-bold'
                                            value={"Añadir Cliente"}
                                        />
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
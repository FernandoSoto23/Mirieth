
import AddButton from "../../components/buttonsCrud/AddButton";
import HeaderTitle from "../../components/HeaderTitle";
import PanelContent from "../../components/PanelContent";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddCustomerModal from "../../components/customer/AddCustomerModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/products/ProductCard";
import { GetProducts } from "@/api/ProductAPI";
import OrderModal from "@/components/products/OrderProducts";
export const HomeView = () => {
    const [isAdmin] = useState();
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const pedidoId = searchParams.get("pedido");

    /* const [isOrderModalOpen, setIsOrderModalOpen] = useState(false); */

    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: GetProducts
    });
    const selectedProduct = data?.find(p => p.id === Number(pedidoId)) || null;

    const closeModal = () => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete("pedido");
        navigate({ search: newParams.toString() }, { replace: true });
    };


    if (isLoading) return "cargando..."
    return (
        <PanelContent>
            <HeaderTitle>
                Productos
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
            </HeaderTitle>

            <div className="mt-5">
                {isAdmin &&
                    <AddButton onClick={() => navigate(location.pathname + "?newCustomer=true")}>
                        Añadir Cliente
                    </AddButton>

                }

                {data &&
                    <div className="md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center justify-center gap-8">
                        {data.map((product) => (
                            <div
                                className="flex justify-center cursor-pointer"
                                key={product.id}
                                onClick={() => {
                                    const newParams = new URLSearchParams(searchParams);
                                    newParams.set("pedido", product.id.toString());
                                    navigate({ search: newParams.toString() }, { replace: true });
                                }}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                }

            </div>

            <OrderModal
                isOpen={!!pedidoId && !!selectedProduct}
                onClose={closeModal}
                product={selectedProduct}
            />

            <AddCustomerModal />
        </PanelContent>
    );
}
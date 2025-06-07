// components/customer/OrderModal.tsx
import { Product } from "@/types/product";
import { Dialog } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";

interface OrderModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
    // Estado para controlar la imagen actual que se muestra
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Si cambia el producto, reiniciamos el índice a 0
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [product]);

    const sendWhatsAppOrder = (product: Product) => {
        const phone = "5216682519966"; // Código país 52 + número sin espacios ni símbolos
        const message =
            `🛒 *Nuevo pedido* 🛒

📦 Producto: ${product.name}
💵 Precio: $${product.price.toFixed(2)} MXN
🏷 SKU: ${product.sku}
📷 Imagen: ${product.image ? product.image : "No disponible"}

¿Está disponible?`;

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    // Array de imágenes para mostrar, preferimos product.images o fallback a [product.image]
    const images = product?.images && product.images.length > 0 ? product.images : product?.image ? [product.image] : [];

    const handlePrevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    if (!product) return null;

    return (
        <Dialog as={Fragment} open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <Dialog.Panel className="bg-white rounded-xl p-6 max-w-md w-full">
                    <Dialog.Title className="text-xl font-semibold mb-4">Detalle del Producto</Dialog.Title>

                    <div className="space-y-2">
                        <p><strong>Nombre:</strong> {product.name}</p>
                        <p><strong>Descripción:</strong> {product.description}</p>
                        <p><strong>Precio:</strong> ${product.price.toFixed(2)}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Código SKU:</strong> {product.sku}</p>
                    </div>

                    {/* Carrusel de imágenes */}
                    {images.length > 0 && (
                        <div className="mt-4 relative">
                            <img
                                src={images[currentImageIndex]}
                                alt={`${product.name} imagen ${currentImageIndex + 1}`}
                                className="w-full rounded-md"
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevImage}
                                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-r"
                                        aria-label="Imagen anterior"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={handleNextImage}
                                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-1 rounded-l"
                                        aria-label="Siguiente imagen"
                                    >
                                        ›
                                    </button>
                                </>
                            )}
                        </div>
                    )}


                    <div className="mt-6 flex justify-end space-x-2">
                        <button
                            className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>

                        <button
                            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition flex items-center"
                            onClick={() => sendWhatsAppOrder(product)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="24"
                                height="24"
                                viewBox="0 0 48 48"
                                className="mr-2"
                            >
                                <path
                                    fill="#fff"
                                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                                />
                                <path
                                    fill="#fff"
                                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                                />
                                <path
                                    fill="#cfd8dc"
                                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                                />
                                <path
                                    fill="#40c351"
                                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                                />
                                <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.69,1.185c0.922-0.089,2.989-1.22,3.413-2.396c0.423-1.176,0.423-2.186,0.296-2.396c-0.123-0.211-0.447-0.316-0.922-0.554c-0.47-0.237-2.779-1.34-3.209-1.491c-0.423-0.148-0.73-0.211-1.037,0.238c-0.31,0.446-1.193,1.49-1.464,1.796c-0.273,0.309-0.55,0.348-1.02,0.118c-0.47-0.237-1.981-0.728-3.777-2.33c-1.395-1.233-2.34-2.75-2.61-3.219c-0.273-0.445-0.029-0.686,0.206-0.922c0.211-0.211,0.47-0.55,0.7-0.825c0.237-0.279,0.316-0.47,0.473-0.782c0.148-0.309,0.074-0.554-0.037-0.785z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Pedir por WhatsApp
                        </button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}

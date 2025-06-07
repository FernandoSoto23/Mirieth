import { useState } from "react";
import { Product } from "@/types/product"; // Asegúrate que ahora image sea string[]
import { useNavigate } from "react-router-dom";
import ProductDetailsButton from "../buttonsCrud/ProductDetailsButton";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const [mainImageIndex, setMainImageIndex] = useState(0);

  // Aseguramos que product.image es array, sino un array vacío
  const images = Array.isArray(product.image) ? product.image : [];

  return (
    <div className='md:h-auto md:w-60 rounded-lg shadow-xl flex md:flex-col transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-105 hover:bg-amber-100 duration-300 cursor-pointer mt-3'>
      <div className='p-3 flex items-center justify-center'>
        <img
          className='bg-gray-200 h-28 w-28 rounded-full object-contain'
          src={images[mainImageIndex] || "https://via.placeholder.com/100"}
          alt={product.name}
        />
      </div>

      {/* Carrusel miniaturas */}
      <div className="flex gap-2 overflow-x-auto px-3">
        {images.length > 0 ? (
          images.map((imgUrl, idx) => (
            <img
              key={idx}
              className={`h-16 w-16 rounded object-contain cursor-pointer border-2 ${
                idx === mainImageIndex ? "border-amber-500" : "border-transparent"
              }`}
              src={imgUrl}
              alt={`${product.name} image ${idx + 1}`}
              onClick={() => setMainImageIndex(idx)}
            />
          ))
        ) : (
          <img
            className="h-16 w-16 rounded object-contain"
            src="https://via.placeholder.com/100"
            alt="placeholder"
          />
        )}
      </div>

      <div className='p-3'>
        <p className='font-extrabold'>{product.name}</p>
        <p>
          Precio:{" "}
          <span className='text-green-600 font-bold'>
            ${product.price.toFixed(2)}
          </span>
        </p>
        <p>
          Stock:{" "}
          <span
            className={
              product.stock > 0 ? "text-blue-600 font-semibold" : "text-red-500 font-semibold"
            }
          >
            {product.stock}
          </span>
        </p>
        <p>
          Categoría ID: <span>{product.categoryId}</span>
        </p>
        <p>
          SKU: <span className='font-mono text-sm'>{product.sku}</span>
        </p>
        <p>
          Estado:{" "}
          <span
            className={`font-bold ${
              product.status === "active" ? "text-amber-500" : "text-gray-400"
            }`}
          >
            {product.status}
          </span>
        </p>

        <div className="flex gap-2 items-center justify-center mt-4">
          <ProductDetailsButton onClick={() => navigate(location.pathname + `?${product.id}`)}>
            Ver mas ...
          </ProductDetailsButton>
          {/* <EditButton onClick={() => navigate(location.pathname + `?${product.id}`)}>Editar</EditButton>
          <DeleteButton onClick={() => { }}>Eliminar</DeleteButton> */}
        </div>
      </div>
    </div>
  );
}

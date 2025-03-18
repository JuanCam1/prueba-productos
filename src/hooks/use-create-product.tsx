import { useForm } from "react-hook-form";
import type { z } from "zod";
import { createSchema } from "@/schemas/schema-create";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ProductI } from "@/types/product-type";
import { generateId } from "@/libs/generate-id";
import useProducts from "./use-products";
import Swal from "sweetalert2";

const useCreateProduct = () => {
  const { addProduct } = useProducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(createSchema),
  });

  const onSubmit = (values: z.infer<typeof createSchema>) => {
    const newProduct: ProductI = {
      ...values,
      id: generateId(),
      dateCreated: new Date(),
    };

    console.log(newProduct);
    addProduct(newProduct);

    Swal.fire({
      icon: "success",
      title: "Producto creado!",
      text: "El producto ha sido creado exitosamente",
      timer: 2000,
      showConfirmButton: false,
    });

    reset();

  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors
  }
}
export default useCreateProduct
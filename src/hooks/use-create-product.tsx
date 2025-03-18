import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

import { createSchema } from "@/schemas/schema-create";
import type { ProductI } from "@/types/product-type";
import { generateId } from "@/libs/generate-id";
import useProducts from "./use-products";

const useCreateProduct = () => {
	const { addProduct } = useProducts();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(createSchema),
	});

	const onSubmit = (values: z.infer<typeof createSchema>) => {
		const newProduct: ProductI = {
			...values,
			id: generateId(),
			dateCreated: new Date(),
		};

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
		errors,
	};
};
export default useCreateProduct;

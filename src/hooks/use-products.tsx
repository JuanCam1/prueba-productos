import { use } from "react";
import { ProductProviderContext } from "@/context/products-provider";

const useProducts = () => {
	const context = use(ProductProviderContext);

	if (!context) {
		throw new Error("useProducts must be used within a ProductProvider");
	}

	return context;
};

export default useProducts;

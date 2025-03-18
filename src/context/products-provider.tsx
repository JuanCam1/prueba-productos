import {
	createContext,
	useEffect,
	useMemo,
	useState,
	type FC,
	type ReactNode,
} from "react";
import Swal from "sweetalert2";
import { listProducts } from "@/data/products-data";
import type { ProductI } from "@/types/product-type";

type ProductProviderProps = {
	children: ReactNode;
	storageKey: string;
};

type ProductProviderState = {
	products: ProductI[];
	addProduct: (products: ProductI) => void;
	removeProduct: (id: string) => void;
	initialProducts: () => void;
	clearProducts: () => void;
};

export const ProductProviderContext =
	createContext<ProductProviderState | null>(null);

const ProductProvider: FC<ProductProviderProps> = ({
	children,
	storageKey,
}) => {
	const [products, setProducts] = useState<ProductI[]>(() =>
		localStorage.getItem(storageKey)
			? JSON.parse(localStorage.getItem(storageKey) as string)
			: listProducts,
	);

	useEffect(() => {
		localStorage.setItem(storageKey, JSON.stringify(products));
	}, [products, storageKey]);

	const addProduct = (product: ProductI) => {
		setProducts((prevProducts) => {
			const exists = prevProducts.some((p) => p.code === product.code);

			if (exists) {
				Swal.fire({
					icon: "error",
					title: "Error!",
					text: "Código ya registrado",
					timer: 2000,
					showConfirmButton: false,
				});
				return prevProducts;
			}

			return [...prevProducts, product];
		});
	};

	const initialProducts = () => {
		setProducts(listProducts);
	};

	const removeProduct = (id: string) => {
		setProducts((prevProducts) =>
			prevProducts.filter((product) => product.id !== id),
		);
	};

	const clearProducts = () => {
		localStorage.removeItem(storageKey);
		setProducts([]);
	};

	const value = useMemo(
		() => ({
			products,
			addProduct,
			removeProduct,
			clearProducts,
			initialProducts,
		}),
		[products],
	);

	return (
		<ProductProviderContext value={value}>{children}</ProductProviderContext>
	);
};

export default ProductProvider;

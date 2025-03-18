import { listProducts } from "@/data/products-data";
import type { ProductI } from "@/types/product-type";
import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from "react";
import Swal from "sweetalert2";

type ProductProviderProps = {
  children: ReactNode;
  storageKey: string;
};

type ProductProviderState = {
  products: ProductI[];
  addProduct: (products: ProductI) => void;
  removeProduct: (id: string) => void;
  initialProducts: () => void;
  updateProduct: (id: string, product: ProductI) => void;
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
  }

  const removeProduct = (id: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  const updateProduct = (id: string, product: ProductI) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === id ? product : p)),
    );
  };

  const clearProducts = () => {
    setProducts(listProducts);
  };

  const value = useMemo(
    () => ({
      products,
      addProduct,
      removeProduct,
      updateProduct,
      clearProducts,
      initialProducts
    }),
    [products],
  );

  return (
    <ProductProviderContext value={value}>{children}</ProductProviderContext>
  );
};

export default ProductProvider;

import { useState, type ReactNode } from "react";
import Swal from "sweetalert2";
import { CircleChevronDown, CircleChevronUp } from "lucide-react";
import type { ProductI } from "@/types/product-type";
import useProducts from "./use-products";

type SortField = keyof ProductI | null;

const useListProduct = () => {
  const { products, removeProduct } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<ProductI | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const [sortField, setSortField] = useState<SortField>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof ProductI): void => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortField) return 0;

    let fieldA = a[sortField];
    let fieldB = b[sortField];

    if (sortField === "dateCreated") {
      fieldA = new Date(fieldA);
      fieldB = new Date(fieldB);
    }

    if (fieldA instanceof Date && fieldB instanceof Date) {
      return sortDirection === 'asc'
        ? fieldA.getTime() - fieldB.getTime()
        : fieldB.getTime() - fieldA.getTime();
    }

    if (typeof fieldA === 'string' && typeof fieldB === 'string') {
      return sortDirection === 'asc'
        ? fieldA.localeCompare(fieldB)
        : fieldB.localeCompare(fieldA);
    }

    if (typeof fieldA === 'number' && typeof fieldB === 'number') {
      return sortDirection === 'asc' ? fieldA - fieldB : fieldB - fieldA;
    }

    return 0;
  });

  const renderSortIndicator = (field: keyof ProductI): ReactNode => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <CircleChevronUp className="w-4 h-4" /> : <CircleChevronDown className="w-4 h-4" />;
  };

  const onRemoveProduct = (id: string) => {
    Swal.fire({
      title: "Eliminar producto",
      text: "¿Estás seguro de que quieres eliminar este producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si,eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeProduct(id);
        Swal.fire({
          title: "Eliminado!",
          text: "El producto ha sido eliminado exitosamente.",
          timer: 2000,
          showConfirmButton: false,
          icon: "success"
        });
      }
    });
  };

  const onOpenModal = (product: ProductI) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }

  const onCloseModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  }

  return {
    selectedProduct,
    isOpen,
    onOpenModal,
    onRemoveProduct,
    onCloseModal,
    handleSort,
    renderSortIndicator,
    sortField,
    sortedProducts
  }
}
export default useListProduct
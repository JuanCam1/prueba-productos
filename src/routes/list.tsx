import { createFileRoute } from "@tanstack/react-router";

import ModalProduct from "@/components/modal-product";
import Filter from "@/components/filter";
import useListProduct from "@/hooks/use-list-product";
import TableList from "@/sections/table-list";

export const Route = createFileRoute("/list")({
  component: ListComponent,
});

function ListComponent() {
  const {
    selectedProduct,
    isOpen,
    onOpenModal,
    onRemoveProduct,
    onCloseModal,
    handleSort,
    renderSortIndicator,
    sortField,
    sortedProducts,
    clearProducts,
    initialProducts,
  } = useListProduct();

  return (
    <div className="relative flex justify-center items-center max-sm:mt-56 w-full h-full">
      <div className="flex flex-col justify-center w-[1200px]">
        <Filter
          handleSort={handleSort}
          renderSortIndicator={renderSortIndicator}
          sortField={sortField}
        />

        <TableList
          sortedProducts={sortedProducts}
          onOpenModal={onOpenModal}
          onRemoveProduct={onRemoveProduct}
        />
      </div>
      {selectedProduct && isOpen && (
        <ModalProduct
          selected={selectedProduct}
          isOpen={isOpen}
          onClose={onCloseModal}
        />
      )}
      <div className="right-0 bottom-0 absolute flex flex-col gap-2">
        <button
          onClick={initialProducts}
          className="bg-blue-500 px-4 py-2 rounded-md text-white"
          type="button"
        >
          Llenar
        </button>
        <button
          onClick={clearProducts}
          className="bg-red-500 px-4 py-2 rounded-md text-white"
          type="button"
        >
          limpiar
        </button>
      </div>
    </div>
  );
}

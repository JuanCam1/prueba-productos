
import { createFileRoute } from "@tanstack/react-router";
import ModalProduct from "@/components/modal-product";
import useListProduct from "@/hooks/use-list-product";
import Filter from "@/components/filter";
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
    sortedProducts
  } = useListProduct();

  return (
    <div className="max-sm:mt-56 w-[1200px]">
      <div className="flex flex-col justify-center">
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
        {/* <pre>{JSON.stringify(sortedProducts, null, 2)}</pre> */}
      </div>
      {
        (selectedProduct && isOpen) && (
          <ModalProduct
            selected={selectedProduct}
            isOpen={isOpen}
            onClose={onCloseModal}
          />
        )
      }
    </div >
  )
}

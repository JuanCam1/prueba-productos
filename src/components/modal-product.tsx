import type { FC } from "react";
import type { ProductI } from "@/types/product-type";
import Modal from "./modal";
import { formatToYYYYMMDD } from "@/libs/formatter-string";

interface ModalProps {
  selected: ProductI;
  isOpen: boolean;
  onClose: () => void;
}

const ModalProduct: FC<ModalProps> = ({ selected, isOpen, onClose }) => {
  return (
    <Modal
      hasCloseBtn
      isOpen={isOpen}
      onClose={onClose}
      titulo="Detalle Producto"
      mostrarHeader
      posicionModal="center"
      padding="p-5"
      heighModal="h-auto max-md:h-screen"
      widthModal="w-auto lg:min-w-[500px] max-md:w-screen"
    >
      <div className="flex flex-col">
        <form className="shadow-sm mx-auto p-4 border border-zinc-300 rounded-md w-full">
          <h2 className="pb-2 border-b font-bold text-blue-700 max-sm:text-2xl text-3xl text-center capitalize tracking-tight">
            {selected.name}
          </h2>

          <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 mt-6">
            <div>
              <label htmlFor="code" className="block mb-2 font-semibold text-sm sm:text-base">
                Código
              </label>
              <input
                disabled
                defaultValue={selected.code}
                name="code"
                type="number"
                id="code"
                className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-sm sm:text-base">
                Nombre
              </label>
              <input
                disabled
                defaultValue={selected.name}
                name="name"
                type="text"
                id="name"
                className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 font-semibold text-sm sm:text-base">
                Descripción
              </label>
              <textarea
                disabled
                defaultValue={selected.description}
                name="description"
                rows={4}
                id="description"
                className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full disabled:text-black sm:text-sm transition-all duration-300 resize-none disabled:cursor-not-allowed"
                placeholder="Escribe una descripción..."
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block mb-2 font-semibold text-sm sm:text-base">
                Cantidad
              </label>
              <input
                disabled
                defaultValue={selected.quantity}
                min="1"
                name="quantity"
                type="number"
                id="quantity"
                className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="dateCreated" className="block mb-2 font-semibold text-sm sm:text-base">
                Fecha de creación
              </label>
              <input
                defaultValue={formatToYYYYMMDD(selected.dateCreated)}
                disabled
                name="dateCreated"
                type="date"
                id="dateCreated"
                className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalProduct;

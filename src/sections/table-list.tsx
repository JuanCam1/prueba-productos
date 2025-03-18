import type { FC } from "react";
import { Eye, Trash2 } from "lucide-react";
import type { ProductI } from "@/types/product-type";
import { formatterDate } from "@/libs/formatter-date.";

interface Props {
  sortedProducts: ProductI[];
  onOpenModal: (product: ProductI) => void;
  onRemoveProduct: (id: string) => void;

}
const TableList: FC<Props> = ({ sortedProducts, onOpenModal, onRemoveProduct }) => {
  return (
    <table className="border max-md:border-0 max-md:last:border-b-0 rounded-md w-full font-Montserrat border-collapse table-fixed">
      <thead className="max-md:hidden">
        <tr className="max-md:block max-md:mb-2 max-md:border-b-4">
          <th className="py-3 lg:w-[5%] text-[12px] text-center uppercase">
            Código
          </th>
          <th className="py-3 lg:w-[20%] text-[12px] text-center uppercase">
            Nombre
          </th>
          <th className="py-3 lg:w-[40%] text-[12px] text-center uppercase">
            Descripción
          </th>
          <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
            Cantidad
          </th>
          <th className="py-3 lg:w-[15%] text-[12px] text-center uppercase">
            Fecha de creación
          </th>
          <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
            Ver
          </th>
          <th className="py-3 lg:w-[10%] text-[12px] text-center uppercase">
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-[#e6e3e3] even:bg-[#f2f2f2] border border-gray-300"
              >
                <td
                  data-label="Código"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
                >
                  {product.code}
                </td>

                <td
                  data-label="Nombre"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-left max-md:text-right text-ellipsis capitalize whitespace-nowrap"
                >
                  {product.name}
                </td>

                <td
                  data-label="Descripción"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-left max-md:text-right text-ellipsis capitalize whitespace-nowrap"
                >
                  {product.description}
                </td>
                <td
                  data-label="Cantidad"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
                >
                  {product.quantity}
                </td>
                <td
                  data-label="Fecha"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
                >
                  {formatterDate(product.dateCreated)}
                </td>
                <td
                  data-label="Ver"
                  className="max-md:block p-2 max-md:border-b-[1px] overflow-hidden max-md:text-[12px] text-sm text-center max-md:text-right text-ellipsis whitespace-nowrap"
                >
                  <button
                    onClick={() => onOpenModal(product)}
                    type="button"
                    className="group hover:bg-blue-600 p-2 border-2 border-blue-600 rounded-md transition-all duration-300 ease-in-out"
                  >
                    <Eye
                      size={20}
                      className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </button>
                </td>

                <td
                  data-label="Eliminar"
                  className="max-md:block p-2 border-gray-600 max-md:border-b-[1px] max-md:text-[12px] text-sm text-center max-md:text-right"
                >
                  <button
                    onClick={() => onRemoveProduct(product.id)}
                    type="button"
                    className="group hover:bg-red-600 p-2 border-2 border-red-600 rounded-md transition-all duration-300 ease-in-out"
                  >
                    <Trash2
                      size={20}
                      className="text-red-600 group-hover:text-white transition-colors duration-300" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-6 py-4 text-gray-500 text-center">
                No hay productos disponibles
              </td>
            </tr>
          )}
      </tbody>
    </table>
  )
}
export default TableList
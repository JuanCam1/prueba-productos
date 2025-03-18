import type { FC } from "react";
import type { ProductI } from "@/types/product-type";

interface FilterProps {
  handleSort: (field: keyof ProductI) => void;
  renderSortIndicator: (field: keyof ProductI) => React.ReactNode;
  sortField: keyof ProductI | null;
}

const Filter: FC<FilterProps> = ({
  handleSort,
  renderSortIndicator,
  sortField,
}) => {
  return (
    <div className="flex flex-col justify-end items-end p-4 pt-0 rounded-md">
      <h3 className="sm:mr-4 mb-2 sm:mb-0 pt-3 lg:pb-2 w-full font-medium max-sm:text-center text-end">
        Ordenar por:
      </h3>
      <div className="flex max-sm:flex-col flex-wrap justify-end gap-2 w-full sm:w-auto">
        <button
          type="button"
          onClick={() => handleSort("code")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${sortField === "code" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Código {renderSortIndicator("code")}
        </button>
        <button
          type="button"
          onClick={() => handleSort("name")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${sortField === "name" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Nombre {renderSortIndicator("name")}
        </button>
        <button
          type="button"
          onClick={() => handleSort("quantity")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${sortField === "quantity" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Cantidad {renderSortIndicator("quantity")}
        </button>
        <button
          onClick={() => handleSort("dateCreated")}
          className={`px-3 py-1 rounded-md flex items-center gap-1 ${sortField === "dateCreated" ? "bg-indigo-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          type="button"
        >
          Fecha de Creación {renderSortIndicator("dateCreated")}
        </button>
      </div>
    </div>

  );
};
export default Filter;

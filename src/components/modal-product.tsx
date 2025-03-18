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
			hasCloseBtn={true}
			isOpen={isOpen}
			onClose={onClose}
			titulo="Detalle Producto"
			mostrarHeader={true}
			posicionModal="center"
			padding="p-5"
			heighModal="h-auto max-md:h-screen"
			widthModal="w-auto lg:min-w-[500px] max-md:w-screen"
		>
			<div className="flex flex-col">
				<form className="shadow-sm mx-auto p-6 border border-zinc-300 rounded-md w-[600px]">
					<h2 className="first:mt-0 pb-2 border-b font-bold text-blue-700 text-3xl text-center capitalize tracking-tight scroll-m-20">
						{selected.name}
					</h2>

					<div className="gap-6 grid grid-cols-2 max-sm:grid-cols-1 mt-6">
						<div className="max-w-sm">
							<label
								htmlFor="code"
								className="block mb-2 font-semibold text-black text-sm"
							>
								Código
							</label>
							<input
								disabled
								defaultValue={selected.code}
								name="code"
								type="number"
								id="code"
								className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
							/>
						</div>

						<div className="max-w-sm">
							<label
								htmlFor="name"
								className="block mb-2 font-semibold text-black text-sm"
							>
								Nombre
							</label>
							<input
								disabled
								defaultValue={selected.name}
								name="name"
								type="text"
								id="name"
								className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
							/>
						</div>

						<div className="col-span-2">
							<label
								htmlFor="description"
								className="block mb-2 font-semibold text-black text-sm"
							>
								Descripción
							</label>

							<textarea
								disabled
								defaultValue={selected.description}
								name="description"
								rows={5}
								id="description"
								className="bg-white shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 disabled:text-black sm:text-sm transition-all duration-300 resize-none disabled:cursor-not-allowed placeholder-gray-400"
								placeholder="Escribe una descripción..."
							/>
						</div>

						<div className="max-w-sm">
							<label
								htmlFor="quantity"
								className="block mb-2 font-semibold text-black text-sm"
							>
								Cantidad
							</label>
							<input
								disabled
								defaultValue={selected.quantity}
								min="1"
								name="quantity"
								type="number"
								id="quantity"
								className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
							/>
						</div>

						<div className="max-w-sm">
							<label
								htmlFor="dateCreated"
								className="block mb-2 font-semibold text-black text-sm"
							>
								Fecha de creación
							</label>
							<input
								defaultValue={formatToYYYYMMDD(selected.dateCreated)}
								disabled
								name="dateCreated"
								type="date"
								id="dateCreated"
								className="block bg-white shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 disabled:text-black sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
							/>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	);
};
export default ModalProduct;

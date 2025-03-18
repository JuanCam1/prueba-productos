import { createFileRoute } from "@tanstack/react-router";
import useCreateProduct from "@/hooks/use-create-product";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	const { onSubmit, register, handleSubmit, errors } = useCreateProduct();

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="shadow-sm mx-auto p-6 border border-zinc-300 rounded-md w-[600px]"
		>
			<h2 className="first:mt-0 pb-2 border-b font-bold text-blue-700 text-3xl text-center tracking-tight scroll-m-20">
				Crear producto
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
						min="1"
						{...register("code")}
						name="code"
						type="number"
						id="code"
						className="block bg-white disabled:opacity-50 shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
					/>
					<p className="text-[12px] text-red-500">{errors.code?.message}</p>
				</div>

				<div className="max-w-sm">
					<label
						htmlFor="quantity"
						className="block mb-2 font-semibold text-black text-sm"
					>
						Cantidad
					</label>
					<input
						min="1"
						{...register("quantity")}
						name="quantity"
						type="number"
						id="quantity"
						className="block bg-white disabled:opacity-50 shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
					/>
					<p className="text-[12px] text-red-500">{errors.quantity?.message}</p>
				</div>

				<div className="col-span-2">
					<label
						htmlFor="name"
						className="block mb-2 font-semibold text-black text-sm"
					>
						Nombre
					</label>
					<input
						{...register("name")}
						name="name"
						type="text"
						id="name"
						className="block bg-white disabled:opacity-50 shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
					/>
					<p className="text-[12px] text-red-500">{errors.name?.message}</p>
				</div>

				<div className="col-span-2">
					<label
						htmlFor="description"
						className="block mb-2 font-semibold text-black text-sm"
					>
						Descripción
					</label>

					<textarea
						{...register("description")}
						name="description"
						rows={5}
						id="description"
						className="bg-white disabled:opacity-50 shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 sm:text-sm transition-all duration-300 resize-none disabled:cursor-not-allowed placeholder-gray-400"
						placeholder="Escribe una descripción..."
					/>
					<p className="text-[12px] text-red-500">
						{errors.description?.message}
					</p>
				</div>

				{/* <div className="max-w-sm">
          <label
            htmlFor="dateCreated"
            className="block mb-2 font-semibold text-black text-sm"
          >
            Fecha de creación
          </label>
          <input
            {...register("dateCreated")}
            name="dateCreated"
            type="date"
            id="dateCreated"
            className="block bg-white disabled:opacity-50 shadow-sm px-4 py-2.5 border border-gray-300 focus:border-blue-500 rounded-lg outline-none focus:ring-2 focus:ring-blue-300 w-full text-gray-900 sm:text-sm transition-all duration-300 disabled:cursor-not-allowed placeholder-gray-400"
          />
          <p className="text-[12px] text-red-500">{errors.dateCreated?.message}</p>
        </div> */}
			</div>
			<div className="flex justify-center mt-6">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto font-medium text-white text-sm transition-colors duration-300 ease-in-out"
				>
					Agregar
				</button>
			</div>
		</form>
	);
}

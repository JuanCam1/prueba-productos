import Navbar from "@/components/navbar";
import ProductProvider from "@/context/products-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<ProductProvider storageKey="products-list">
			<div className="h-screen">
				<Navbar />
				<div className="flex justify-center items-center h-full">
					<Outlet />
				</div>
			</div>
		</ProductProvider>
	),
});

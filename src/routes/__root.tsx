import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/navbar";
import ProductProvider from "@/context/products-provider";

export const Route = createRootRoute({
  component: () => (
    <ProductProvider storageKey="products-list">
      <div className="flex flex-col gap-2 h-screen">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <Outlet />
        </div>
      </div>
    </ProductProvider>
  ),
});

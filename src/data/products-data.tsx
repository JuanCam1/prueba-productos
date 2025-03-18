import type { ProductI } from "@/types/product-type";

export const listProducts: ProductI[] = [
	{
		id: "1",
		code: 1001,
		name: "Monitor LED",
		description: "Monitor de 24 pulgadas Full HD",
		quantity: 15,
		dateCreated: new Date("2025-01-15"),
	},
	{
		id: "2",
		code: 1002,
		name: "Teclado Mecánico",
		description: "Teclado gaming RGB con switches Blue",
		quantity: 30,
		dateCreated: new Date("2025-02-20"),
	},
	{
		id: "3",
		code: 1003,
		name: "Mouse Inalámbrico",
		description: "Mouse ergonómico con sensor óptico de alta precisión",
		quantity: 25,
		dateCreated: new Date("2025-03-05"),
	},
	{
		id: "4",
		code: 1004,
		name: "Auriculares",
		description: "Auriculares con cancelación de quantity activa",
		quantity: 10,
		dateCreated: new Date("2025-03-10"),
	},
];

import { isBefore, parseISO, startOfDay } from "date-fns";
import { z } from "zod";

export const createSchema = z.object({
  code: z
    .string()
    .min(1, {
      message: "El código debe ser un número"
    })
    .transform((val) => Number(val))
    .refine((val) => !Number.isNaN(val) && val > 0, {
      message: "El código debe ser un número mayor que 0",
    }),

  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 caracteres" })
    .max(100, { message: "El nombre no puede tener más de 100 caracteres" }),

  description: z
    .string()
    .min(10, { message: "La descripción debe tener al menos 10 caracteres" })
    .max(500, {
      message: "La descripción no puede tener más de 500 caracteres",
    }),

  quantity: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !Number.isNaN(val) && val >= 1 && val <= 800, {
      message: "La cantidad debe ser un número entre 1 y 800",
    }),

  // dateCreated: z
  //   .string()
  //   .refine((val) => {
  //     const selectedDate = startOfDay(parseISO(val));
  //     const today = startOfDay(new Date());
  //     return !isBefore(selectedDate, today);
  //   }, {
  //     message: "La fecha no puede ser menor a la fecha actual",
  //   }),
});
import { format } from "date-fns"
import { es } from "date-fns/locale"

export const formatterDate = (date: Date) => {
  return format(date, "d 'de' MMMM 'de' yyyy", { locale: es })
}
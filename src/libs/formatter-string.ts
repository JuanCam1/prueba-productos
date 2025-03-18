import { format } from "date-fns";

export const formatToYYYYMMDD = (date: Date) => {
  return format(date, "yyyy-MM-dd");
};

import moment from "moment";
import { isValidDate } from "./moment.helper";
import { DateFormats } from "@/typings/types/moment.type";

type FormatDateOptions = {
  format: DateFormats;
  date: Date | string | number;
};

export const formatDate = ({ date, format }: FormatDateOptions) => {
  if (!isValidDate(date)) return;

  return moment(date).format(format);
};

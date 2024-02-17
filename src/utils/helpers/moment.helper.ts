import moment from "moment";

export const isValidDate = (date: Date | number | string) =>
  moment(date).isValid();

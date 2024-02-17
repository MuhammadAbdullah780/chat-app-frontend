/**
 * @desc This type has included all kind of date formats that moment library contains.
 *
 * @Examples
 * @ 1. HH:mm:ss is equivalent to `12:03:57`
 * @ 2. YYYY-MM is equivalent to `2023-09`
 * @ 3. MMM-YYYY is equivalent to `JAN-2023`
 * @ 4. HH:mm is equivalent to `12:57`
 * @ 5. HH:mm:ss aa is equivalent to `12:57:09 am` or `12:57:09 pm`
 * @ 6. HH:mm:ss aa is equivalent to `12:57:09 AM` or `12:57:09 PM`
 * @ 7. MMM D, YYYY is equivalent to `JAN 8,2023`
 * @ 8. MMMM D, YYYY is equivalent to `JANUARY 8,2023`
 * @ 9. YYYY-MM-DD is equivalent to `2023-09-25`
 */
export type DateFormats =
  | "HH:mm:ss"
  | "YYYY-MM"
  | "YYYY-MM-DD"
  | "MMM-YYYY"
  | "HH:mm"
  | "HH:mm:ss aa"
  | "HH:mm:ss AA"
  | "MMM D, YYYY"
  | "MMMM D, YYYY";

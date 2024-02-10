import { Poppins } from "next/font/google";

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export { fontPoppins };

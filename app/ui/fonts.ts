import { Poppins, Roboto, Lusitana } from "next/font/google";

export const poppins = Poppins({
	weight: ["400", "500", "600", "800"],
	style: "normal",
	subsets: ["latin-ext"],
});

export const roboto = Roboto({
	weight: ["400", "500", "700"],
	style: "normal",
	subsets: ["latin-ext"],
});

export const lusitana = Lusitana({
	weight: ["400", "700"],
	style: "normal",
	subsets: ["latin"],
});

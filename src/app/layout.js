import "./globals.css";
import { Cartprovider } from "./Components/lib/cartprovider";
import Script from "next/script";

export const metadata = {
  title: "BlossomKids",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="beforeInteractive" />
        <Cartprovider>
        {children}
        </Cartprovider>
      </body>
    </html>
  );
}

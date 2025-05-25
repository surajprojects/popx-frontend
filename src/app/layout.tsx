import { Poppins } from "next/font/google";
import "./globals.css";

import MobileView from "@/components/mobileView";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} font-poppins`}>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="w-full h-screen p-5 flex justify-center items-center">
            <MobileView>
              {children}
            </MobileView>
          </div>
        </main>
      </body>
    </html>
  );
};
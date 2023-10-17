import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import UserContextProivder from "@/context/UserContextProvider";
export const metadata = {
  title: "MedHub",
  description: "This is very useful for the needy people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserContextProivder>
          <Navbar />
          {children}
        </UserContextProivder>
      </body>
    </html>
  );
}

import "./globals.css";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";
import { Libre_Franklin } from "next/font/google";

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"],
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${libre.variable} bg-[#0d0d0d] flex items-center justify-center min-h-screen`}
      >

        {/* FIXED FRAME */}
        <div className="bg-[#1d1c1d] border border-[#757575] rounded-3xl 
w-[1525px] h-[895px] p-12 
grid grid-cols-[395px_1fr_110px] gap-10 shadow-2xl">
          
          <MyCard />

          {/* CONTENT AREA */}
          <div className="overflow-y-auto pr-4">
            {children}
          </div>

          <div className="flex items-center justify-center">
            <SideMenu />
          </div>

        </div>

      </body>
    </html>
  );
}
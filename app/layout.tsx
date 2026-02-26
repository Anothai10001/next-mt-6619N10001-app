import "./globals.css";
import SideMenu from "../components/SideMenu";

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ display: "flex" }}>
        <SideMenu />
        <div style={{ flex: 1, padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
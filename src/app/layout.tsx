import "./globals.css";
import Navbar from "./components/NavBar";
import { Footer } from "./components/AnimatedFooter";

export const metadata = {
  title: "TechMystry",
  description: "Tech Solutions for every platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Explicit viewport meta for all environments */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

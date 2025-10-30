import "./globals.css";
import SplashScreenWrapper from "./components/SplashScreenWrapper";
import Navbar from "./components/NavBar";
import AnimatedFooter from "./components/AnimatedFooter";

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
        <SplashScreenWrapper>
          <Navbar />
          {children}
          <AnimatedFooter />
        </SplashScreenWrapper>
      </body>
    </html>
  );
}

import { ActiveSectionContextProvider } from "@/context/active-section-context";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer";
import { ThemeSwitch } from "@/components/theme-switch";
import { ThemeContextProvider } from "@/context/theme-context";

export const metadata = {
  title: "Rose Le | Portfolio",
  description:
    "Hi, I'm Rose, and I am a full-stack software engineer/web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 ">
        <div className="bg-[#fecdd3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fb7185]/20"></div>
        <div className="bg-[#ffedd5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#f97316]/20"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}

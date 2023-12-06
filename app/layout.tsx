import { ActiveSectionContextProvider } from "@/context/active-section-context";
import "./globals.css";
import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/footer";
import { ThemeSwitch } from "@/components/theme-switch";

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
      <body className="bg-gray-50 text-gray-950 relative pt-28 sm:pt-36">
        <div className="bg-[#fecdd3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#ffedd5] absolute top-[-6rem] -z-10 left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>
        <ThemeSwitch />
      </body>
    </html>
  );
}

import { Inter } from 'next/font/google';
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/FrontEnd/Navbar/navbar";
import Footer from "@/components/FrontEnd/Footer/footer";
import ChatBot from "@/components/FrontEnd/chat-bot/chat-bot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alberow - Web Development & Marketing Agency",
  description: "Next-generation web development and marketing solutions for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <ChatBot />
            {/* <Toaster /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang='en' suppressHydrationWarning={true}>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <div className='w-[100vw] h-[100vh] overflow-hidden flex bg-[#ffffff] text-[#00000085]'>
                <div className='w-[23%] border-r-2 border-r-[#8080809a]'>
                  <Sidebar />
                </div>
                <div className='w-[77%] px-[8%] py-6 overflow-auto'>{children}</div>
              </div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}

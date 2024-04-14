import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { Providers } from "@/redux/provider";
import DrawerSidebar from "@/components/DrawerSidebar";

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
                <div className='w-[0%] invisible md:visible md:w-[23%] border-r-2 border-r-[#8080809a]'>
                  <Sidebar />
                </div>
                <div className='w-[100%] md:w-[77%] px-[2%] md:px-[4%] lg:px-[6%] xl:px-[8%] py-6 overflow-auto'>
                  <div className="mb-[4%] flex md:hidden fixed top-0 left-0 w-full shadow-md py-2 z-50 bg-white"><DrawerSidebar/></div>
                  <div className="mt-[40px] md:mt-0">
                    {children}
                  </div>
                  
                </div>
              </div>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}

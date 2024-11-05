// app/RootLayoutClient.js (client component)
"use client";

import { usePathname } from 'next/navigation';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function RootLayoutClient({ children }) {
  const pathname = usePathname();
  const isDashboard = ['/dashboard/admin', '/dashboard/manager', '/dashboard/user', '/register'].includes(pathname);
    
  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}

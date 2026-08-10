"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/_components/GlobalNavBar";
import Footer from "@/app/_components/GlobalFooter";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Checks if the route starts with /security or /cleaning
  // This handles: /security, /security/, /security/sub-page, etc.
  const shouldHideNavbarAndFooter =
    pathname.startsWith("/security") || pathname.startsWith("/cleaning")|| pathname.startsWith("/night-audit");
  const shouldHideNavbar=pathname.startsWith("/security") || pathname.startsWith("/cleaning")||pathname.startsWith("/admin")|| pathname.startsWith("/night-audit") ;

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <div
        className={
          shouldHideNavbarAndFooter
            ? "min-h-screen"
            : "min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        }
      >
        {children}
      </div>

      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}
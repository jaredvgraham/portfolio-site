// components/Analytics.tsx
"use client"; // This directive is necessary to make this a client component

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-RDBNB3Q3XS", {
          page_path: url,
        });
      }
    };

    // Log initial page load
    handleRouteChange(pathname);
  }, [pathname]);

  return null;
}

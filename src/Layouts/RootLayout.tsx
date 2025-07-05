// layouts/RootLayout.tsx
import React from "react";
import { Outlet, useParams } from "react-router-dom";

export const RootLayout = () => {
  const { lang } = useParams();
  const isArabic = lang === "ar";

  return (
    <div
      lang={lang}
      dir={isArabic ? "rtl" : "ltr"}
      className={`min-h-screen bg-gray-50 text-gray-900 ${
        isArabic ? "font-arabic" : "font-sans"
      }`}
    >
      <main className="max-w-4xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
};

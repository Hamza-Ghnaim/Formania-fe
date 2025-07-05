import { Navigate, Route, Routes } from "react-router-dom";
import { RootLayout } from "./Layouts/RootLayout";
import { HomeView } from "./views/Pages/HomeView";
import { LoginView } from "./views/Pages/LoginView";
import { RegistrationView } from "./views/Pages/RegistrationView";
import MyFormania from "./views/Pages/MyFormania";

// Language-prefixed routes
export function AppRoutes() {
  return (
    <Routes>
      {/* Redirect / → /ar */}
      <Route path="/" element={<Navigate to="/ar" replace />} />

      {/* All routes under /:lang */}
      <Route path="/:lang/*" element={<RootLayout />}>
        <Route index element={<HomeView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegistrationView />} />
        <Route path="my-formania" element={<MyFormania />} />
      </Route>
    </Routes>
  );
}

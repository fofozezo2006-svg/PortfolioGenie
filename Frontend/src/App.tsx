import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import MyPortfoliosPage from "./pages/MyPortfoliosPage";
import TemplateSelectionPage from "./pages/TemplateSelectionPage";
import PortfolioEditorPage from "./pages/PortfolioEditorPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import PublicPortfolioPage from "./pages/PublicPortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import VerifyResetCodePage from "./pages/VerifyResetCodePage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NavBar from "./components/NavBar";
function App() {

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/dashboard/portfolios"
            element={<MyPortfoliosPage />}
          />
          <Route
            path="/dashboard/portfolios/new"
            element={<TemplateSelectionPage />}
          />
          <Route
            path="/dashboard/portfolios/:id/edit"
            element={<PortfolioEditorPage />}
          />
          <Route
            path="/dashboard/settings"
            element={<AccountSettingsPage />}
          />
        </Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/verify-reset-code" element={<VerifyResetCodePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/portfolio/:slug" element={<PublicPortfolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </>
  )
}

export default App

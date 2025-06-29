import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { AuthModal } from "./components/AuthModel";
import { Dashboard } from "./components/Dashboard";
import { Footer } from "./components/Footer";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user, isAuthenticated, login, register, logout, isLoading } =
    useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleGetStarted = () => {
    if (isAuthenticated) {
      // Already logged in, scroll to dashboard or do nothing
      return;
    }
    setShowAuthModal(true);
  };

  const handleLogin = (email: string, password: string) => {
    login(email, password);
    setShowAuthModal(false);
  };

  const handleRegister = (
    name: string,
    email: string,
    password: string,
    location: string
  ) => {
    register(name, email, password, location);
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        user={user}
        onLoginClick={() => setShowAuthModal(true)}
        onLogout={logout}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {isAuthenticated ? (
        <Dashboard user={user!} searchQuery={searchQuery} />
      ) : (
        <>
          <Hero onGetStarted={handleGetStarted} />
          <Features />
        </>
      )}

      {!isAuthenticated && <Footer />}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;

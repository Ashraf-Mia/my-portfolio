import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => window.clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash]);

  return null;
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-float absolute -top-24 -left-24 h-112 w-md rounded-full bg-teal-500/20 blur-3xl dark:bg-teal-500/15" />
      <div className="animate-float-slow absolute top-1/3 -right-32 h-112 w-md rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/15" />
      <div className="animate-float absolute -bottom-32 left-1/4 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/10" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden">
      <Background />
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "./components/Nav";
import ModeToggle from "./components/ModeToggle";
import Home from "./pages/Home";
import DocForge from "./pages/DocForge";
import MachineView from "./components/MachineView";
import { useMode } from "./context/ModeContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { mode } = useMode();

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        {mode === "machine" ? (
          <MachineView />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docforge" element={<DocForge />} />
          </Routes>
        )}
      </main>
      <ModeToggle />
    </>
  );
}

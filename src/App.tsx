import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import TopNav from "./components/TopNav";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DevelopmentsPage from "./pages/DevelopmentsPage";
import HomePage from "./pages/HomePage";

const META_BY_PATH: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Argus Panoptes - Autonomous SAR",
    description:
      "Multi-drone autonomous search and rescue - built for the environments that matter.",
  },
  "/about": {
    title: "About - Argus Panoptes",
    description:
      "The team and motivation behind the Argus Panoptes autonomous SAR platform.",
  },
  "/developments": {
    title: "Developments - Argus Panoptes",
    description:
      "Development roadmap and phase status for the Argus Panoptes platform.",
  },
  "/contact": {
    title: "Contact - Argus Panoptes",
    description: "Contact the Argus Panoptes team.",
  },
};

function normalizePath(pathname: string): string {
  const path = pathname.toLowerCase().replace(/\/+$/, "") || "/";

  if (path === "/about") return "/about";
  if (path === "/developments") return "/developments";
  if (path === "/contact") return "/contact";

  return "/";
}

function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  );
}

function RoutedApp() {
  const location = useLocation();
  const currentPath = normalizePath(location.pathname);

  useEffect(() => {
    const meta = META_BY_PATH[currentPath] ?? META_BY_PATH["/"];
    document.title = meta.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute("content", meta.description);
      return;
    }

    const tag = document.createElement("meta");
    tag.name = "description";
    tag.content = meta.description;
    document.head.appendChild(tag);
  }, [currentPath]);

  return (
    <>
      <TopNav />
      <PageShell key={currentPath}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/developments" element={<DevelopmentsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageShell>
    </>
  );
}

function PageShell({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`page-wrapper${visible ? " visible" : ""}`}>
      <div className="page-content">{children}</div>
      <footer>
        <span className="footer-left">Argus Panoptes - arguspanoptes.org</span>
        <span className="footer-right">(c) 2026</span>
      </footer>
    </div>
  );
}

export default App;

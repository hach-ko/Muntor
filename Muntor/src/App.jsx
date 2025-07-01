import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Soon from "./Pages/Coming_Soon";

function AppContent() {
  const location = useLocation();
  // List all Coming Soon routes here
  const comingSoonPaths = ["/pdfs", "/podcasts", "/newsletter", "/videos", "/about"];
  const isComingSoon = comingSoonPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen" style={{ minHeight: "100vh" }}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pdfs" element={<Soon />} />
          <Route path="/podcasts" element={<Soon />} />
          <Route path="/newsletter" element={<Soon />} />
          <Route path="/videos" element={<Soon />} />
          <Route path="/about" element={<Soon />} />
        </Routes>
      </main>
      {!isComingSoon && <Footer />}
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router basename="/Muntor">
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
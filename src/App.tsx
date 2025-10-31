import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { Solutions } from "./pages/Solutions";
import { Pricing } from "./pages/Pricing";
// import { Contact } from "./pages/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/solutions" element={<Solutions />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

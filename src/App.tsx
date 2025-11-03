import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import {SubscriptionPlans} from './pages/SubscriptionPlans';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Container } from "@mui/material";
import "./index.css"; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

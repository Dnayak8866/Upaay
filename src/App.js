import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { UserLogin } from "./components/userLogin";
import { UserRegister } from "./components/userRegister";
import Header from "./components/header";
import BackgroundVideo from "./components/backgroundVideo";

function App() {
  return (
    <div className="container-fluid position-relative min-vh-100">
      <BackgroundVideo />
      <BrowserRouter>
        <Header />
        {/* Page Content */}
        <section className="position-relative mt-5 w-100">
          <div className="position-relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
            </Routes>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

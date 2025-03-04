import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { UserRegister } from "./components/user-register";
import { UserLogin } from "./components/user-login";
import { UserError } from "./components/user-error";

function App() {
  return (
    <div className="container-fluid position-relative vh-100">
      {/* Background Video */}
      <video autoPlay loop muted className="position-fixed top-0 start-0 w-100 h-100 object-fit-cover z-n1">
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <BrowserRouter>
        {/* Fixed Header */}
        <header className="text-white d-flex justify-content-between align-items-center position-fixed top-0 w-100 py-3 px-4 z-20">
          <div className="animate-charcter fs-1 fw-bold">Upaay</div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-light fw-bold me-3 fs-5 px-3">About Us</button>
            <button className="btn btn-light fw-bold me-3 fs-5 px-3">Contact Us</button>
          </div>
        </header>

        {/* Page Content */}
        <section className="position-relative z-10 mt-5 w-100">
          <div className="position-relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="register" element={<UserRegister />} />
              <Route path="login" element={<UserLogin />} />
              <Route path="error" element={<UserError />} />
            </Routes>
          </div>
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

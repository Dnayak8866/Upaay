import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap-icons/font/bootstrap-icons.css"; 

export function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center fw-bold custom-text-color" style={{ height: "85vh" }}>
      <h1 className="fs-1 fw-bold">
        Welcome to <span className="gradient-text">Upaay</span>
      </h1>
      <p className="fs-1">
        We help You <span className="gradient-text">Trade With Ease.</span>
      </p>
      <main className="d-flex justify-content-center align-items-center gap-3">
        <Link to="/register">
          <button className="fw-bolder fs-4 btn animated-btn text-white">
            <i className="bi bi-plus-circle-dotted me-2"></i> Register
          </button>
        </Link>
        <Link to="/login">
          <button className="fw-bolder fs-4 btn animated-btn text-white">
            <i className="bi bi-pen me-2"></i> Login
          </button>
        </Link>
      </main>
    </div>
  );
}

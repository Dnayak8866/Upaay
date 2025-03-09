import { Link } from "react-router-dom";

export function UserLogin() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h1 className="gradient-text">User Login</h1>
            <h2 className="mt-4 mb-4">Please Register to Proceed</h2>
             <Link to="/register">
                      <button className="fw-bolder fs-4 btn animated-btn text-white">
                        <i className="bi bi-person-fill-add text-danger"></i> Register
                      </button>
                    </Link>
        </div>
    )
}
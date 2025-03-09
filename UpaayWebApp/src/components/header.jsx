const Header = () => {
    return (
      <header className="text-white d-flex justify-content-between align-items-center position-fixed top-0 w-100 py-3 px-4">
        <div className="animate-charcter fs-1 fw-bold">Upaay</div>
        <nav className="d-flex justify-content-end">
          <button className="btn btn-light fw-bold me-3 fs-5 px-3" aria-label="About Us">About Us</button>
          <button className="btn btn-light fw-bold me-3 fs-5 px-3" aria-label="Contact Us">Contact Us</button>
        </nav>
      </header>
    );
  };
  
  export default Header;
  
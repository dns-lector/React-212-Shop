import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (<>
<nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="bi bi-bag-heart"></i> Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
        <Link className="nav-link" to="/notfound">NotFound</Link>
      </div>
    </div>
  </div>
</nav>
<div className="container">
    <Outlet />
</div>
<div className="spacer"></div>
<footer>
    &copy; 2024 IT Step University
</footer>      
</>);  
};

export default Layout;
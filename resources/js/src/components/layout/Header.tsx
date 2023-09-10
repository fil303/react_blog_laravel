import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html"><img className="img-fluid" src="/src/assets/images/logo.png" alt="parsa" /></a>
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navogation"
                aria-controls="navogation" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse text-center" id="navogation">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                    <Link to="/" className="nav-link text-uppercase text-dark dropdown-toggle" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Home
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="index.html">Homepage 1</a>
                        <a className="dropdown-item" href="homepage-2.html">Homepage 2</a>
                    </div>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link text-uppercase text-dark">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/category" className="nav-link text-uppercase text-dark">Categories</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link text-uppercase text-dark">Contact</Link>
                    </li>
                </ul>
                <form className="form-inline position-relative ml-lg-4">
                    <input className="form-control px-0 w-100" type="search" placeholder="Search" />
                    {/* <!-- <button className="search-icon" type="submit"><i className="ti-search text-dark"></i></button> --> */}
                    <a href="search.html" className="search-icon"><i className="ti-search text-dark"></i></a>
                </form>
                </div>
            </nav>
            </header>
        </>
    )
}

export default Header
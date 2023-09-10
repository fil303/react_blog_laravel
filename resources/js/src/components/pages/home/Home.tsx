
import BlogCard from "./BlogCard"
import TopSlidePost from "./TopSliderCard"

const Home = () => {
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
          <a className="nav-link text-uppercase text-dark dropdown-toggle" href="#" id="navbarDropdown"
            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Home
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="index.html">Homepage 1</a>
            <a className="dropdown-item" href="homepage-2.html">Homepage 2</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link text-uppercase text-dark" href="about.html">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-uppercase text-dark" href="category.html">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-uppercase text-dark" href="contact.html">Contact</a>
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

{/* <!-- featured post --> */}
<section>
<TopSlidePost />
</section>
{/* <!-- /featured post --> */}

{/* <!-- blog post --> */}

<BlogCard />

{/* <!-- /blog post --> */}

{/* <!-- instagram --> */}
<section>
  <div className="container-fluid px-0">
    <div className="row no-gutters instagram-slider" id="instafeed"></div>
  </div>
</section>
{/* <!-- /instagram --> */}

<footer className="bg-secondary">
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
          <a href="index.html"><img src="/src/assets/images/logo.png" alt="persa" className="img-fluid" /></a>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h6>Address</h6>
          <ul className="list-unstyled">
            <li className="font-secondary text-dark">Sydney</li>
            <li className="font-secondary text-dark">6 rip carl Avenue CA 90733</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h6>Contact Info</h6>
          <ul className="list-unstyled">
            <li className="font-secondary text-dark">Tel: +90 000 333 22</li>
            <li className="font-secondary text-dark">Mail: exmaple@ymail.com</li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
          <h6>Follow</h6>
          <ul className="list-inline d-inline-block">
            <li className="list-inline-item"><a href="#" className="text-dark"><i className="ti-facebook"></i></a></li>
            <li className="list-inline-item"><a href="#" className="text-dark"><i className="ti-twitter-alt"></i></a></li>
            <li className="list-inline-item"><a href="#" className="text-dark"><i className="ti-linkedin"></i></a></li>
            <li className="list-inline-item"><a href="#" className="text-dark"><i className="ti-github"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center pb-3">
    <p className="mb-0">Copyright ©<script>var CurrentYear = new Date().getFullYear()
    document.write(CurrentYear)</script> a theme by  <a href="https://themefisher.com/">themefisher.com</a></p>
  </div>
</footer>













        </>
    )
}

export default Home
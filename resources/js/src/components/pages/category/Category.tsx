import Footer from "../../layout/Footer"
import Header from "../../layout/Header"


const Category = () => {
    return (
        <>
            <Header />
            {/* <!-- page-title --> */}
            <section className="section bg-secondary">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <h4>Fashion</h4>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- /page-title --> */}

            {/* <!-- category post --> */}
            <section>
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="row masonry-container pt-5">
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-1.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-2.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-3.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-4.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-8.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    <div className="col-sm-6 mb-5">
                        <article className="text-center">
                        <img className="img-fluid mb-4" src="/src/assets/images/masonary-post/post-10.jpg" alt="post-thumb" />
                        <p className="text-uppercase mb-2">TRAVEL</p>
                        <h4 className="title-border"><a className="text-dark" href="blog-single.html">Charming Evening Field</a></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex
                            ea commodo consequat.</p>
                        <a href="blog-single.html" className="btn btn-transparent">read more</a>
                        </article>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                        <nav>
                        <ul className="pagination justify-content-center align-items-center">
                            <li className="page-item">
                            <span className="page-link">&laquo; Previous</span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">01</a></li>
                            <li className="page-item active">
                            <span className="page-link">02</span>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                            <li className="page-item"><a className="page-link" href="#">04</a></li>
                            <li className="page-item"><a className="page-link" href="#">05</a></li>
                            <li className="page-item"><a className="page-link" href="#">06</a></li>
                            <li className="page-item">
                            <a className="page-link" href="#">Next &raquo;</a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </div>
                {/* <!-- /blog post --> */}
                <div className="col-lg-4">
                    <div className="widget search-box">
                    <i className="ti-search"></i>
                    <input type="search" id="search-post" className="form-control border-0 pl-5" name="search-post"
                        placeholder="Search" />
                    </div>
                    <div className="widget">
                    <h6 className="mb-4">LATEST POST</h6>
                    <div className="media mb-4">
                        <div className="post-thumb-sm mr-3">
                        <img className="img-fluid" src="/src/assets/images/masonary-post/post-1.jpg" alt="post-thumb" />
                        </div>
                        <div className="media-body">
                        <ul className="list-inline d-flex justify-content-between mb-2">
                            <li className="list-inline-item">Post By Jhon</li>
                            <li className="list-inline-item">June 2, 2018</li>
                        </ul>
                        <h6><a className="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet, consectetur</a></h6>
                        </div>
                    </div>
                    <div className="media mb-4">
                        <div className="post-thumb-sm mr-3">
                        <img className="img-fluid" src="/src/assets/images/masonary-post/post-6.jpg" alt="post-thumb" />
                        </div>
                        <div className="media-body">
                        <ul className="list-inline d-flex justify-content-between mb-2">
                            <li className="list-inline-item">Post By Jhon</li>
                            <li className="list-inline-item">June 2, 2018</li>
                        </ul>
                        <h6><a className="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet, consectetur</a></h6>
                        </div>
                    </div>
                    <div className="media mb-4">
                        <div className="post-thumb-sm mr-3">
                        <img className="img-fluid" src="/src/assets/images/masonary-post/post-3.jpg" alt="post-thumb" />
                        </div>
                        <div className="media-body">
                        <ul className="list-inline d-flex justify-content-between mb-2">
                            <li className="list-inline-item">Post By Jhon</li>
                            <li className="list-inline-item">June 2, 2018</li>
                        </ul>
                        <h6><a className="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet, consectetur</a></h6>
                        </div>
                    </div>
                    </div>
                    <div className="widget">
                    <h6 className="mb-4">TAG</h6>
                    <ul className="list-inline tag-list">
                        <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                    </ul>
                    </div>
                    <div className="widget">
                    <h6 className="mb-4">CATEGORIES</h6>
                    <ul className="list-inline tag-list">
                        <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                        <li className="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </section>
            {/* <!-- /category post --> */}
            <Footer />
        </>
    )
}

export default Category
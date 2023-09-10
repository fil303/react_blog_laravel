
const Footer = () => {
    return (
        <>
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

export default Footer
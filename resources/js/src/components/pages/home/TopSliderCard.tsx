
type Post = {
    title:string,
    description:string,
    image:string
}

const SlideCard = () => {
    const posts:Array<Post> = [
        {
            title : "LifeStyle",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/featured-post/post-1.jpg"
        },
        {
            title : "Philosophy",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/featured-post/post-2.jpg"
        },
        {
            title : "Fashion",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/featured-post/post-3.jpg"
        },
        {
            title : "Article",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/featured-post/post-4.jpg"
        },
    ];

    return (
        <>
            <div className="container-fluid p-sm-0">
                <div className="row featured-post-slider">
                    {posts.map((post:Post) => (
                        <div className="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1">
                            <article className="card bg-dark text-center text-white border-0 rounded-0">
                            <img className="card-img rounded-0 img-fluid w-100" src={post.image} alt="post-thumb" />
                            <div className="card-img-overlay">
                                <div className="card-content">
                                <p className="text-uppercase">{post.title}</p>
                                <h4 className="card-title mb-4"><a className="text-white" href="blog-single.html">{post.description}</a></h4>
                                <a className="btn btn-outline-light" href="blog-single.html">read more</a>
                                </div>
                            </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SlideCard
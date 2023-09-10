
type Post = {
    title:string,
    description:string,
    image:string
}

const BlogCard = () => {
    const blogs:Array<Post> = [
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-1.jpg"
        },
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-2.jpg"
        },
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-3.jpg"
        },
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-4.jpg"
        },
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-5.jpg"
        },
        {
            title : "Charming Evening Field",
            description : "Organize Your Life With 10 Simple rule",
            image:"/src/assets/images/masonary-post/post-6.jpg"
        },
    ];

    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row masonry-container">
                        {blogs.map((blog:Post) => (
                            <div className="col-lg-4 col-sm-6 mb-5">
                                <article className="text-center">
                                <img className="img-fluid mb-4" src={blog.image} alt="post-thumb" />
                                <p className="text-uppercase mb-2">TRAVEL</p>
                                <h4 className="title-border"><a className="text-dark" href="blog-single.html">{blog.title}</a></h4>
                                <p>{blog.description}</p>
                                <a href="blog-single.html" className="btn btn-transparent">read more</a>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogCard
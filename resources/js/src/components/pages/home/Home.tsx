
import Footer from "../../layout/Footer"
import Header from "../../layout/Header"
import BlogCard from "./BlogCard"
import TopSlidePost from "./TopSliderCard"

const Home = () => {
    return (
        <>
          <Header />
          <TopSlidePost />
          <BlogCard />
          <Footer />
        </>
    )
}

export default Home
import { LayoutOne } from "@/layouts";
import BlogItemTwo from "@/components/blog/blogItemTwo";
import blogData from "@/data/blog";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogSideBar from "@/components/blog/sidebar";
import { useSelector } from "react-redux";
import { getProducts, productSlug } from "@/lib/product";

function BlogRightSideBar() {
  const { products } = useSelector((state) => state.product);
  const featuredBlogs = getProducts(blogData, "fashion", "featured", 7);
  const latestdBlogs = getProducts(blogData, "fashion", "featured", 4);
  const topRatedProducts = getProducts(products, "fashion", "featured", 3);
  const popularProducts = getProducts(products, "fashion", "featured", 3);

  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb title="News Feeds" sectionPace="" currentSlug="Blog" />

        <div class="ltn__blog-area mb-120">
          <Container>
            <Row>
              <Col xs={12} lg={8}>
                <div className="ltn__blog-list-wrap">
                  {featuredBlogs.map((blog, key) => {
                    const slug = productSlug(blog.title);

                    return (
                      <BlogItemTwo
                        key={key}
                        blogData={blog}
                        slug={slug}
                        baseUrl="blog"
                      />
                    );
                  })}
                </div>
              </Col>

              <Col xs={12} lg={{ span: 4, order: 0 }}>
                <BlogSideBar
                  baseUrl="shop"
                  latestdBlogs={latestdBlogs}
                  topRatedProducts={topRatedProducts}
                  popularProducts={popularProducts}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default BlogRightSideBar;

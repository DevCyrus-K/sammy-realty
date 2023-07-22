import { LayoutOne } from "@/layouts";
import { getProducts, productSlug } from "@/lib/product";
import BlogItemTwo from "@/components/blog/blogItemTwo";
import blogData from "@/data/blog";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";

function Blog() {
  const featuredBlogs = getProducts(blogData, "fashion", "featured", 7);
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
                        baseUrl="shop"
                      />
                    );
                  })}
                </div>
              </Col>

              <Col xs={12} lg={{ span: 4, order: 0 }}></Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Blog;

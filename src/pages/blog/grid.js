import { useState, useEffect } from "react";
import { LayoutOne } from "@/layouts";
import BlogItemTwo from "@/components/blog/blogItemTwo";
import blogData from "@/data/blog";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import BlogSideBar from "@/components/blog/sidebar";
import { useSelector } from "react-redux";
import { getProducts, getSortedProducts, productSlug } from "@/lib/product";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import Paginator from "react-hooks-paginator";

function Blog() {
  const { products } = useSelector((state) => state.product);
  const featuredBlogs = getProducts(blogData, "fashion", "featured", 7);
  const latestdBlogs = getProducts(blogData, "fashion", "featured", 4);
  const topRatedProducts = getProducts(products, "fashion", "featured", 3);
  const popularProducts = getProducts(products, "fashion", "featured", 3);
  const [sortType, setSortType] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [filterSortType, setFilterSortType] = useState("");
  const [filterSortValue, setFilterSortValue] = useState("");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [shopTopFilterStatus, setShopTopFilterStatus] = useState(false);

  const pageLimit = 12;

  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };

  const getFilterSortParams = (sortType, sortValue) => {
    setFilterSortType(sortType);
    setFilterSortValue(sortValue);
  };

  useEffect(() => {
    let sortedProducts = getSortedProducts(products, sortType, sortValue);

    const filterSortedProducts = getSortedProducts(
      sortedProducts,
      filterSortType,
      filterSortValue
    );

    sortedProducts = filterSortedProducts;
    setSortedProducts(sortedProducts);

    setCurrentData(sortedProducts.slice(offset, offset + pageLimit));
  }, [offset, products, sortType, sortValue, filterSortType, filterSortValue]);

  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb
          title="Blog Grid"
          sectionPace=""
          currentSlug="Blog Grid"
        />

        <div class="ltn__blog-area ltn__blog-item-3-normal mb-100">
          <Container>
            <Row>
              {blogData.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <Col xs={12} sm={6} lg={4} key={key}>
                    <BlogItem baseUrl="blog" data={data} slug={slug} />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>

        <div className="ltn__pagination-area text-center">
          <Paginator
            totalRecords={sortedProducts.length}
            pageLimit={pageLimit}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageContainerClass="ltn__pagination"
            pagePrevText="«"
            pageNextText="»"
          />
        </div>
        <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom">
          <Container>
            <Row>
              <Col xs={12}>
                <CallToAction />
              </Col>
            </Row>
          </Container>
        </div>
      </LayoutOne>
    </>
  );
}

export default Blog;

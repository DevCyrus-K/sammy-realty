import { useState, useEffect } from "react";
import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import { productSlug } from "@/lib/product";
import blogData from "@/data/blog";
import BlogItem from "@/components/blog";
import CallToAction from "@/components/callToAction";
import ReactPaginate from 'react-paginate';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function BlogGrid() {

  const itemsPerPage = 4;
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(blogData);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(blogData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % blogData.length;
    setItemOffset(newOffset);
  };



  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb
          title="Blog Grid"
          sectionPace=""
          currentSlug="Blog Grid"
        />

        <div className="ltn__blog-area ltn__blog-item-3-normal mb-100">
          <Container>
            <Row>
              {currentItems.map((data, key) => {
                const slug = productSlug(data.title);
                return (
                  <Col xs={12} sm={6} lg={4} key={key}>
                    <BlogItem baseUrl="/blog/grid" data={data} slug={slug} />
                  </Col>
                );
              })}
            </Row>

            <Row>
              <Col xs={12}>
                <div className="ltn__pagination-area">

                  <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    nextLabel={<FaAngleDoubleRight />}
                    previousLabel={<FaAngleDoubleLeft />}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination ltn__pagination justify-content-center"
                    activeClassName="active"
                    renderOnZeroPageCount={null}
                  />

                </div></Col>
            </Row>
          </Container>
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

export default BlogGrid;





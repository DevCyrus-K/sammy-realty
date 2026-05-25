import { useMemo, useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import { Container, Row, Col } from "react-bootstrap";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaPen } from "react-icons/fa";
import { LayoutOne } from "@/layouts";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import TestimonialCarouselItem from "@/components/testimonialCarousel";
import testimonialData from "@/data/testimonial";
import CallToAction from "@/components/callToAction";

const TESTIMONIALS_PER_PAGE = 6;

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pageCount = Math.ceil(testimonialData.length / TESTIMONIALS_PER_PAGE);
  const visibleTestimonials = useMemo(() => {
    const startIndex = page * TESTIMONIALS_PER_PAGE;

    return testimonialData.slice(
      startIndex,
      startIndex + TESTIMONIALS_PER_PAGE
    );
  }, [page]);

  return (
    <LayoutOne topbar={false}>
      <ShopBreadCrumb title="Testimonials" sectionPace="" currentSlug="Testimonials" />
      <div className="ltn__testimonial-area pt-115 pb-70">
        <Container>
          <div className="testimonials-page-grid">
            {visibleTestimonials.map((item) => (
              <div key={item.id} className="testimonials-page-card">
                <TestimonialCarouselItem data={item} />
              </div>
            ))}
          </div>

          {pageCount > 1 ? (
            <div className="ltn__pagination-area text-center testimonials-page-pagination">
              <ReactPaginate
                onPageChange={({ selected }) => setPage(selected)}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                forcePage={page}
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
            </div>
          ) : null}

          <div className="testimonials-page-actions">
            <Link
              className="btn theme-btn-1 btn-effect-1 testimonials-share-story-btn"
              href="/testimonials/submit-review"
            >
              <FaPen aria-hidden="true" />
              Share Your Story
            </Link>
          </div>
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
  );
};

export default Testimonials;

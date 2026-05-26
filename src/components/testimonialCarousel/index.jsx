import InitialAvatar from "./InitialAvatar";

const TestimonialCarouselItem = ({ data }) => {
  // Support both old format (description) and new format (content)
  const testimonialText = data.description || data.content;
  
  return (
    <>
      <div className="ltn__testimonial-item ltn__testimonial-item-7">
        <div className="ltn__testimoni-info">
          <p>
            <i className="flaticon-left-quote-1"></i>
            {testimonialText}
          </p>
          <div className="ltn__testimoni-info-inner">
            <div className="ltn__testimoni-img">
              <InitialAvatar name={data.name} />
            </div>
            <div className="ltn__testimoni-name-designation">
              <h5>{data.name}</h5>
              <label>{data.type || "Client"}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarouselItem;

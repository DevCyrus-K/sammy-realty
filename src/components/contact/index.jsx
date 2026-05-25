import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaUserAlt,
  FaEnvelope,
  FaPencilAlt,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = () => {
    toast("Thanks. Sammy Realty will contact you shortly.")
    reset();
  };


  const onSubmitWithPreventDefault = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <ToastContainer />
      <div className="ltn__contact-address-area mb-90">
        <style>{`
          .ltn__contact-address-item-3 {
            display: flex;
            flex-direction: column;
            height: 100%;
            justify-content: flex-start;
          }
          .ltn__contact-address-item-3 .ltn__contact-address-icon {
            margin-bottom: 20px;
          }
          .ltn__contact-address-item-3 h3 {
            margin-bottom: 15px;
          }
          .ltn__contact-address-item-3 p {
            flex-grow: 1;
          }
          @media (max-width: 991px) {
            .ltn__contact-address-item-3 {
              margin-bottom: 30px;
            }
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@sammyrealty.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +234-814-841-4913
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  Greenville Estate, Ajah <br />
                  Lagos, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT ADDRESS AREA END --> */}

      {/* <!-- CONTACT MESSAGE AREA START --> */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Tell Sammy Realty What You Need</h4>
                <form id="contact-form" onSubmit={onSubmitWithPreventDefault}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          {...register('name', { required: true })}
                          placeholder="Your name"
                        />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                        {errors.name && <span className="d-inline-block mb-2 error">This field is required</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          {...register('email', { required: true })}
                          placeholder="Email address"
                        />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                        {errors.email && <span className="d-inline-block mb-2 error">This field is required</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <Form.Select {...register('serviceType', { required: true })} className="nice-select">
                          <option value="">Select Service Type</option>
                          <option value="Property Sales">Property Sales</option>
                          <option value="Property Management">Property Management</option>
                          <option value="Real Estate Consulting">Real Estate Consulting</option>
                          <option value="Rental & Shortlets">Rental & Shortlets</option>
                        </Form.Select>
                        <span className="inline-icon">
                          <FaArrowDown />
                        </span>
                        {errors.serviceType && <span className="d-inline-block mb-2 error">This field is required</span>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          {...register('phone', { required: true })}
                          placeholder="Phone or WhatsApp number"
                        />
                        <span className="inline-icon">
                          <FaPhoneAlt />
                        </span>
                        {errors.phone && <span className="d-inline-block mb-2 error">This field is required</span>}
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      {...register('message', { required: true })}
                      placeholder="Property location, budget, and preferred inspection time"
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                    {errors.message && <span className="d-inline-block mb-2 error">This field is required</span>}
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" {...register('agree', { required: true })} /> I agree that Sammy Realty can contact me about this property enquiry.
                    </label>
                    {errors.agree && <span className="d-inline-block mb-2 error">This field is required</span>}
                  </p>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      Send Enquiry
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT MESSAGE AREA END --> */}

      {/* <!-- GOOGLE MAP AREA START --> */}
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps?q=Greenville%20Estate%2C%20Ajah%2C%20Lagos%2C%20Nigeria&output=embed"
          width="100%"
          height="100%"
          title="Sammy Realty office location"
        ></iframe>
      </div>
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
};

export default Contact;

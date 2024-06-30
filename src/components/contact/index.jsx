import { Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";

const Contact = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Ensure reset is destructured here

  const onSubmit = (data) => {
    console.log(data);
    toast("Form data has been submited. Please check in console")
    reset(); // Reset form fields after submission
  };


  const onSubmitWithPreventDefault = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    handleSubmit(onSubmit)();
  };
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <ToastContainer />
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@webmail.com <br />
                  jobs@webexample.com
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
                  +0123-456789 <br /> +987-6543210
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
                  18/A, New Born Town Hall <br />
                  New York, US
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
                <h4 className="title-2">Get A Quote</h4>
                <form id="contact-form" onSubmit={onSubmitWithPreventDefault}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          {...register('name', { required: true })}
                          placeholder="Enter your name"
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
                          placeholder="Enter email address"
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
                          <option value="Property Management">Property Management</option>
                          <option value="Mortgage Service">Mortgage Service</option>
                          <option value="Consulting Service">Consulting Service</option>
                          <option value="Home Buying">Home Buying</option>
                          <option value="Home Selling">Home Selling</option>
                          <option value="Escrow Services">Escrow Services</option>
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
                          placeholder="Enter phone number"
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
                      placeholder="Enter message"
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                    {errors.message && <span className="d-inline-block mb-2 error">This field is required</span>}
                  </div>
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" {...register('agree', { required: true })} /> Save my name,
                      email, and website in this browser for the next time I comment.
                    </label>
                    {errors.agree && <span className="d-inline-block mb-2 error">This field is required</span>}
                  </p>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      get a free service
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
};

export default Contact;

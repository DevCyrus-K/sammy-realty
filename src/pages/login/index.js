import { LayoutOne } from "@/layouts";
import { Container, Row, Col } from "react-bootstrap";
import ShopBreadCrumb from "@/components/breadCrumbs/shop";
import CallToAction from "@/components/callToAction";

function Login() {
  return (
    <>
      <LayoutOne>
        <ShopBreadCrumb title="Account" sectionPace="" currentSlug="Login" />

        {/* <!-- LOGIN AREA START --> */}
    <div className="ltn__login-area pb-65">
        <div className="container">
            <Row>
                <Col xs={12}>
                    <div className="section-title-area text-center">
                        <h1 className="section-title">Sign In <br/>To  Your Account</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
                             Sit aliquid,  Non distinctio vel iste.</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={6}>
                    <div className="account-login-inner">
                        <form action="#" className="ltn__form-box contact-form-box">
                            <input type="text" name="email" placeholder="Email*"/>
                            <input type="password" name="password" placeholder="Password*"/>
                            <div className="btn-wrapper mt-0">
                                <button className="theme-btn-1 btn btn-block" type="submit">SIGN IN</button>
                            </div>
                            <div className="go-to-btn mt-20">
                                <a  href="#" title="Forgot Password?" data-bs-toggle="modal" data-bs-target="#ltn_forget_password_modal"><small>FORGOTTEN YOUR PASSWORD?</small></a>
                            </div>
                        </form>
                    </div>
                </Col>
                <Col xs={12} lg={6}>
                    <div className="account-create text-center pt-50">
                        <h4>{`DON'T HAVE AN ACCOUNT?`}</h4>
                        <p>Add items to your wishlistget personalised recommendations <br/>
                            check out more quickly track your orders register</p>
                        <div className="btn-wrapper">
                            <a href="register.html" className="theme-btn-1 btn black-btn">CREATE ACCOUNT</a>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    {/* <!-- LOGIN AREA END --> */}

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

export default Login;

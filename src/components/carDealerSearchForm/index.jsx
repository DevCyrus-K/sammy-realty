import {Row,Col,Nav,Tab} from "react-bootstrap";
import Select from "react-select";
import { FaCarAlt, FaUserAlt } from "react-icons/fa";
import Link from "next/link";

function CarDealerSearchForm({ navMenuClass }) {
  const areaOptions = [
    { value: "Choose Area", label: "Choose Area" },
    { value: "chicago", label: "chicago" },
    { value: "London", label: "London" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "New York", label: "New York" },
    { value: "New Jersey", label: "New Jersey" },
  ];

  const propertyOptions = [
    { value: "Property Status", label: "Property Status" },
    { value: "Open house", label: "Open house" },
    { value: "Rent", label: "Rent" },
    { value: "Sale", label: "Sale" },
    { value: "Sold", label: "Sold" },
  ];

  const propertyTypeOptions = [
    { value: "Property Type", label: "Property Type" },
    { value: "Apartment", label: "Apartment" },
    { value: "Co-op", label: "Co-op" },
    { value: "Condo", label: "Condo" },
    { value: "Single Family Home", label: "Single Family Home" },
  ];

  return (
    <>
      <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
        <div className="container">
          <Row className="row">
            <Col className="col-lg-12">
              <div className="ltn__car-dealer-form-tab">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <div
                    className={`ltn__tab-menu text-uppercase ${navMenuClass}`}
                  >
                    <Nav variant="pills">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <FaCarAlt />
                          Find A Car
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <FaUserAlt />
                          Get a Dealer
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>

                  <Tab.Content className="tab-content bg-white box-shadow-1 ltn__border position-relative pb-10">
                    <Tab.Pane eventKey="first">
                      <div className="car-dealer-form-inner">
                        <form
                          action="#"
                          className="ltn__car-dealer-form-box row"
                        >
                          <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={areaOptions}
                              defaultValue={[
                                { value: "Choose Area", label: "Choose Area" },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={propertyOptions}
                              defaultValue={[
                                {
                                  value: "Property Status",
                                  label: "Property Status",
                                },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={propertyTypeOptions}
                              defaultValue={[
                                {
                                  value: "Property Type",
                                  label: "Property Type",
                                },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                            <div className="btn-wrapper text-center mt-0">
                              <Link
                               href="/shop/right-sidebar"
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              >
                                Search Properties
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div className="car-dealer-form-inner">
                        <form
                          action="/shop/right-sidebar"
                          className="ltn__car-dealer-form-box row"
                        >
                          <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={areaOptions}
                              defaultValue={[
                                { value: "Choose Area", label: "Choose Area" },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={propertyOptions}
                              defaultValue={[
                                {
                                  value: "Property Status",
                                  label: "Property Status",
                                },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item col-lg-3 col-md-6">
                            <Select
                              className="nice-select"
                              options={propertyTypeOptions}
                              defaultValue={[
                                {
                                  value: "Property Type",
                                  label: "Property Type",
                                },
                              ]}
                            />
                          </div>
                          <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                            <div className="btn-wrapper text-center mt-0">
                              <Link
                                href="/shop/right-sidebar"
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                              >
                                Search Properties
                              </Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default CarDealerSearchForm;

import { useState } from "react";
import CountUp from "react-countup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VisibilityObserver } from "reactjs-visibility";

const counterItems = [
  {
    icon: "flaticon-house-key",
    end: 25,
    suffix: "+",
    label: "Total Properties Sold",
  },
  {
    icon: "flaticon-user",
    end: 50,
    suffix: "+",
    label: "Trusted by Clients",
  },
  {
    icon: "flaticon-apartment",
    end: 9,
    suffix: "+",
    label: "Total Listed Properties",
  },
  {
    icon: "flaticon-call-center-agent",
    end: 10,
    suffix: "+",
    label: "Years of Experience",
  },
];

function CounterUp() {
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsCounterVisible(true);
    }
  };

  const options = {
    rootMargin: "200px",
  };

  return (
    <>
      <div className="ltn__counterup-area section-bg-1 pt-120 pb-70">
        <Container>
          <Row>
            {counterItems.map((item) => (
              <Col
                key={item.label}
                xs={12}
                sm={6}
                md={3}
                className="align-self-center"
              >
                <div className="ltn__counterup-item">
                  <div className="counter-icon">
                    <i className={item.icon}></i>
                  </div>
                  <h1>
                    <VisibilityObserver
                      onChangeVisibility={onVisibilityChange}
                      options={options}
                    >
                      <CountUp
                        className="count-text"
                        start={0}
                        end={isCounterVisible ? item.end : 0}
                        suffix={item.suffix}
                        duration={5}
                      />
                    </VisibilityObserver>
                  </h1>
                  <h6>{item.label}</h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CounterUp;

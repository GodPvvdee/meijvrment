import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <Section>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Холбоо барих
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};
export default Hero;

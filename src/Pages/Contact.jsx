import React, { useEffect, useState } from "react";
import Navbar from "../components/Items/Navbar";
import Hero from "../components/Items/Hero";
import Footer from "../components/Items/Footer";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";

const Contact = () => {
  const [fetched, setFetched] = useState([]);
  console.log("parent fetched", fetched);

  const darkmode = useSelector((state) => state.theme.darkmode);

  const handleFetchData = (data) => {
    setFetched(data);
  };
  return (
    <>
      <Navbar />
      <Hero onFetchData={handleFetchData} />
      <div className={`movie_showcase ${darkmode ? "dark" : "light"}`}>
        <Container>
          <Row>
            <Col>
              <div className="movie_showcase_inside">
                <h2 className="text-center py-4">Frequently Asked Question</h2>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item
                    eventKey="0"
                    className={`accodion_view ${darkmode ? "dark" : "light"}`}
                  >
                    <Accordion.Header>
                      Who qualifies for Media Center access?
                    </Accordion.Header>
                    <Accordion.Body className="text-start">
                      Media Center access is for members of the press and media
                      who cover Netflix series, films, specials and games for
                      professional purposes. To apply for a Media Center
                      account, click <a href="#">here</a>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className={`accodion_view ${darkmode ? "dark" : "light"}`}
                  >
                    <Accordion.Header>
                      I have a Media Center account but I can't remember my
                      password.
                    </Accordion.Header>
                    <Accordion.Body className="text-start">
                      Click{" "}
                      <a href="#" target="_blank">
                        here
                      </a>
                      , enter your Media Center account email address and select
                      'Continue'. Then, click 'Reset Password', and click 'Reset
                      Password' again on the next screen.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    className={`accodion_view ${darkmode ? "dark" : "light"}`}
                  >
                    <Accordion.Header>
                    I just applied for a Media Center account. Is my access automatically approved?
                    </Accordion.Header>
                    <Accordion.Body className="text-start">
                    No, your account will need to be approved by a Netflix publicity representative after you've applied for an account. Please submit the “Contact Us” form if you experience a significant delay of more than 3-5 business days.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <div className="pt-5 d-flex flex-column gap-2">
                <h3>Have a different issue?</h3>
                <button className="bttn">Log In</button>
                </div>
                <p className="py-4 m-auto w-">To better assist you, please log in to your Media Center Account. If you are having trouble accessing your Media Center Account please <a href="#" className="inline-block">contact us</a></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

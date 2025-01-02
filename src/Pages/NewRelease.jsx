import React, { useEffect, useState } from "react";
import Navbar from "../components/Items/Navbar";
import Hero from "../components/Items/Hero";
import Footer from "../components/Items/Footer";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const NewRelease = () => {
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
                <h1 className="text-center mb-5">New on Netflix</h1>
                <div className="">
                  <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="p-0 gap-0 overflow-hidden"
                  >
                    <Tab eventKey="all" title="All" className="py-4">
                      Tab content for Home
                    </Tab>
                    <Tab eventKey="film" title="Film" className="py-4">
                      Tab content for Profile
                    </Tab>
                    <Tab eventKey="series" title="Series" className="py-4">
                      Tab content for Series
                    </Tab>
                    <Tab eventKey="special" title="Special" className="py-4">
                      Tab content for Contact
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer/>
    </>
  );
};

export default NewRelease;

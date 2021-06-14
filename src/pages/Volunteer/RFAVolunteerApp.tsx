import React, { useState } from "react";
import { Container, Row, Tab, Nav } from "react-bootstrap";
import RFAHeader from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import RFAPositionCard from "@/components/RFAPositionCard";

export default function VolunteerApp(props) {
  const [key, setKey] = useState("one");
  const ActiveStyle: React.CSSProperties = {
    color: "#000000",
    background: "#FFCC00",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const ActiveStyle2: React.CSSProperties = {
    color: "#000000",
    background: "#FA8D1F",
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "Mazzard-H-Extrabold",
    fontSize: "x-large",
    padding: "30px",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#FA8D1F"}
        image={headerBlobYellow}
        title={"Join us to help students in STEM!"}
        description={
          "Fill out the form below to sign up for our classes today!"
        }
      />
      <br></br>
      <br></br>
      <Container>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                style={key === "one" ? ActiveStyle : ActiveStyle}
              >
                Teacher Application
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={key === "two" ? ActiveStyle2 : ActiveStyle2}
              >
                Publicity Application
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFAPositionCard
                borderColor="#FFCC00"
                color={"#ffeb99"}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdxQe6sYXbPoLQ5MpFnptT6e5ptCQYFXq5U2fwcAaBBONrP8g/viewform?embedded=true"
                      width="100%"
                      height="800vmax"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                    >
                      Loading…
                    </iframe>
                  </div>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <RFAPositionCard
                borderColor="#FA8D1F"
                color={"#FCBB79"}
                posHeader={""}
                posDescription={
                  <div className="center-align">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSdYi6eUvSdgRQ6Yw2EsF_bdhCuKEskR-draKjd7FoNk_8jrbw/viewform?embedded=true"
                      width="100%"
                      height="800vmax"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                    >
                      Loading…
                    </iframe>
                  </div>
                }
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

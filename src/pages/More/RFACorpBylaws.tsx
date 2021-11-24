import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { RFABylawEntry } from "@/components/RFABylawEntry";
import bylawsListJSON from "@/posts/downloads/corp_bylaws.json";

import { ColorThemes } from "@/colors";

export const RFACorpBylaws: React.FC = () => {
  const background: React.CSSProperties = {
    background: "rgba(255, 204, 0, 0.5)",
    borderRadius: "15px",
  };
  const header: React.CSSProperties = {
    background: "rgba(255, 204, 0, 0.5)",
    borderRadius: "20px",
    border: "10px solid white",
    padding: "5px",
    fontFamily: "BeVietnam-ExtraBold",
    fontSize: "xx-large",
    textAlign: "center",
    color: "black",
  };
  return (
    <div>
      <RFAHeader
        headerTextColor={ColorThemes.mainYellow}
        image={headerBlobYellow}
        title={"Corporate Bylaws"}
        description={"Learn more about Robotics for All's bylaws!"}
      />
      <br></br>
      <br></br>
      <Container>
        <Row className="center-align">
          <Col xs={3} style={header}>
            <h3>Date</h3>
          </Col>
          <Col xs={6} style={header}>
            <h3>Item</h3>
          </Col>
          <Col xs={3} style={header}>
            <h3>File</h3>
          </Col>
        </Row>
      </Container>
      <Container style={background}>
        {bylawsListJSON.corp_bylaws_list.map((bylawEntry, i) => (
          <RFABylawEntry
            key={i}
            date={bylawEntry.date}
            bylawName={bylawEntry.item_name}
            download={bylawEntry.file_path.replace("/public", "")}
          />
        ))}
      </Container>
      <br/>
      <br/>
    </div>
  );
};

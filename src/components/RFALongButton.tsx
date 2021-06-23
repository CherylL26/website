import React from "react";
import Row from "react-bootstrap/Row";

export const RFALongButton: React.FC<{
  target: string;
  link: string;
  title: string;
}> = (props) => {
  const title: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    textAlign: "center",
  };

  return (
    <a className="hyperlink" target={props.target} href={props.link}>
      <Row className="long-button p-2 justify-content-center align-items-center">
        <h3 style={title}>{props.title}</h3>
      </Row>
    </a>
  );
};

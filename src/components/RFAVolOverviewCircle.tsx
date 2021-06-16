import React from "react";
import { CountUp } from "use-count-up";
export const RFAVolOverviewCircle: React.FC<{
  top: string;
  width: string;
  height: string;
  paddingtop: string;
  subtextSize: string;
  titleSize: string;
  title: string;
  subtext: string;
  end: number;
}> = (props) => {
  const circleText: React.CSSProperties = {
    borderRadius: "50%",
    backgroundColor: "#fcaf62",
    textAlign: "center",
    marginTop: props.top,
    height: props.height,
    width: props.width,
    paddingTop: props.paddingtop,
  };
  const circleTitle: React.CSSProperties = {
    fontFamily: "Mazzard-H",
    fontSize: props.titleSize,
    lineHeight: "88%",
  };
  const circleSubtext: React.CSSProperties = {
    fontFamily: "BeVietnam",
    fontSize: props.subtextSize,
    lineHeight: "88%",
  };
  const statNumbers: React.CSSProperties = {
    fontFamily: "Mazzard-H",
    fontSize: "5.4rem",
    color: "black",
    lineHeight: "88%",
  };
  return (
    <div style={circleText}>
      <h3 style={circleTitle}>{props.title}</h3>
      <div style={statNumbers}>
        <CountUp end={props.end} start={1} isCounting />
      </div>
      <h4 style={circleSubtext}>{props.subtext}</h4>
    </div>
  );
};

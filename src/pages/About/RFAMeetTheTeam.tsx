import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png"; // add correct image here
import classFAQJSON from "@/posts/faqs/class_faqs.json";
import Markdown from "markdown-to-jsx";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bmInfoJSON from "@/posts/board_members.json"
import ccInfoJSON from "@/posts/curriculum_committee.json"
import adInfoJSON from "@/posts/assistant_directors.json"
import pcInfoJSON from "@/posts/pub_committee.json"


import maxImg from "@/media/LeadershipTeam/max.png";
import Markdown from "markdown-to-jsx";



export const RFAMeetTheTeam: React.FC = () => {

    const yellowRow = {
        backgroundColor: "#ffcc004d"
    }
    const greenRow = {
        backgroundColor: "#33cc664d"
    }
    const blueRow = {
        backgroundColor: "#3399ff80"
    }
    const orangeRow = {
        backgroundColor: "#ffcc0080"
    }
    const header: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "9vh",
        textAlign: "center",
    };
    const nameHeader: React.CSSProperties = {
        fontFamily: "Oswald-Medium",
        fontSize: "7vh",
    };
    const titleHeader: React.CSSProperties = {
        fontFamily: "BeVietnam-Bold",
        fontSize: "4vh",
    };
    const bodyText: React.CSSProperties = {
        fontFamily: "BeVietnam-Medium",
        color: "white",
    };
    const imgSize = {
        height: "21vmax",
    };
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
        },
      };


  return (
    <div>
      <RFAHeader
        headerTextColor={"#ffcc00"}
        image={headerBlobYellow}
        title={"Get to Know our Team!"}
        description={
          "Get to know the faces behind Robotics for All!"
        }
      />
      <br />
        <h1 style={header}>BOARD OF DIRECTORS</h1>
        <Row style = {yellowRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {bmInfoJSON.board_members_list.map(info => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#c06204", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>EXECUTIVE ASSISTANT DIRECTOR</h1>
        <Row style = {greenRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {adInfoJSON.assistant_directors_list.map(info => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#c06204", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>CURRICULUM COMMITTEE</h1>
        <Row style = {blueRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {ccInfoJSON.curriculum_committee_list.map(info => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#c06204", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
        <br/>
        <h1 style={header}>PUBLICITY COMMITTEE</h1>
        <Row style={orangeRow}>
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                transitionDuration={500}
                infinite
            >
                {pcInfoJSON.pub_committee.map(info => (
                    <div style = {imgSize} className = "d-flex">
                        <Col md = {"auto"}>
                            <Image style = {imgSize} src = {info.image.replace("/public","")} />
                        </Col>
                        <Col style = {{overflowY: "scroll"}} md = {7} className = "ms-2">
                            <h1 style = {nameHeader}>{info.name}</h1>
                            <h1 style = {{color: "#c06204", ...titleHeader}}>{info.title_pronouns}</h1>
                            <Markdown style = {bodyText}>{info.description}</Markdown>
                        </Col>
                    </div>
                ))}

            </Carousel>
        </Row>
        <br/>
    </div>
  );
};

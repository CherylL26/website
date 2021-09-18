import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFATabsCardNoImage, RFATabsCardLeftImage, RFATabsCardRightImage } from "@/components/RFATabCards";
import { RFAPosButton } from "@/components/RFAPosButton";
import { RFAFAQDropdowns } from "@/components/RFAFAQDropdowns";



import Calendar from "@/media/Graphics/calendar.png";
import Clock from "@/media/Graphics/clock.png";
import Curriculum from "@/media/Graphics/curriculum.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import TasksOrange from "@/media/Graphics/tasksOrange.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";
import QuestionMark from "@/media/Graphics/questionMark.png";

import Markdown from "markdown-to-jsx";
import teacherOverviewJSON from "@/posts/teacher_overview.json";
import taOverviewJSON from "@/posts/ta_overview.json";
import volunteerFAQJSON from "@/posts/faqs/volunteer_faqs.json";

import { ColorThemes } from "@/colors";

export const RFATeacherPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    background: ColorThemes.mainYellow,
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "BeVietnam-ExtraBold",
    fontSize: "x-large",
    padding: "20px",
    height: "100%",
  };
  const inActiveStyle = {
    background: ColorThemes.mainOrange,
    border: "none",
    borderRadius: "15px 15px 0 0",
    fontFamily: "BeVietnam-ExtraBold",
    fontSize: "x-large",
    padding: "20px",
    height: "100%",
  };
  const blackText = {
    color: ColorThemes.black
  }
  const positionsTitle: React.CSSProperties = {
    fontFamily: "BeVietnam-ExtraBold",
    letterSpacing: "0.25em",
    color: ColorThemes.mainOrange,
    textAlign: "center",
  };
  
  return (
    <div>
      <RFAHeader
        headerTextColor = {ColorThemes.mainOrange}
        image={headerBlobOrange}
        title={"Volunteer to Teach Students STEM!"}
        description={
          "Volunteer to help with graphic design, curriculum development, and much much more!"
        }
      />
      <br></br>
      <br></br>
      <Container>
        <RFAPosButton backgroundColor = {ColorThemes.mainOrange} backgroundHover = {ColorThemes.mainYellow} title={"Apply Now!"} link="/volunteer/volunteerapp" />
              <br/>
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                style={key === "one" ? ActiveStyle : inActiveStyle}
              >
                <p style={blackText}>Lead Instructor</p>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="two"
                style={key === "two" ? ActiveStyle : inActiveStyle}
              >
                <p style={blackText}>Teacher Assistant</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFATabsCardNoImage
                posHeader={"OVERVIEW"}
                borderColor = {ColorThemes.mainYellow}
                color = {ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{teacherOverviewJSON.overview}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFATabsCardRightImage
                posHeader={"SCHEDULING"}
                posImage={Calendar}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{teacherOverviewJSON.scheduling}</Markdown>
                    </p>
                  </div>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                posDescription={
                  <Markdown>{teacherOverviewJSON.tasks}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"CURRICULA"}
                posImage={Curriculum}
                posDescription={
                  <Markdown>{teacherOverviewJSON.curriculum}</Markdown>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"TIME COMMITMENT"}
                posImage={Clock}
                posDescription={
                  <Markdown>{teacherOverviewJSON.time_commitment}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFITS"}
                posImage={ThumbsUp}
                posDescription={
                  <Markdown>{teacherOverviewJSON.benefits}</Markdown>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"REQUIREMENTS"}
                posImage={Laptop}
                posDescription={
                  <Markdown>{teacherOverviewJSON.requirments}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                posImage={Presentation}
                posDescription={
                  <Markdown>{teacherOverviewJSON.beneficial_qualifications}</Markdown>
                }
              />
            </Tab.Pane>
            <Tab.Pane eventKey="two">
              <RFATabsCardNoImage
                posHeader={"OVERVIEW"}
                borderColor = {ColorThemes.mainYellow}
                color = {ColorThemes.mainYellow}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{taOverviewJSON.overview}</Markdown>

                    </p>
                  </div>
                }
              />
              <RFATabsCardRightImage
                posHeader={"SCHEDULING"}
                posImage={Calendar}
                posDescription={
                  <div>
                    <p>
                      <Markdown>{taOverviewJSON.scheduling}</Markdown>

                    </p>
                  </div>
                }
              />
              <RFATabsCardLeftImage
                posHeader={"TASKS"}
                posImage={TasksOrange}
                posDescription={
                  <Markdown>{taOverviewJSON.tasks}</Markdown>
                }
              />
              <RFATabsCardRightImage
                posHeader={"CURRICULA"}
                posImage={Curriculum}
                posDescription={
                  <Markdown>{taOverviewJSON.curriculum}</Markdown>

                }
              />
              <RFATabsCardLeftImage
                posHeader={"TIME COMMITMENT"}
                posImage={Clock}
                posDescription={
                  <Markdown>{taOverviewJSON.time_commitment}</Markdown>

                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFITS"}
                posImage={ThumbsUp}
                posDescription={
                  <Markdown>{taOverviewJSON.benefits}</Markdown>

                }
              />
              <RFATabsCardLeftImage
                posHeader={"REQUIREMENTS"}
                posImage={Laptop}
                posDescription={
                  <Markdown>{taOverviewJSON.requirments}</Markdown>

                }
              />
              <RFATabsCardRightImage
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                posImage={Presentation}
                posDescription={
                  <Markdown>{taOverviewJSON.beneficial_qualifications}</Markdown>
                }
              />
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <h2 className = "header-size" style={positionsTitle}>FAQs</h2>
      <Container>
        {volunteerFAQJSON.teacher_faq_list.map((QAPair) => (
          <RFAFAQDropdowns
            key={QAPair.question}
            question={QAPair.question}
            answer={QAPair.answer}
            colors = {{main: ColorThemes.mainOrange, light: ColorThemes.lightOrange, dark: ColorThemes.darkOrange, backgroundHover: ColorThemes.mainYellow}}
          />
        ))}
        <br/>
      </Container>
    </div>
  );
};

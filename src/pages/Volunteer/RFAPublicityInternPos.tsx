import React, { useState } from "react";
import { Container, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobOrange from "@/media/HeaderBlobs/orange.png";
import { RFAPositionCard } from "@/components/RFAPositionCard";
import { RFAPositionCard1 } from "@/components/RFAPositionCard1";
import { RFAPositionCard2 } from "@/components/RFAPositionCard2";
import { RFAPosButton } from "@/components/RFAPosButton";
import Clock from "@/media/Graphics/clock.png";
import Laptop from "@/media/Graphics/laptop.png";
import Presentation from "@/media/Graphics/presentation.png";
import TasksYellow from "@/media/Graphics/tasksYellow.png";
import ThumbsUp from "@/media/Graphics/thumbsUp.png";
import QuestionMark from "@/media/Graphics/questionMark.png";

export const RFAPublicityInternPos: React.FC = () => {
  const [key, setKey] = useState("one");
  const ActiveStyle = {
    color: "#000000",
    background: "#FFCC00",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const inActiveStyle = {
    color: "#000000",
    background: "#FA8D1F",
    border: 0,
    borderRadius: "15px 15px 0 0",
    fontFamily: "mazzard-h-extrabold",
    fontSize: "x-large",
    padding: "30px",
  };
  const black = {
    color: "#000000",
  };

  return (
    <div>
      <RFAHeader
        headerTextColor={"#FA8D1F"}
        image={headerBlobOrange}
        title={"Volunteer to Build Our Outreach!"}
        description={
          "Volunteer to help with graphic design, illustrations, and much much more!"
        }
      />
      <Container>
        <br></br>
        <br></br>
        <RFAPosButton title={"Apply Now!"} link="/volunteer/volunteerapp" />
        <br></br>
        <br></br>
        <Tab.Container activeKey={key} onSelect={(key) => setKey(key!)}>
          <Nav justify fill variant="tabs">
            <Nav.Item>
              <Nav.Link
                eventKey="one"
                className="pos"
                style={key === "one" ? ActiveStyle : inActiveStyle}
              >
                <p style={black}>Publicity Intern</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="one">
              <RFAPositionCard
                posHeader={"OVERVIEW"}
                posDescription={
                  <div>
                    <p>
                      Publicity Interns are specialized Business Development
                      Interns, who are specifically dedicated to helping the
                      publicity team. These volunteers are super important to
                      our organization, as they increase the professionalism and
                      personality of our whole organization with their talents.
                      You may apply in one of two categories: Graphic Design
                      (Puts graphics together into finished products like
                      Instagram posts, flyers, and much more), and Illustrators
                      (Illustrates new graphics). Please only apply if you are
                      skilled in one of the two above categories.
                    </p>
                  </div>
                }
              />
              <RFAPositionCard2
                posHeader={"TASKS"}
                posImage={TasksYellow}
                posDescription={
                  <div>
                    <p>
                      You are not required to know how to do all of these tasks,
                      but you must be able to do at least one specific task.
                    </p>
                    <ul>
                      <li>
                        Illustrate custom graphics for Robotics for All’s
                        website and graphic design team
                      </li>
                      <li>
                        Proficient in graphic design. Create various assemblies
                        of graphics including things like flyers, social media
                        posts, and more
                      </li>
                      <li>
                        Crafting short stories and videos for Robotics for All
                      </li>
                      <li>
                        Build connections with corporate companies and
                        organizations to form partnerships, host events and more
                      </li>
                      <li>
                        Other various Business Development Internship tasks
                      </li>
                    </ul>
                  </div>
                }
              />
              <RFAPositionCard1
                posHeader={"TIME COMMITMENT"}
                posImage={Clock}
                posDescription={
                  <ul>
                    <li>
                      The minimum time commitment for this position is 3 hours
                      per week, for one month
                    </li>
                    <li>
                      The total time commitment varies depending on which tasks
                      you take and time of year
                    </li>
                    <li>Interns are expected to attend bimonthly meetings</li>
                  </ul>
                }
              />
              <RFAPositionCard2
                posHeader={"BENEFITS"}
                posImage={ThumbsUp}
                posDescription={
                  <ul>
                    <li>
                      This is an unpaid position. Due to that, we can offer
                      community service hours
                    </li>
                    <li>
                      Interning with Robotics for All looks great on any resume,
                      whether applying for a future internship, job, or college
                    </li>
                    <li>
                      PotPotential future leadership opportunities (Robotics for
                      All board, etc.) may be offered.
                    </li>
                    <li>
                      Experience the satisfaction of improving your local
                      community.
                    </li>
                    <li>
                      Earn a recommendation letter from one of Robotics for
                      All's leadership members.
                    </li>
                  </ul>
                }
              />
              <RFAPositionCard1
                posHeader={"REQUIREMENTS"}
                posImage={Laptop}
                posDescription={
                  <ul>
                    <li>
                      9th grade or above (exceptions may be made, on occasion,
                      for 8th graders with a volunteering background)
                    </li>
                    <li>Consistent access to a computer and stable WiFi</li>
                    <li>Have skills in one of the following categories:</li>
                    <ul>
                      <li>Illustration (Creating Graphics)</li>
                      <li>Graphic Design (Putting graphics together)</li>
                    </ul>
                  </ul>
                }
              />
              <RFAPositionCard2
                posHeader={"BENEFICIAL QUALIFICATIONS"}
                posImage={Presentation}
                posDescription={
                  <ul>
                    <li>Strong communication skills</li>
                    <li>Good at working with teams</li>
                    <li>Strong work ethic and responsibility</li>
                    <li>Well organized</li>
                  </ul>
                }
              />
              <RFAPositionCard1
                posHeader={"QUESTIONS"}
                posImage={QuestionMark}
                posDescription={
                  <ul>
                    <li>
                      If you have any other questions, please visit our{" "}
                      <Link to = "/volunteer/volunteerfaq" style={black}>
                        intern FAQ's
                      </Link>
                    </li>
                    <li>
                      Please direct additional questions to{" "}
                      <a href="mailto:info@roboticsforall.net" style={black}>
                        info@roboticsforall.net
                      </a>
                    </li>
                  </ul>
                }
              />
              <br></br>
              <br></br>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

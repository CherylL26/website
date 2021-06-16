import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RFAHeader } from "@/components/RFAHeader";
import headerBlobYellow from "@/media/HeaderBlobs/yellow.png";
import { RFAMeetingEntry } from "@/components/RFAMeetingEntry";
import meetingRecordsListJSON from "@/posts/downloads/meeting_records.json";

export const RFAMeetingRecords: React.FC = () => {
  const background: React.CSSProperties = {
    background: "rgba(255, 204, 0, 0.5)",
    borderRadius: "15px",
  };
  const header: React.CSSProperties = {
    background: "rgba(255, 204, 0, 0.5)",
    borderRadius: "20px",
    border: "10px solid white",
    padding: "5px",
    fontFamily: "BeVietnam",
    fontSize: "xx-large",
    textAlign: "center",
    color: "black",
  };
  return (
    <div>
      <div>
        <RFAHeader
          headerTextColor={"#ffcc00"}
          image={headerBlobYellow}
          title={"Meeting Records"}
          description={
            "Learn more about Robotics for All's meeting agenda and minutes!"
          }
        />
      </div>
      <br></br>
      <br></br>
      <Container>
        <Row className="center-align">
          <Col xs={6} style={header}>
            Meeting Date and Time
          </Col>
          <Col xs={3} style={header}>
            Agenda
          </Col>
          <Col xs={3} style={header}>
            Minutes
          </Col>
        </Row>
      </Container>
      <Container style={background}>
        {meetingRecordsListJSON.meeting_records_list.map(
          (meeting_record_entry, i) => (
            <RFAMeetingEntry
              key={i}
              date={meeting_record_entry.date}
              agendaDownload={meeting_record_entry.agenda_file_path.replace(
                "/public",
                ""
              )}
              minutesDownload={meeting_record_entry.meeting_minute_file_path.replace(
                "/public",
                ""
              )}
            />
          )
        )}
      </Container>
    </div>
  );
};

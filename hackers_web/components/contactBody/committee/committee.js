import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import classes from "./committee.module.css";

export default function Committee() {
  /*
   * To change the commitee,
   * Change the link to images folder
   * make sure format of the all images are PNG
   * Make sure images are renamed with the post of the member (see 2021/2022 folder)
   * change names and links in below map (data)
   */

  let imgFolder = "/img/committees/2025/";

  let data = {
    senior_treasurer: {
      name: "Dr.Damayanthi Herath",
      linkedIn: "#",
      email: "#", 
    },
    president: { name: "Uthsara Wickramaarachchi", linkedIn: "#", email: "#" },
    vice_president: { name: "Ravindu Lakshan", linkedIn: "#", email: "#" },
    secretary: { name: "Bhagya senevirathna", linkedIn: "#", email: "#" },
    assistant_secretary: {
      name: "Nadeera Kothalawala",
      linkedIn: "#",
      email: "#",
    },
    editor: { name: "Dhinushika Abrew", linkedIn: "#", email: "#" },
    junior_treasurer: {
      name: "Lahiru Dinusha",
      linkedIn: "#",
      email: "#",
    },
    committee_member_1: { name: "Pasan Dissanayake", linkedIn: "#", email: "#" },
    committee_member_2: {
      name: "Dulshan Thilakarathne",
      linkedIn: "#",
      email: "#",
    },
    committee_member_3: { name: "Kavindu Gajendra", linkedIn: "#", email: "#" },
    committee_member_4: { name: "Shehan Gunasinha", linkedIn: "#", email: "#" },
    committee_member_5: { name: "Kaveesha Madhushan", linkedIn: "#", email: "#" },
    committee_member_6: {
      name: "Sithum Perera",
      linkedIn: "#",
      email: "#",
    },
  };

  return (
    <div className={`${classes["committee"]}`}>
      <Container>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "senior_treasurer.jpg",
              "SENIOR TREASURER",
              data["senior_treasurer"]["name"],
              data["senior_treasurer"]["linkedIn"],
              data["senior_treasurer"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "president.jpeg",
              "PRESIDENT",
              data["president"]["name"],
              data["president"]["linkedIn"],
              data["president"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "vice_president.jpg",
              "VICE PRESIDENT",
              data["vice_president"]["name"],
              data["vice_president"]["linkedIn"],
              data["vice_president"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "secretary.jpg",
              "SECRETARY",
              data["secretary"]["name"],
              data["secretary"]["linkedIn"],
              data["secretary"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "assistant_secretary.jpg",
              "ASSISTANT SECRETARY",
              data["assistant_secretary"]["name"],
              data["assistant_secretary"]["linkedIn"],
              data["assistant_secretary"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "editor.jpg",
              "EDITOR",
              data["editor"]["name"],
              data["editor"]["linkedIn"],
              data["editor"]["email"]
            )}
          </Col>
          <Col md={3} sm={6}>
            {buildMemberTile(
              imgFolder + "junior_treasurer.jpg",
              "JUNIOR TREASURER",
              data["junior_treasurer"]["name"],
              data["junior_treasurer"]["linkedIn"],
              data["junior_treasurer"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_1.jpg",
              "COMMITTEE MEMBER",
              data["committee_member_1"]["name"],
              data["committee_member_1"]["linkedIn"],
              data["committee_member_1"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_2.jpeg",
              "COMMITTEE MEMBER",
              data["committee_member_2"]["name"],
              data["committee_member_2"]["linkedIn"],
              data["committee_member_2"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "committee_member_3.jpg",
              "COMMITTEE MEMBER",
              data["committee_member_3"]["name"],
              data["committee_member_3"]["linkedIn"],
              data["committee_member_3"]["email"]
            )}
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_4.jpg",
              "COMMITTEE MEMBER",
              data["committee_member_4"]["name"],
              data["committee_member_4"]["linkedIn"],
              data["committee_member_4"]["email"]
            )}
          </Col>
          <Col md={4} sm={6}>
            {buildMemberTile(
              imgFolder + "committee_member_5.jpeg",
              "COMMITTEE MEMBER",
              data["committee_member_5"]["name"],
              data["committee_member_5"]["linkedIn"],
              data["committee_member_5"]["email"]
            )}
          </Col>
          <Col md={4} sm={12}>
            {buildMemberTile(
              imgFolder + "committee_member_6.jpg",
              "COMMITTEE MEMBER",
              data["committee_member_6"]["name"],
              data["committee_member_6"]["linkedIn"],
              data["committee_member_6"]["email"]
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function buildMemberTile(img, post, name, linkedIn, email) {
  return (
    <div className={`${classes["member"]}`}>
      <Image alt="members"
        src={`${img}`}
        width={150}
        height={150}
        className={`${classes["member_img"]}`}
      />
      <div>
        <p className={`${classes["member_name"]}`}>{`${name}`}</p>
        <p className={`${classes["member_post"]}`}>{`${post}`}</p>
      </div>
      <a href={linkedIn}>
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      </a>
      &nbsp;&nbsp;&nbsp;
      <a href={email}>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
      </a>
    </div>
  );
}

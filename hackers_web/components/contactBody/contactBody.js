import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import classes from "./contactbody.module.css";
import Committee from "./committee/committee";

export default function ContactBody() {
  return (
    <div>
      <Container>
        <Row>
          <Col md={6} className="text-center">
            <Image alt="contact-img"
              src="/img/contactus/contactus.jpg"
              width={500}
              height={500}
            />
          </Col>
          <Col md={6} className={`${classes["top-para"]}`}>
            <div>
              <h1>Feel free to express your thoughts!</h1>
              <p>
                If you feel there&apos;s something you need to tell us or if you have
                any new suggestion. Don&apos;t hesitate. we are much happy to have
                your feedback.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className={`${classes["committee-header"]}`}>
          <h6>OUR DEDICATED TEAM</h6>
          <h2>Executive Committee</h2>
          <h3>2025</h3>
        </Row>
        <Committee />
      </Container>
    </div>
  );
}

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  Education,
} from "../../Data";

 const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
  <Col lg="5">
    <h3 className="color_sec py-4">Skills</h3>
  </Col>
  <Col lg="7">
    <div className="skill-category">
      <h4>Frontend</h4>
      <Row className="" >
        {skills.frontend.map((skill, index) => (
          <Col key={index} xs="4" sm="4" md="4" className="mb-2 ">
            <p>{skill}</p>
          </Col>
        ))}
      </Row>
    </div>
    <div className="skill-category">
      <h4>Backend</h4>
      <Row>
        {skills.backend.map((skill, index) => (
          <Col key={index} xs="4" sm="4" md="4" className="mb-2">
            <p>{skill}</p>
          </Col>
        ))}
      </Row>
    </div>
    <div className="skill-category">
      <h4>Database</h4>
      <Row>
        {skills.database.map((skill, index) => (
          <Col key={index} xs="4" sm="4" md="4" className="mb-2">
            <p>{skill}</p>
          </Col>
        ))}
      </Row>
    </div>
    <div className="skill-category">
      <h4>Other</h4>
      <Row>
        {skills.other.map((skill, index) => (
          <Col key={index} xs="4" sm="4" md="4" className="mb-2">
            <p>{skill}</p>
          </Col>
        ))}
      </Row>
    </div>
  </Col>
</Row>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {Education.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="Eduction__title">{data.title}</h5>
                 <div className="Eduction_desc">
                 <span className="service_desc">{data.description}</span>
                 <span className="service_desc">{data.time}</span>
                 </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

export default About
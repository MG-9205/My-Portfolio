import React, { useState } from "react";
import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../Data";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Porject | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Project </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => (
            <div key={i} className="po_item">
              <img src={data.img} alt="" />
              <div className="content">
              
              <div id="button_h" className="ac_btn btn"  onClick={() => handleShowModal(data)}>
                      view Detail
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
              </div>
            </div>
          ))}
        </div>
       
        {/* Modal for Project Details */}
        {selectedProject && (
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{selectedProject.title || "Project Details"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="img-fluid mb-3"
              />
              <p>{selectedProject.description}</p>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                View Full Project
              </a>
            </Modal.Body>
           
          </Modal>
        )}
      </Container>
    </HelmetProvider>
  );
};

export default Project;

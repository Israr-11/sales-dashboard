// DashboardView.js
import React from "react";
import NavBar from "../../components/dashboard/navbar/NavBar";
import SideBar from "../../components/dashboard/sidebar/SideBarScreen";
import { Container, Row, Col } from "react-bootstrap";

const DashboardView = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} md={3} sm={12}> {/* Adjust column sizes for responsiveness */}
          <SideBar />
        </Col>
        <Col lg={10} md={9} sm={12}> {/* Adjust column sizes for responsiveness */}
          <NavBar />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardView;

// NavBar.js
import React from "react";
import { Nav, ListGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconSet from "../../common/IconSet";
import Image from "react-bootstrap/Image";

const NavBar = () => {
  return (
    <div>
      <Nav justify className="mt-3">
        <Nav.Item lg={3} md={3} sm={12}> {/* Adjust column sizes for responsiveness */}
          <ListGroup horizontal>
            <h4>Dashboard</h4>
          </ListGroup>
        </Nav.Item>
        <Nav.Item lg={5} md={6} sm={12}> {/* Adjust column sizes for responsiveness */}
          <ListGroup horizontal>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="search here ..."
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </ListGroup>
        </Nav.Item>
        <Nav.Item lg={2} md={2} sm={6}> {/* Adjust column sizes for responsiveness */}
          <ListGroup horizontal>
            <ListGroup.Item><FontAwesomeIcon icon={IconSet.flag} /></ListGroup.Item>
            <ListGroup.Item><h5>Eng(UK)</h5></ListGroup.Item>
            <ListGroup.Item><FontAwesomeIcon icon={IconSet.down} /></ListGroup.Item>
          </ListGroup>
        </Nav.Item>
        <Nav.Item lg={2} md={1} sm={6}> {/* Adjust column sizes for responsiveness */}
          <ListGroup horizontal>
            <ListGroup.Item><FontAwesomeIcon style={{color: "#FFA412", marginLeft:"5px"}} icon={IconSet.bell}/></ListGroup.Item>
            <ListGroup.Item> 
              <Image src="/images/profile1.png" fluid/>
            </ListGroup.Item>
            <ListGroup vertical style={{marginLeft:"-20px"}}>
              <ListGroup.Item><p style={{fontSize:"12px"}}>Israr</p></ListGroup.Item>
              <ListGroup.Item><p style={{fontSize:"8px", marginTop:"-35px"}}>Admin</p></ListGroup.Item>
            </ListGroup>
            <ListGroup.Item><FontAwesomeIcon icon={IconSet.down} /></ListGroup.Item>
          </ListGroup>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBar;

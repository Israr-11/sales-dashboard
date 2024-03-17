import React from "react";
import "../../../assets/styles/sideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconSet from "../../common/IconSet";
import { Nav, ListGroup } from "react-bootstrap";

const SideBar = () => {
    return (
        <Nav className="flex-column m-3">
          <ListGroup horizontal className="mb-4">
                <ListGroup.Item><FontAwesomeIcon icon={IconSet.toolbox} /></ListGroup.Item>
                <ListGroup.Item>  <h5>Admin</h5></ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item><FontAwesomeIcon icon={IconSet.dashboard} /></ListGroup.Item>
                <ListGroup.Item>  <p>Dashboard</p></ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.leaderboard} /> </ListGroup.Item>
                <ListGroup.Item> <p>Leaderboard</p> </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.order} /> </ListGroup.Item>
                <ListGroup.Item> <p>Order</p> </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.products} /> </ListGroup.Item>
                <ListGroup.Item> <p>Products</p> </ListGroup.Item>
            </ListGroup>


            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.salesReport} /> </ListGroup.Item>
                <ListGroup.Item> <p>Sales Report</p> </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.messages} /> </ListGroup.Item>
                <ListGroup.Item> <p>Messages</p> </ListGroup.Item>
            </ListGroup>

            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.settings} /> </ListGroup.Item>
                <ListGroup.Item> <p>Setting</p> </ListGroup.Item>
            </ListGroup>


            <ListGroup horizontal>
                <ListGroup.Item> <FontAwesomeIcon icon={IconSet.signout} /> </ListGroup.Item>
                <ListGroup.Item> <p>Signout</p> </ListGroup.Item>
            </ListGroup>

        </Nav>
    )
}

export default SideBar
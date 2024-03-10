import React from "react";
import "../../../assets/styles/sideBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconSet from "../../common/IconSet";
import { Nav,ListGroup } from "react-bootstrap";

const SideBar =()=>{
    return(
        <Nav className="flex-column">

       <ListGroup horizontal style={{border:"none", padding:"0"}}>
      <ListGroup.Item><FontAwesomeIcon icon={IconSet.dashboard}/></ListGroup.Item>
      <ListGroup.Item>  <p>Dashboard</p></ListGroup.Item>
      </ListGroup>
 

      

        <FontAwesomeIcon icon={IconSet.leaderboard} />            
            <p>Leaderboard</p>

        <FontAwesomeIcon icon={IconSet.order}/>
             <p>Order</p>

        <FontAwesomeIcon icon={IconSet.products}/>
        <p>Products</p>

        <FontAwesomeIcon icon={IconSet.salesReport}/>
        <p>Sales Report</p>

      <FontAwesomeIcon icon={IconSet.messages}/>
        <p>Messages</p>

       <FontAwesomeIcon icon={IconSet.settings}/>
        <p>Setting</p>

       <FontAwesomeIcon icon={IconSet.signout}/>
        <p>Signout</p>
        
        </Nav>
    )
}

export default SideBar
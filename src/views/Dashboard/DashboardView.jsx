import SideBar from "../../components/dashboard/sidebar/SideBar";
import { Container, Row, Col } from "react-bootstrap";

const DashboardView=()=>{
    return(
       <Container fluid>
        <Row>
            <Col>
            <SideBar/>
            </Col>
        </Row>
       </Container>
    )
}

export default DashboardView
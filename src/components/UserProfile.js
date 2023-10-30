import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userData = useSelector((state) => state.user.userProfile);
 

  return (
    <Container  className="profile" style={{ width: "60%", marginTop: '-10px', padding: '20px' }}>
      {/* {product && ( */}
      <Card className="my-3" style={{ margin: "auto" }}>
        <Card.Body>
          <Row>
            <Col sm={3}>
              <h6 className="mb-0">Full Name</h6>
            </Col>
            <Col sm={9} className="text-secondary">{userData[0].name}</Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <h6 className="mb-0">Email</h6>
            </Col>
            <Col sm={9} className="text-secondary">{userData[0].email}</Col>
          </Row>
          <hr />
          <Row>
            <Col sm={3}>
              <h6 className="mb-0">Phone</h6>
            </Col>
            <Col sm={9} className="text-secondary">{userData[0].phone}</Col>
          </Row>
          <hr />
    
          <Row>
            <Col sm={3}>
              <h6 className="mb-0">Address</h6>
            </Col>
            <Col sm={9} className="text-secondary">Bay Area, San Francisco, CA</Col>
          </Row>
        </Card.Body>
      </Card>
      {/* )} */}
    </Container>
  );
};

export default UserProfile;

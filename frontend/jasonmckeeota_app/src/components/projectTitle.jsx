import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProjectTitle({data}) {
  return (
    <div>
      <h1>
        <Container>
          <Row>
            <Col xs={3} sm={3} md={"auto"}>
        <img
          src={data.picture}
          alt="picture"
          className="fluid"
          style={{ height: "100px" }}
        />
        </Col>
        <Col >
        {data.title}
        </Col>
        </Row>
        </Container>
      </h1>
    </div>
  );
}

export default ProjectTitle;

import { Row, Col, Button, Card } from "antd";
import img from "./BPRO-img.png";

function Menu(props) {
  let { setShowMenu, setShowAbout } = props;
  return (
    <Row
      style={{ width: "100%", height: "100vh", backgroundImage: `url(${img})` }}
      align="middle"
      justify="center"
    >
      <Col>
        <Row justify="center" style={{ paddingBottom: "10px" }}>
          <Card style={{ backgroundColor: "#FEFFFE" }} size="small">
            <h1 style={{ color: "#394648" }}>Sereno's Fantastic Adventures</h1>
          </Card>
        </Row>

        <Row justify="center" style={{ paddingBottom: "10px" }}>
          <Button block onClick={() => setShowMenu(false)}>
            Play
          </Button>
        </Row>
        <Row justify="center">
          <Button
            block
            onClick={() => {
              setShowMenu(false);
              setShowAbout(true);
            }}
          >
            About
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default Menu;

import { Row } from "antd";

export default function ImageDisplay(props) {
  let { url } = props;

  return (
    <div style={{ height: "75%", width: "100%" }}>
      <Row justify="center" style={{ height: "100%", width: "100%" }}>
        <img
          src={url}
          style={{ objectFit: "cover", height: "100%", marginTop: "10px" }}
        />
      </Row>
    </div>
  );
}

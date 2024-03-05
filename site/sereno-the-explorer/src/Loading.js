import { LoadingOutlined } from "@ant-design/icons";
import { Row } from "antd";

export default function Loading() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row justify="center" align="middle">
        <LoadingOutlined style={{ fontSize: "25px", color: "#394648" }} />
      </Row>
    </div>
  );
}

import { Divider, Row, Col, Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ImageDisplay from "./ImageDisplay";
import { useRef, useState } from "react";
import Loading from "./Loading";
import { rogers } from "./Prompts";
import useImage from "./UseImage";
import useText from "./UseText";

const colors = ["#394648", "#FEFFFE", "#E9EBF8", "#B4B8C5", "#A5A299"];
const history = [{ role: "user", content: rogers }];

function ShowScreen(
  viewingStory,
  setViewingStory,
  slider,
  choices,
  scenario,
  setReloads,
  setLoading,
) {
  if (viewingStory) {
    return (
      <>
        <div onClick={() => setViewingStory(false)}>
          <Row style={{ width: "100%", height: "100" }} align="middle">
            <Col span={1} />
            <Col span={22}>
              <p>{scenario + " Click to continue..."}</p>
            </Col>
          </Row>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Row style={{ width: "100%", height: "100" }} align="middle">
            <Col align="middle" span={1}>
              <Button
                ghost
                shape="circle"
                onClick={() => {
                  if (slider.current !== null) slider.current.prev();
                }}
              >
                <LeftOutlined />
              </Button>
            </Col>
            <Col span={22}>
              <Carousel
                dots={false}
                ref={(ref) => {
                  slider.current = ref;
                }}
              >
                {choices.map((choice) => (
                  <p
                    onClick={() => {
                      setViewingStory(true);
                      history.push({
                        role: "user",
                        content:
                          "I chose: " +
                          choice +
                          " Give me the next round in the same format.",
                      });
                      setReloads((x) => x + 1);
                      setLoading(true);
                    }}
                  >
                    {choice}
                  </p>
                ))}
              </Carousel>
            </Col>
            <Col align="middle" span={1}>
              <Button
                ghost
                shape="circle"
                style={{ margin: "auto" }}
                onClick={() => {
                  if (slider.current !== null) slider.current.next();
                }}
              >
                <RightOutlined />
              </Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default function GameDisplay() {
  const imageUrl = useImage(rogers);
  let { choices, scenario, setReloads, loading, setLoading } = useText(history);
  const [viewingStory, setViewingStory] = useState(true);

  const slider = useRef();

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: colors[3] }}>
      <ImageDisplay url={imageUrl} />
      <Divider />
      {loading ? (
        <Loading />
      ) : (
        ShowScreen(
          viewingStory,
          setViewingStory,
          slider,
          choices,
          scenario,
          setReloads,
          setLoading,
        )
      )}
      </div>
  );
}

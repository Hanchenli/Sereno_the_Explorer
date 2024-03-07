import { Divider, Row, Col, Button, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ImageDisplay from "./ImageDisplay";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
import useText from "./UseText";

const history = [];

function ShowScreen(
  viewingStory,
  setViewingStory,
  slider,
  choices,
  scenario,
  reloads,
  setReloads,
  setLoading,
) {
  if (viewingStory) {
    return (
      <>
        <div
          onClick={() => {
            if (reloads < 10) {
              setViewingStory(false);
            } else {
              window.location.reload();
            }
          }}
        >
          <Row style={{ width: "100%", height: "100" }} align="middle">
            <Col span={1} />
            <Col span={22}>
              <p>
                {scenario +
                  (reloads < 10
                    ? " Click to continue..."
                    : " Click to play again...")}
              </p>
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
                    style={{ width: "100%" }}
                    onClick={() => {
                      setViewingStory(true);
                      history.push({
                        role: "user",
                        content:
                          "The user chooses" +
                          choice +
                          "Give the next round based on the following format, note that the colon around a word is very important: :Introduction: (introduction content), :A: (the first choice), :B: (the second choice), :C: (the third choice), :END: (ending content)",
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

export default function GameDisplay(props) {
  let { imageUrl, prompt } = props;
  useEffect(() => {
    history.push({role: "user", content: prompt});
  }, [prompt]);

  const [viewingStory, setViewingStory] = useState(true);
  let { choices, scenario, reloads, setReloads, loading, setLoading } = useText(history);

  const slider = useRef();

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: "#B4B8C5" }}>
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
          reloads,
          setReloads,
          setLoading,
        )
      )}
    </div>
  );
}

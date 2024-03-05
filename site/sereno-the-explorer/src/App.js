import { Carousel, Divider, Button, Row, Col } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import { rogers } from "./Prompts";
import OpenAI from "openai";

const colors = ["#394648", "#FEFFFE", "#E9EBF8", "#B4B8C5", "#A5A299"];

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

const history = [{ role: "user", content: rogers }];

function ShowLoading() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Row justify="center" align="middle">
        <LoadingOutlined style={{ fontSize: "25px", color: "#394648" }} />
      </Row>
    </div>
  );
}

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

function App() {
  const [viewingStory, setViewingStory] = useState(true);
  const [choices, setChoices] = useState([]);
  const [scenario, setScenario] = useState("");
  const [reloads, setReloads] = useState(0);
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");
  const slider = useRef();

  useEffect(() => {
    (async () => {
      const imageCreation = await openai.images.generate({
        model: "dall-e-3",
        prompt: rogers,
        n: 1,
        size: "1792x1024",
      });

      setImageUrl(imageCreation.data[0].url);
    })();
  }, [])

  useEffect(() => {
    (async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages: history,
        model: "gpt-3.5-turbo",
      });

      if (chatCompletion !== null) {
        history.push(chatCompletion.choices[0].message);

        const introStart =
          chatCompletion.choices[0].message.content.indexOf(":Introduction:");
        const aStart = chatCompletion.choices[0].message.content.indexOf(":A:");
        const bStart = chatCompletion.choices[0].message.content.indexOf(":B:");
        const cStart = chatCompletion.choices[0].message.content.indexOf(":C:");
        const end = chatCompletion.choices[0].message.content.indexOf(":END:");
        const scenario = chatCompletion.choices[0].message.content.substring(
          introStart + ":Introduction:".length,
          aStart,
        );
        const a = chatCompletion.choices[0].message.content
          .substring(aStart + ":A:".length, bStart)
          .trim();
        const b = chatCompletion.choices[0].message.content
          .substring(bStart + ":B:".length, cStart)
          .trim();
        const c = chatCompletion.choices[0].message.content
          .substring(cStart + ":C:".length, end)
          .trim();

        setScenario(scenario);
        setChoices([a, b, c]);
        setLoading(false);
      }
    })();

    return () => {};
  }, [reloads]);

  return (
    <div style={{ height: "100vh", width: "100%", backgroundColor: colors[3] }}>
      <div style={{ height: "80%", width: "100%" }}>
        <Row justify="center" style={{ height: "100%", width: "100%" }}>
          <img
            src={imageUrl}
            style={{ objectFit: "cover", height: "100%", marginTop: "10px" }}
          />
        </Row>
      </div>
      <Divider />

      {loading
        ? ShowLoading()
        : ShowScreen(
            viewingStory,
            setViewingStory,
            slider,
            choices,
            scenario,
            setReloads,
            setLoading,
          )}
    </div>
  );
}

export default App;

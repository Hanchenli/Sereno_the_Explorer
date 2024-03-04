import { Carousel, Card, Divider, Button, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import './App.css';
import { useRef, useState } from "react";

const currentScenario = "You've just landed on a planet unknown to most space travelers. The atmosphere is thick with xeno gas, making the air shimmer with an eerie glow. The low gravity makes every step feel like a slow-motion leap, and as you look around, you see the dense vegetation moving – not from the wind, but from the countless reptiles, including crocodiles, that call this planet home. You start with 10 hit points. What is your first move on this alien world?"
const choices = ["card content 1", "card content 2", "card content 3"]
const colors = ["#394648", "#FEFFFE", "#E9EBF8", "#B4B8C5", "#A5A299"]


function ShowScreen(viewingStory, setViewingStory, setChoice, slider) {
  if(viewingStory) {
    return (
      <>
        <div style={{height: "80%", width: "100%"}}>

        </div>
        <div onClick={() => setViewingStory(false)}>
          <Divider></Divider>
          <p>{currentScenario + " Click to continue..."}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{height: "80%", width: "100%"}}>

        </div>
        <div>
          <Divider/>
          <Row style={{width:"100%", height:"100"}} align="middle">
            <Col align="middle" justify="center" span={1}>
            <Button ghost shape="circle" onClick={() => {
              if(slider.current !== null) slider.current.prev();
            }}><LeftOutlined /></Button>
            </Col>
            <Col span={22}>
            <Carousel dots={false} ref={ref => {
              console.log(ref);
              slider.current = ref;
            }}>
              {choices.map(choice => 
                <p onClick={() => {
                  setViewingStory(true);
                  setChoice(choice)
                }}>{choice}</p>
              )}
            </Carousel>
            </Col>
            <Col align="middle" span={1}>
            <Button ghost shape="circle" style={{margin: "auto"}} onClick={() => {
              if(slider.current !== null) slider.current.next();
            }}><RightOutlined /></Button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

function App() {
  const [viewingStory, setViewingStory] = useState(true);
  const [choice, setChoice] = useState("");
  const slider = useRef();

  return (
    <div style={{height: "100vh", width: "100%", backgroundColor: colors[3]}}>
      {ShowScreen(viewingStory, setViewingStory, setChoice, slider)}
    </div>
  );
}

export default App;

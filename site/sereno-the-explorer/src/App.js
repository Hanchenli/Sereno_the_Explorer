import { useState } from "react";
import "./App.css";
import GameDisplay from "./GameDisplay";
import Menu from "./Menu.js";
import { rogers, sereno, london } from "./Prompts";
import useImage from "./UseImage.js";
import Loading from "./Loading.js";
import img from "./BPRO-img.png";
import { Row } from "antd";
import About from "./About.js";

const prompts = [rogers, sereno, london];
export const prompt = prompts[Math.floor(Math.random() * prompts.length)];

function App() {
  const imageUrl = useImage(prompt);
  let [showMenu, setShowMenu] = useState(true);
  let [showAbout, setShowAbout] = useState(false);
  if (showMenu)
    return <Menu setShowMenu={setShowMenu} setShowAbout={setShowAbout} />;
  if (showAbout)
    return <About setShowMenu={setShowMenu} setShowAbout={setShowAbout} />;
  if (imageUrl === "") {
    return (
      <Row
        style={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${img})`,
        }}
        align="middle"
        justify="center"
      >
        <Loading />
      </Row>
    );
  }
  return <GameDisplay imageUrl={imageUrl} prompt={prompt} />;
}

export default App;

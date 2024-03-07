import { Card, Row, Col, Button } from "antd";
import img from "./BPRO-img.png";
import { ArrowLeftOutlined } from "@ant-design/icons";

function About(props) {
  let { setShowMenu, setShowAbout } = props;
  return (
    <Row
      style={{ width: "100%", height: "100vh", backgroundImage: `url(${img})` }}
    >
      <Button
        ghost
        style={{ marginLeft: "20px", marginTop: "20px" }}
        onClick={() => {
          setShowAbout(false);
          setShowMenu(true);
        }}
      >
        <ArrowLeftOutlined />
      </Button>
      <Row justify="center">
        <Col style={{ width: "80%" }}>
          <Row justify="center">
            <h1 style={{ color: "#394648" }}>About</h1>
          </Row>
          <Row justify="center" style={{ paddingBottom: "10px" }}>
            <Card size="small">
              <p style={{ color: "#394648" }}>
                Our shared project is all about taking a space adventure, which
                consists of a choose-your-own-adventure game utilizing
                generative AI. We have designed an interactive puzzle experience
                where players examine exoplanets and conditions for habitable
                life, as well as work through the possible first-contact
                instances. Within given boundaries, we write up extensive
                prompts and deliver them to generative AI to allow the players
                to examine stages of the search for extraterrestrial life, where
                they could interact with every step along the way. We placed
                this on a website, made it a click and text-based adventure, and
                incorporated Dall-E technology. To keep things balanced, we
                created a logic pipeline that directs AI behavior
                round-by-round, keeping the AI from allowing the player to make
                whatever decisions they want, whenever they want. We wanted to
                include these parts because the class has led us to understand
                that no one moment is most important in establishing first
                contact, be it the moment of contact itself, the completion of a
                surface mission, or the investigation of various exoplanets but
                all of those moments together.
              </p>
            </Card>
          </Row>
          <Row justify="center" style={{ paddingBottom: "10px" }}>
            <Card size="small">
              <p style={{ color: "#394648" }}>
                Our project contains three different parts involved in different
                portions of the course with the three professors as playable
                characters: Leslie Rogers, Paul Sereno, and Sarah London. The
                first portion involves building the ideal exoplanet for
                investigation using Leslie Rogers as the main character. The
                game allows users to make choices that impact the planetary
                landscapes, aligning with Rogers' teachings on planetary
                formations. Paul Sereno is the protagonist of the
                paleontological journey on the exoplanet itself, exploring
                fossilized clues and answering questions about alien terrains.
                Sarah London leads players in communication with intelligent
                life forms in the hopes that first contact – or first conflict –
                is initiated between the player and the alien.
              </p>
            </Card>
          </Row>
          <Row justify="center">
            <Card size="small">
              <p style={{ color: "#394648" }}>
                Here is a note to you all as players. Since this game is written
                harnessing the power of generative AI, it is possible that
                something nonsensical can be generated. As we discussed with
                Professor Zhao, large language models just predict the word that
                is most likely to follow the string of words that is already
                written. So, any input that we give a large language model can
                be distorted over the course of a game. There is no way for us
                to correct this. If we could, we'd probably have quite the
                research paper on our hands. If you run into a nonsensical
                situation like this, please just refresh your page and try
                again.
              </p>
            </Card>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}

export default About;

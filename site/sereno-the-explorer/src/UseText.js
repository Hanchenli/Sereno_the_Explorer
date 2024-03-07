import { useEffect, useState } from "react";
import useOpenAI from "./UseOpenAI";

const useText = (history) => {
  const [choices, setChoices] = useState([]);
  const [scenario, setScenario] = useState("");
  const [reloads, setReloads] = useState(0);
  const [loading, setLoading] = useState(true);
  const openai = useOpenAI();

  useEffect(() => {
    (async () => {
      if (reloads === 10) {
        history.push({
          role: "user",
          content:
            "Now ten rounds are over, rate my performace with a numerical score and explanation. Start the comment with :Introduction: and end with :A:",
        });
      }
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
          aStart === -1 ? chatCompletion.choices[0].message.length : aStart,
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
  }, [reloads, history, openai.chat.completions]);

  return {
    choices: choices,
    setChoices: setChoices,
    scenario: scenario,
    setScenario: setScenario,
    reloads: reloads,
    setReloads: setReloads,
    loading: loading,
    setLoading: setLoading,
  };
};

export default useText;

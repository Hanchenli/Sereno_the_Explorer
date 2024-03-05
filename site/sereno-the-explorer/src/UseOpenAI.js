import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

const useOpenAI = () => {
  return openai;
};

export default useOpenAI;

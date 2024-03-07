import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const useOpenAI = () => {
  return openai;
};

export default useOpenAI;

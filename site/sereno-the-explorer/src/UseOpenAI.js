import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const useOpenAI = () => {
  return openai;
};

export default useOpenAI;

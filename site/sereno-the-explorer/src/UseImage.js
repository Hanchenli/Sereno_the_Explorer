import { useEffect, useState } from "react";
import useOpenAI from "./UseOpenAI.js";

const useImage = (imagePrompt) => {
  const [imageUrl, setImageUrl] = useState("");
  const openai = useOpenAI();

  useEffect(() => {
    (async () => {
      const imageCreation = await openai.images.generate({
        model: "dall-e-3",
        prompt: imagePrompt,
        n: 1,
        size: "1792x1024",
      });

      setImageUrl(imageCreation.data[0].url);
    })();
  }, [imagePrompt, openai.images]);

  return imageUrl;
};

export default useImage;

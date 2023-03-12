import { Configuration, OpenAIApi } from "openai";

export const OpenAI = () => {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  );

  return openai;
};

/**
 * recursive depth first search to return a list of object subtrees
 * at a certain level.
 */
export function objectSubtrees(data: any, levelsLeft: number): any[] {
  if (levelsLeft === 0) {
    return [data];
  }

  if (Array.isArray(data)) {
    const ret = data.flatMap((item) => objectSubtrees(item, levelsLeft - 1));
    return ret;
  }

  if (typeof data === "object") {
    const ret = Object.entries(data).flatMap(([key, value]) => {
      return objectSubtrees(value, levelsLeft - 1).map((subtree) => ({
        [key]: subtree,
      }));
    });
    return ret;
  }

  return [data];
}

export const getAide = async (input) => {
  const openai = new OpenAIApi(
    new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    })
  );

  const prompt = `Data:
  ${input}
  
  Write a paragraph using all of the following data. PLEASE USE EVERY FIELD!
  `;

  const { data } = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 3000,
    temperature: 0.1,
    presence_penalty: 0,
    frequency_penalty: 0,
    best_of: 1,
    n: 1,
    stream: false,
  });

  return data.choices[0].text;
};

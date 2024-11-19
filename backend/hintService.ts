import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const getHint = async (question: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Provide a hint for guessing the price of a ${question}`,
    max_tokens: 50,
  });
  return response.data.choices[0].text.trim();
};

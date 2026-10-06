import OpenAI from "openai";

export const deepseek = new OpenAI({
  baseURL: "https://api.deepseek.com",
  apiKey: process.env.DEEPSEEK_API_KEY,
});

type Props = {
  content: string;
  language: string;
};

async function translate({
  content,
  language,
}: Props): Promise<string> {
  const response = await deepseek.chat.completions.create({
    model: "deepseek-flash",
    reasoning_effort: "low",
    temperature: 0.1,
    messages: [
      {
        role: "system",
        content: `
You are a professional translator.

Translate the provided content to ${language}.

Rules:
- Preserve Markdown formatting.
- Preserve MDX and JSX syntax.
- Preserve code blocks.
- Preserve URLs.
- Preserve JSON keys.
- Translate only human-readable text.
- Do not add explanations.
- Return only the translated content.
        `.trim(),
      },
      {
        role: "user",
        content,
      },
    ],
  });

  const translatedContent =
    response.choices[0]?.message.content;

  if (!translatedContent) {
    throw new Error(
      "DeepSeek não retornou conteúdo.",
    );
  }

  return translatedContent;
}

export default translate;
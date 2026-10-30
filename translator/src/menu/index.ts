type Language = {
  code: string;
  label: string;
};

const languages: Language[] = [
  { code: "en", label: "English (US)" },
  // { code: "en-GB", label: "English (UK)" },
  // { code: "pt", label: "Portuguese (Portugal)" },
  // { code: "pt-BR", label: "Portuguese (Brazil)" },
  { code: "es", label: "Spanish (Spain)" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "it", label: "Italian" },
  { code: "nl", label: "Dutch" },
  { code: "pl", label: "Polish" },
  { code: "ru", label: "Russian" },
  { code: "ro", label: "Romanian" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "zh-CN", label: "Chinese" },
];

export function selectLanguage(): Language {
  console.log("\nEscolha o idioma de destino:\n");

  languages.forEach((language, index) => {
    console.log(`${index + 1}. ${language.label}`);
  });

  const answer = prompt("\nIdioma:");

  if (!answer) {
    throw new Error("Nenhum idioma selecionado.");
  }

  const selectedLanguage = languages[Number(answer) - 1];

  if (!selectedLanguage) {
    throw new Error("Opção inválida.");
  }

  return selectedLanguage;
}
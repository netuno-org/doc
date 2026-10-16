type Language = {
  code: string;
  label: string;
};

const languages: Language[] = [
  { code: "en", label: "English (US)" },
  { code: "en-GB", label: "English (UK)" },
  { code: "pt", label: "Português (Portugal)" },
  { code: "pt-BR", label: "Português (Brasil)" },
  { code: "es", label: "Español (España)" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "ro", label: "Română" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "zh-CN", label: "简体中文" },
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
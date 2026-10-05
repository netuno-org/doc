type Language = {
  code: string;
  label: string;
};

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "ro", label: "Română" },
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
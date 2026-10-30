// Fenced code blocks and inline code are left untouched
const FENCE = /(```[\s\S]*?```|~~~[\s\S]*?~~~)/g;
const INLINE_CODE = /(`[^`\n]*`)/g;

// A bare URL, not inside a link, href, src or code
const BARE_URL = /(?<![(\[<"'=`])https?:\/\/[^\s<]*/g;

// 。，：；！？、）「」 and other punctuation that isn't ASCII
const WIDE_PUNCTUATION = /[^\x00-\x7F](?<=[\p{P}\p{S}])/u;

// Trailing punctuation that Markdown already leaves out of the URL
const TRAILING = /[*_~.,:;!?'"]+$/;

// Markdown only leaves ASCII punctuation out of a bare URL, so in Chinese and
// Japanese the 。 or ， glued to it become part of the URL and break the build.
// Those URLs are written as an explicit link instead.
export function separateBareUrls(content: string) {
  return content
    .split(FENCE)
    .map((part, index) => {
      // split() with a capture group puts the fenced blocks at odd indexes
      if (index % 2 === 1) return part;

      return part
        .split(INLINE_CODE)
        .map((text, textIndex) => {
          if (textIndex % 2 === 1) return text;

          return text.replace(BARE_URL, (candidate) => {
            const cut = candidate.search(WIDE_PUNCTUATION);

            if (cut === -1) {
              return candidate;
            }

            const url = candidate.slice(0, cut).replace(TRAILING, "");

            if (/^https?:\/\/$/.test(url)) {
              return candidate;
            }

            return `[${url}](${url})${candidate.slice(url.length)}`;
          });
        })
        .join("");
    })
    .join("");
}

import React from 'react';
import { translations, type Lang } from './translations';

/** Returns translated string */
export function t(obj: Record<Lang, string>, lang: Lang): string {
  return obj[lang] ?? obj['ja'];
}

/** Renders translated string with \n as <br /> tags (same as original inline <br />) */
export function TB({ text, lang }: { text: Record<Lang, string>; lang: Lang }) {
  const str = t(text, lang);
  const parts = str.split('\n');
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export { translations, type Lang };

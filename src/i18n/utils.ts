import { translations, type Lang } from './translations';

export function t(obj: Record<Lang, string>, lang: Lang): string {
  return obj[lang] ?? obj['ja'];
}

export { translations, type Lang };

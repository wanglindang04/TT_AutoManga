import { useProjectStore } from '../store/projectStore';
import { translations } from '../i18n';
import type { TranslationKeys } from '../i18n';

export function useTranslation() {
  const language = useProjectStore((state) => state.settings.language) || 'vi';
  
  const t = (translations[language as keyof typeof translations] || translations.vi) as TranslationKeys;
  
  return {
    t,
    language,
  };
}

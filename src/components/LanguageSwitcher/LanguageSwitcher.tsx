'use client';

import setCookie from '@/i18n/setCookie';
import { useRouter, usePathname } from 'next/navigation';
import './LanguageSwitcher.scss';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (locale: string) => {
    setCookie('LANGUAGE', locale);
    router.push(`/${locale}${pathname?.replace(/^\/(en|ru)/, '')}`);
  };

  return (
    <div className="language-switcher">
      <button
        className="language-switcher__button"
        onClick={() => changeLanguage('en')}
      >
        English <i className="bi bi-translate"></i>
      </button>
      <button
        className="language-switcher__button"
        onClick={() => changeLanguage('ru')}
      >
        Русский <i className="bi bi-translate"></i>
      </button>
    </div>
  );
}

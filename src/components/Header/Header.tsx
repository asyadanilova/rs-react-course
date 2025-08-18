'use client';

import './Header.scss';
import { useTheme } from '../../hooks/useTheme';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import nextIntlConfig from '../../../next-intl.config';

const Header = () => {
  const t = useTranslations();
  const { Link } = createNavigation(nextIntlConfig);
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navButtons = () => (
    <ul className="nav_button">
      <li>
        <Link href="/" className="nav-link">
          <i className="bi bi-house"></i> {t('header.home')}
        </Link>
      </li>
      <li>
        <Link href="/about" className="nav-link">
          <i className="bi bi-info-circle"></i> {t('header.about')}
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="header">
      <Link href="/" className="header__logo-link">
        <Image
          src="/graduation-cap.png"
          alt="Site Icon"
          className="header__logo-icon"
          width={32}
          height={32}
          unoptimized
        />
        <span className="header__app-name">{t('header.appName')}</span>
      </Link>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <nav>{navButtons()}</nav>
        <div
          className="toggle-theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <BsSunFill /> : <BsMoonFill />}
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export { Header };

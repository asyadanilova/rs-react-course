'use client';

import { useTranslations } from 'next-intl';
import './Footer.scss';

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="footer">
      <p className="team-text">
        {t('footer.team')}:{' '}
        <a
          href="https://github.com/AsyaDanilova"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asya <i className="bi bi-github"></i>
        </a>
      </p>
      <p data-testid="year-test">
        &copy; 2025 My University Search. {t('footer.copyright')}
      </p>
      <small>{t('footer.poweredBy')}</small>
    </footer>
  );
};

export { Footer };

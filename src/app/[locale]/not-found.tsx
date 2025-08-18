'use client';

import { useTranslations } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import nextIntlConfig from '../../../next-intl.config';
import Image from 'next/image';

export default function NotFound() {
  const t = useTranslations();
  const { Link } = createNavigation(nextIntlConfig);

  return (
    <div className="not-found-page">
      <h1>404 - {t('notFound.title', { defaultValue: 'Page Not Found' })}</h1>
      <Image
        src="/404-page.png"
        className="not-found-image"
        alt=""
        width={400}
        height={300}
        unoptimized
      />
      <p>
        {t('notFound.description', {
          defaultValue: "Oops! The page you're looking for does not exist.",
        })}
      </p>
      <Link href={`/`} className="home-link">
        <button>
          {t('notFound.goHome', { defaultValue: 'Go back to Home' })}
        </button>
      </Link>
    </div>
  );
}

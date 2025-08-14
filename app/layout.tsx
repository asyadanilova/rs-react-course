'use client';

import { store } from '../src/store/store';
import { Provider } from 'react-redux';
import '../src/index.scss';
import { ThemeProvider } from '../src/context/ThemeContext';
import { NextIntlClientProvider } from 'next-intl';
import { MESSAGES, SUPPORTED_LOCALES } from '../src/utils/consts';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale =
    params?.locale && SUPPORTED_LOCALES.includes(params.locale)
      ? params.locale
      : 'en';
  const messages = MESSAGES[locale];

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/graduation-cap.png" />
      </head>
      <body>
        <div className="root">
          <Provider store={store}>
            <ThemeProvider>
              <NextIntlClientProvider
                locale={locale}
                messages={messages}
                timeZone="Europe/Moscow"
              >
                {children}
              </NextIntlClientProvider>
            </ThemeProvider>
          </Provider>
        </div>
      </body>
    </html>
  );
}

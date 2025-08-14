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
  const { locale } = params;
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en';
  const messages = MESSAGES[safeLocale];

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
                locale={safeLocale}
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

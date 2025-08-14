'use client';
import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { Provider } from 'react-redux';
import { store } from '../../src/store/store';
import { ThemeProvider } from '../../src/context/ThemeContext';
import en from '../../messages/en.json';
import ru from '../../messages/ru.json';
import '../../src/index.scss';

const MESSAGES: Record<string, typeof en | typeof ru> = { en, ru };
const SUPPORTED_LOCALES = ['en', 'ru'];

export default function ResultsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  const safeLocale = SUPPORTED_LOCALES.includes(locale) ? locale : 'en';
  const messages = MESSAGES[safeLocale];

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NextIntlClientProvider
          locale={safeLocale}
          messages={messages}
          timeZone="Europe/Moscow"
        >
          <main>{children}</main>
        </NextIntlClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

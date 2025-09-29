import '../index.scss';
import { ThemeProvider } from '../context/ThemeContext';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import StoreProvider from './StoreProvider';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/graduation-cap.png" />
        <title>GlobalCampus</title>
      </head>
      <body>
        <div className="root">
          <StoreProvider>
            <ThemeProvider>
              <NextIntlClientProvider messages={messages}>
                {children}
              </NextIntlClientProvider>
            </ThemeProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}

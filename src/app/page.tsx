import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/en/1');
  return null;
}

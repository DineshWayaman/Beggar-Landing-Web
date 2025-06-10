import { Metadata } from 'next';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: 'Welcome to Beggar Online - Play Strategic Card Game with Friends',
  description: 'Experience the thrill of Beggar Online, a strategic multiplayer card game with voice chat. Play with friends, use special abilities, and climb the ranks!',
  keywords: ['beggar card game', 'multiplayer card game', 'online strategy game', 'voice chat game'],
  alternates: {
    canonical: 'https://playbeggar.online'
  }
};

export default function Page() {
  return <HomeContent />;
}

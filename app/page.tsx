'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c2e]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <Image
                src="/img/icon.png"
                alt="Beggar Online"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-bold text-xl">Beggar Online</span>
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</a>
              <Link href="/how-to-play" className="text-gray-300 hover:text-yellow-400 transition-colors">How to Play</Link>
              <Link href="/features" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</Link>
              <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link>
              <a href="#download" className="text-gray-300 hover:text-yellow-400 transition-colors">Download</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Play Now Button */}
            <a 
              href="https://playbeggar.online/gameplay/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-2 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20 text-center"
            >
              Play Now
            </a>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pt-4 pb-3 border-t border-white/10 mt-4`}>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link>
              <Link href="/how-to-play" className="text-gray-300 hover:text-yellow-400 transition-colors">How to Play</Link>
              <Link href="/features" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</Link>
              <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link>
              <Link href="#download" className="text-gray-300 hover:text-yellow-400 transition-colors">Download</Link>
              <Link 
                href="https://playbeggar.online/gameplay/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-3 px-6 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20 text-center w-full"
              >
                Play Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 mt-20">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Welcome to Beggar Online
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the thrill of Beggar with strategic card play and exciting online matches with players worldwide!
          </p>
          <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://playbeggar.online/gameplay/" target="_blank" rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-2.5 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20 text-lg"
            >
              Play Now
            </a>
            <a href="#" 
              className="group bg-[#1a1b1e] hover:bg-[#2d2e33] px-4 py-2.5 rounded-xl flex items-center justify-center gap-4 transform hover:scale-105 transition-all duration-300 border border-white/10 w-full md:w-auto"
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                className="text-2xl group-hover:scale-110 transition-transform text-[#32DE84]" 
                height="1em" 
                width="1em" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
              </svg>
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">GET IT ON</p>
                <p className="text-base font-semibold text-white">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Character Classes */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "👑", title: "KING", desc: "Lead with authority and strategy" },
            { icon: "🧠", title: "WISE", desc: "Use cunning and wit to advance" },
            { icon: "🧢", title: "CIVILIAN", desc: "Blend in and survive" },
            { icon: "🥺", title: "BEGGAR", desc: "Rise from the bottom to triumph" },
          ].map((role) => (
            <div key={role.title} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="text-4xl mb-4">{role.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{role.title}</h3>
              <p className="text-gray-300">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-yellow-400">A Multiplayer Card Game Like No Other!</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Join up to 6 players in this exciting strategic card game with built-in voice chat for real-time fun and strategy!
              </p>
            </div>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3 text-gray-300">
                <span className="bg-yellow-500/20 p-2 rounded-lg">🎮</span>
                Play with friends anytime, anywhere
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="bg-yellow-500/20 p-2 rounded-lg">🎤</span>
                Built-in voice chat for immersive gameplay
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="bg-yellow-500/20 p-2 rounded-lg">🃏</span>
                Strategic gameplay with unique roles
              </li>
            </ul>
            
            <a href="https://playbeggar.online/gameplay/" target="_blank" rel="noopener noreferrer" 
              className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-bold py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-500/20">
              Play Now
            </a>
          </div>
          
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/img/icon.png"
              alt="Beggar Online Game Preview"
              fill
              className="object-cover hover:scale-110 transition-all duration-500"
              priority
            />
          </div>
        </div>

        {/* Game Rules Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">How to Play</h2>
            <p className="text-gray-300 text-lg">Master the game with these simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Setup & Roles",
                desc: "Join a room with 2-6 players. Each player gets a random role: King, Wise, Civilian, or Beggar.",
                icon: "🎲"
              },
              {
                step: "2",
                title: "Card Distribution",
                desc: "Cards are dealt equally. Your goal is to get rid of all your cards first!",
                icon: "🃏"
              },
              {
                step: "3",
                title: "Game Flow",
                desc: "Play cards in ascending order. Use special powers based on your role.",
                icon: "♠️"
              },
              {
                step: "4",
                title: "Special Moves",
                desc: "Kings can reset the game, Wise can peek at others' cards, and more!",
                icon: "✨"
              },
              {
                step: "5",
                title: "Voice Chat",
                desc: "Communicate with players, form alliances, and outsmart opponents.",
                icon: "🎤"
              },
              {
                step: "6",
                title: "Victory",
                desc: "First player to empty their hand wins! Different roles earn different points.",
                icon: "👑"
              }
            ].map((item) => (
              <div key={item.step} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{item.icon}</span>
                  <div>
                    <div className="bg-yellow-500/20 text-yellow-400 text-sm font-semibold px-3 py-1 rounded-full w-fit mb-2">
                      Step {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-500/10 to-amber-600/10 p-8 md:p-12">
          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                Take Beggar Online
                <span className="block text-yellow-400">Everywhere You Go</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Download our mobile app and enjoy the game on the go. Challenge friends and players worldwide, anytime, anywhere!
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="group bg-[#1a1b1e] hover:bg-[#2d2e33] px-6 py-4 rounded-2xl flex items-center gap-4 transform hover:scale-105 transition-all duration-300 border border-white/10"
                >
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 512 512" 
                    className="mr-2 sm:mr-3 text-2xl sm:text-3xl group-hover:scale-110 transition-transform text-[#32DE84]" 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">GET IT ON</p>
                    <p className="text-base font-semibold text-white">Google Play</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-yellow-500/20 border-2 border-yellow-400"></div>
                  ))}
                </div>
                <p className="text-sm">Join 10k+ players worldwide</p>
              </div>
            </div>
            <div className="relative h-[500px] hidden md:block">
              <iframe
                src="https://www.youtube.com/embed/FIO2M6xdh2o"
                title="Beggar Online Game Preview"
                className="w-full h-full rounded-2xl transform -rotate-12 hover:rotate-0 transition-all duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="mt-24 border-t border-white/10 pt-12">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Beggar Online</h3>
              <p className="text-gray-400 text-sm">Experience the thrill of strategic card gaming with friends worldwide.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">How to Play</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Download App</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Report Bug</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors hover:text-yellow-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Beggar Online. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

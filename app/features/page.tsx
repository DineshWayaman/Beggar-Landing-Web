import Link from "next/link";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1c2e] to-[#2a2c3e] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1c2e]/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <span className="font-bold text-xl">← Back to Home</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 mt-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            Game Features
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Multiplayer Support",
                desc: "Play with 2-6 players in real-time. Create private rooms or join public matches.",
                icon: "👥"
              },
              {
                title: "Single Player Mode",
                desc: "Practice your skills against AI opponents with varying difficulty levels.",
                icon: "🎮"
              },
              {
                title: "In-Game Chat",
                desc: "Built-in voice and text chat for strategic discussions and social interaction.",
                icon: "💬"
              },
              {
                title: "Role-Based Gameplay",
                desc: "Dynamic roles with unique abilities: King, Wise, Civilian, and Beggar.",
                icon: "👑"
              }
            ].map((feature) => (
              <div key={feature.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Gameplay Features</h2>
          <div className="space-y-6">
            {[
              {
                title: "Strategic Card Play",
                desc: "Play cards in ascending order, use special powers, and outsmart opponents with tactical moves.",
                items: [
                  "Multiple card patterns: Singles, Consecutive, and Groups",
                  "Suit-based gameplay for advanced strategies",
                  "Special Joker cards that can mimic any card"
                ]
              },
              {
                title: "Dynamic Role System",
                desc: "Each role comes with unique abilities and responsibilities:",
                items: [
                  "King can reset the game and exchange cards with the Beggar",
                  "Wise player gets to start the next round",
                  "Civilians blend in and survive",
                  "Beggar has special comeback mechanics"
                ]
              },
              {
                title: "Social Features",
                desc: "Enhanced social gameplay experience:",
                items: [
                  "Create private rooms for friends",
                  "Voice chat during gameplay",
                  "Form alliances and strategize",
                  "Global leaderboards"
                ]
              }
            ].map((section) => (
              <div key={section.title} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{section.title}</h3>
                <p className="text-gray-300 mb-4">{section.desc}</p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="text-yellow-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

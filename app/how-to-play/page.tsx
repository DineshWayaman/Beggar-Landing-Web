import Link from "next/link";

export default function HowToPlay() {
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
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
              How to Play Beggar Online
            </h1>
            <p className="text-xl text-gray-300">Complete game rules and instructions</p>
          </div>

          {[
            {
              title: "Before You Start (Requirements)",
              content: [
                "Minimum of 3 players",
                "Card pack with 2 jokers and the details card"
              ]
            },
            {
              title: "Card Values (Ascending Order)",
              content: ["3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "2", "Details card (Rank 1) (Special)"]
            },
            {
              title: "Special Rules",
              content: [
                "Joker card can be any card except the details card",
                "Joker has no value of its own",
                "Joker can be any suit (family)",
                "Suits are normally not a concern, but matter when patterns are at play"
              ]
            },
            {
              title: "Play Patterns",
              sections: [
                {
                  subtitle: "Singles",
                  rules: [
                    "Player: Can be any card of any suit",
                    "Other players: Must play a single card with greater value"
                  ]
                },
                {
                  subtitle: "Consecutive",
                  rules: [
                    "Player: Any number of consecutive cards (2-13 cards)",
                    "Must be same suit",
                    "Example: 3,4,5,6 of any suit",
                    "Other players: Must play same number of consecutive cards starting with higher value"
                  ]
                },
                {
                  subtitle: "Groups",
                  rules: [
                    "Player: Must be same suit and value (2-4 cards)",
                    "Other players: Must match number of cards with higher value"
                  ]
                }
              ]
            },
            {
              title: "Game Flow",
              content: [
                "Cards are dealt clockwise, one per person",
                "First player starts with any pattern",
                "Other players can: Pass, Play Along, or Take Chance",
                "Taking chance requires playing an unbeatable pattern"
              ]
            },
            {
              title: "Titles and Powers",
              sections: [
                {
                  subtitle: "King (First to finish)",
                  rules: [
                    "Gets highest value card from Beggar (except details/joker)",
                    "Can give one unwanted card to Beggar"
                  ]
                },
                {
                  subtitle: "Wise (Second to finish)",
                  rules: ["Gets to start the next round"]
                },
                {
                  subtitle: "Beggar (Last player)",
                  rules: [
                    "Must give best card to King",
                    "Must accept King's unwanted card",
                    "Must shuffle and deal next round"
                  ]
                },
                {
                  subtitle: "Civilian",
                  rules: ["Players finishing between Wise and Beggar"]
                }
              ]
            }
          ].map((section, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6">{section.title}</h2>
              {section.content && (
                <ul className="space-y-3 text-gray-300">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="text-yellow-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.sections && (
                <div className="space-y-6">
                  {section.sections.map((subsection, k) => (
                    <div key={k} className="border-l-2 border-yellow-400/20 pl-4">
                      <h3 className="text-xl font-semibold text-white mb-3">{subsection.subtitle}</h3>
                      <ul className="space-y-2 text-gray-300">
                        {subsection.rules.map((rule, l) => (
                          <li key={l} className="flex items-center gap-3">
                            <span className="text-yellow-400">•</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

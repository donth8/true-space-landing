"use client";

import Link from "next/link";

// Truespace Logo SVG Component
const TruespaceLogo = ({
  className = "",
  size = 32,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 52 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <clipPath id="rightClip">
        <circle cx="22" cy="22" r="22" />
      </clipPath>
    </defs>
    <circle cx="22" cy="22" r="22" fill="#F5C04A" />
    <rect
      x="30"
      y="0"
      width="14"
      height="44"
      fill="#fff"
      clipPath="url(#rightClip)"
    />
    <circle cx="48" cy="44" r="4" fill="#fff" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-primary-400 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-5 h-5 text-red-400 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 backdrop-blur-md bg-dark-950/80 border-b border-dark-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <TruespaceLogo size={28} />
            <span className="text-lg font-semibold text-white">.truespace</span>
          </Link>
          <Link
            href="/"
            className="text-dark-400 hover:text-white transition-colors text-sm"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">How </span>
              <span className="gradient-text-blue">.truespace</span>
              <span className="text-white"> works?</span>
            </h1>
          </div>

          {/* The Idea */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              The Idea
            </h2>
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <p className="text-dark-300 leading-relaxed text-base sm:text-lg mb-4">
                .truespace flips how the internet works. Instead of platforms studying you to serve ads, you teach .truespace what genuinely matters. It responds with content aligned with your real interests.
              </p>
              <p className="text-dark-300 leading-relaxed text-base sm:text-lg">
                No tracking. No manipulation. Just a private space that evolves with you.
              </p>
            </div>
          </section>

          {/* Four Steps */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Four Steps
            </h2>
            <div className="space-y-6">
              <div className="glass p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  1. Share What Matters
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Use the app or browser extension to save content that resonates: articles, videos, images, quotes, or notes. This isn&apos;t about liking or reacting. It&apos;s about consciously identifying what matters to you.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  2. Build Your Profile
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  .truespace creates a picture of your interests, values, and preferences. This profile is encrypted, stored only for you, and never shared with anyone.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  3. Discover and React
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  When you&apos;re ready to explore, .truespace surfaces recommendations based on your authentic interests, a quality content vetted for substance, not engagement metrics. React to what you see: your feedback directly shapes your profile and improves future recommendations.
                </p>
              </div>

              <div className="glass p-6 sm:p-8 rounded-2xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                  4. Evolve Over Time
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  Every reaction contributes to your profile. Save what resonates, dismiss what doesn&apos;t. Each choice helps .truespace understand you better. As you change, your space adapts with you.
                </p>
              </div>
            </div>
          </section>

          {/* The Difference */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              The Difference
            </h2>
            <div className="glass p-6 sm:p-8 rounded-2xl overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-dark-400 mb-4">
                      Traditional Platforms
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <XIcon />
                        <span className="text-dark-300">Track every click and scroll</span>
                      </div>
                      <div className="flex gap-3">
                        <XIcon />
                        <span className="text-dark-300">Build profiles for advertisers</span>
                      </div>
                      <div className="flex gap-3">
                        <XIcon />
                        <span className="text-dark-300">Optimize for time-on-platform</span>
                      </div>
                      <div className="flex gap-3">
                        <XIcon />
                        <span className="text-dark-300">Trap you in filter bubbles</span>
                      </div>
                      <div className="flex gap-3">
                        <XIcon />
                        <span className="text-dark-300">Exploit low-energy moments</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary-400 mb-4">
                      .truespace
                    </h3>
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <CheckIcon />
                        <span className="text-dark-300">Learn only from what you share</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckIcon />
                        <span className="text-dark-300">Your profile belongs to you</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckIcon />
                        <span className="text-dark-300">Optimize for meaningful discovery</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckIcon />
                        <span className="text-dark-300">Expand your perspective</span>
                      </div>
                      <div className="flex gap-3">
                        <CheckIcon />
                        <span className="text-dark-300">Respect your time and attention</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Privacy by Design */}
          <section className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Privacy by Design
            </h2>
            <div className="glass p-6 sm:p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <span className="text-white font-semibold">Encrypted:</span>
                    <span className="text-dark-300"> Your profile and data are end-to-end encrypted</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <span className="text-white font-semibold">No tracking:</span>
                    <span className="text-dark-300"> We don&apos;t monitor your behavior anywhere</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <span className="text-white font-semibold">No ads:</span>
                    <span className="text-dark-300"> Subscription model, not attention capture</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <span className="text-white font-semibold">No data sales:</span>
                    <span className="text-dark-300"> Your information is never shared</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckIcon />
                  <div>
                    <span className="text-white font-semibold">Instant deletion:</span>
                    <span className="text-dark-300"> Remove everything permanently, anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
              Get Started
            </h2>
            <div className="glass p-6 sm:p-8 rounded-2xl mb-8">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="text-primary-400 font-bold text-lg flex-shrink-0">1.</span>
                  <span className="text-dark-300"><span className="text-white font-semibold">Download</span> the app (iOS, Android, or browser extension)</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary-400 font-bold text-lg flex-shrink-0">2.</span>
                  <span className="text-dark-300"><span className="text-white font-semibold">Share</span> something meaningful</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary-400 font-bold text-lg flex-shrink-0">3.</span>
                  <span className="text-dark-300"><span className="text-white font-semibold">Discover</span> content curated for you</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary-400 font-bold text-lg flex-shrink-0">4.</span>
                  <span className="text-dark-300"><span className="text-white font-semibold">React</span> to recommendations to refine your profile</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-primary-400 font-bold text-lg flex-shrink-0">5.</span>
                  <span className="text-dark-300"><span className="text-white font-semibold">Grow</span> your private digital space over time</span>
                </li>
              </ol>
            </div>

            <div className="text-center">
              <Link
                href="/#download"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-dark-950 font-bold rounded-2xl hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-dark-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <TruespaceLogo size={24} />
              <span className="text-sm font-semibold text-white">
                .truespace
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-dark-400 text-sm">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a
                href="mailto:donth8.software@gmail.com"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>
              <a
                href="https://chromewebstore.google.com/detail/truespace/bflicohjlcnnopbpbofikndjgphdacmb"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Browser Extension
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

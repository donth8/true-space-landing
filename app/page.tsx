"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

// SVG Icons as components
const UserIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const BreakFreeIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
    />
  </svg>
);

const SparklesIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    />
  </svg>
);

const LockIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
    />
  </svg>
);

const RefreshIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform duration-300 ${
      isOpen ? "rotate-180" : ""
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    className="w-6 h-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

// Phone Mockup Component with click-based switching
const PhoneMockup = () => {
  const [activePhone, setActivePhone] = useState(0); // 0 = solar system, 1 = recommendations

  const handlePhoneClick = () => {
    setActivePhone((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="relative w-[280px] sm:w-[320px] mx-auto h-[580px] sm:h-[660px] cursor-pointer" onClick={handlePhoneClick}>
      {/* Phone 1 - Solar System Video */}
      <div
        className={`absolute transition-all duration-700 ease-in-out ${
          activePhone === 0
            ? "top-0 left-0 z-20 opacity-100"
            : "top-8 left-8 z-10 opacity-80"
        }`}
      >
        <div className="phone-mockup w-[280px] sm:w-[320px]">
          <div className="phone-screen aspect-[9/19.5] relative overflow-hidden">
            <video
              src="/iphone_solarsystem.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>

      {/* Phone 2 - Recommendations Screenshot */}
      <div
        className={`absolute transition-all duration-700 ease-in-out ${
          activePhone === 1
            ? "top-0 left-0 z-20 opacity-100"
            : "top-8 left-8 z-10 opacity-80"
        }`}
      >
        <div className="phone-mockup w-[280px] sm:w-[320px]">
          <div className="phone-screen aspect-[9/19.5] relative overflow-hidden">
            <Image
              src="/iphone_recommendations.png"
              alt="Recommendations"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <div
    className={`feature-card glass rounded-2xl p-6 sm:p-8 animate-on-scroll ${delay}`}
  >
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary-400/20 via-primary-500/10 to-cyan-500/10 flex items-center justify-center text-primary-400 mb-4 shadow-lg shadow-primary-500/10">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
      {title}
    </h3>
    <p className="text-dark-300 leading-relaxed text-sm sm:text-base">
      {description}
    </p>
  </div>
);

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: FAQItemProps) => (
  <div
    className={`faq-item glass rounded-xl sm:rounded-2xl mb-3 sm:mb-4 overflow-hidden transition-all duration-300 ${
      isOpen
        ? "bg-white/[0.06] border-primary-400/30 shadow-lg shadow-primary-500/5"
        : "hover:bg-white/[0.04]"
    }`}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <button
      onClick={onClick}
      className="w-full p-4 sm:p-5 flex items-center justify-between text-left group"
    >
      <span
        className={`text-sm sm:text-base font-medium pr-4 transition-colors ${
          isOpen
            ? "text-primary-400"
            : "text-white group-hover:text-primary-400"
        }`}
      >
        {question}
      </span>
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen
            ? "bg-primary-400/20 text-primary-400"
            : "bg-white/5 text-dark-400 group-hover:bg-white/10 group-hover:text-white"
        }`}
      >
        <ChevronIcon isOpen={isOpen} />
      </div>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ease-out ${
        isOpen ? "max-h-96" : "max-h-0"
      }`}
    >
      <div className="px-4 sm:px-5 pb-4 sm:pb-5">
        <div className="h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent mb-4" />
        <p className="text-dark-300 text-sm sm:text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  </div>
);

// Store Button Component
interface StoreButtonProps {
  store: "apple" | "google";
  href?: string;
  comingSoon?: boolean;
}

const StoreButton = ({ store, href, comingSoon }: StoreButtonProps) => {
  const content = (
    <div
      className={`store-button flex items-center gap-4 px-7 py-4 rounded-2xl transition-all duration-300 ${
        comingSoon
          ? "bg-dark-800/60 border border-dark-700/50 cursor-not-allowed text-white"
          : "bg-white/5 text-white cursor-pointer border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/5"
      }`}
    >
      {store === "apple" ? <AppleIcon /> : <PlayStoreIcon />}
      <div className="text-left">
        <div
          className={`text-xs ${
            comingSoon ? "text-dark-400" : "text-dark-300"
          }`}
        >
          {comingSoon ? "Coming soon to" : "Download on the"}
        </div>
        <div
          className={`text-lg font-semibold ${
            comingSoon ? "text-dark-400" : "text-white"
          }`}
        >
          {store === "apple" ? "App Store" : "Google Play"}
        </div>
      </div>
    </div>
  );

  if (comingSoon || !href) {
    return content;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
};

// FAQ Data
const faqData = [
  {
    question: "What is .truespace?",
    answer:
      "A mobile app and browser extension that gives you a private space to build your digital identity and discover meaningful content—free from ads, tracking, and algorithmic manipulation.",
  },
  {
    question: "How is it different from social media?",
    answer:
      "Social platforms maximize engagement to serve ads. .truespace has no ads, no social feeds, and no engagement tricks. It exists solely to help you discover content aligned with your authentic interests.",
  },
  {
    question: "How do recommendations work?",
    answer:
      "You share content that matters to you—articles, videos, quotes. .truespace learns from your choices to build a private profile and suggests quality content that aligns with your interests. Your reactions help refine future suggestions.",
  },
  {
    question: "Is my data really private?",
    answer:
      "Yes. Your profile is fully encrypted and stored only for you. We don't sell, share, or analyze your data. You can delete everything permanently at any time.",
  },
  {
    question: "Is there a social component?",
    answer:
      "No. .truespace is intentionally private. No followers, likes, or social pressure—just your personal space for discovery.",
  },
  {
    question: "Is .truespace free?",
    answer:
      "Currently, .truespace is in beta-testing phase. It is 100% free. In the future we may consider it to be subscription-based with no advertising to keeps our incentives aligned with yours—we succeed when you find value, not when advertisers capture your attention.",
  },
];

// Main Component
export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    // Scroll listener for topbar background
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      {/* Aurora gradient background */}
      <div className="aurora-bg" />

      {/* Stars background */}
      <div className="stars-container" />

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Floating orbs with glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-[5%] right-[10%] w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/8 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-500" />
      </div>

      {/* Sticky Topbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/[0.05]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <TruespaceLogo size={32} />
              <span className="text-lg font-semibold text-white">
                .truespace
              </span>
            </a>

            {/* Navigation - Hidden on mobile */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("vision")}
                className="text-dark-300 hover:text-white transition-colors text-sm font-medium"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-dark-300 hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-dark-300 hover:text-white transition-colors text-sm font-medium"
              >
                FAQ
              </button>
            </nav>

            {/* CTA Button */}
            <button
              onClick={scrollToDownload}
              className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 text-dark-900 font-semibold rounded-lg sm:rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="snap-section h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-24 sm:py-0 relative overflow-hidden">
          {/* Hero content with phone side by side */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl">
            {/* Left side - Text content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1">
              {/* Main tagline */}
              <h1 className="hero-animate fade-in-up animation-delay-200 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-4 sm:mb-6 tracking-tight">
                <span className="gradient-text">Your Internet.</span>
                <br />
                <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.15)]">
                  Your Rules.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-animate fade-in-up animation-delay-400 text-base sm:text-lg md:text-xl text-dark-300 max-w-xl mb-6 sm:mb-8 leading-relaxed">
                Welcome to a private digital space where you own your identity and discover
                content that truly matters.
              </p>

              {/* CTA Buttons */}
              <div className="hero-animate fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={scrollToDownload}
                  className="btn-primary group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-300 via-primary-400 to-primary-500 text-dark-900 font-semibold rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg shadow-primary-500/25 text-sm sm:text-base"
                >
                  <span>Download Now</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <a
                  href="#features"
                  className="px-6 sm:px-8 py-3 sm:py-4 glass text-white font-semibold rounded-xl sm:rounded-2xl text-center hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="hero-animate scale-in animation-delay-800 flex-shrink-0 mt-8 lg:mt-0">
              <PhoneMockup />
            </div>
          </div>

          {/* Scroll indicator */}
          <button
            onClick={scrollToDownload}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-dark-500 animate-bounce-slow hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDownIcon />
          </button>
        </section>

        {/* Vision Section */}
        <section id="vision" className="snap-section h-screen flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll">
            <p className="text-base sm:text-lg md:text-xl text-dark-300 leading-relaxed mb-8 sm:mb-12">
              The internet was built to connect us to knowledge. Instead,
              algorithms study us to sell ads—trapping us in bubbles designed to
              maximize engagement, not enrich our lives.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 tracking-tight">
              <span className="gradient-text-blue">.truespace</span>
              <span className="text-white"> is different</span>
            </h2>
            <p className="text-base sm:text-lg text-dark-300 leading-relaxed">
              .truespace is a private space where you build a digital identity
              that reflects your values and interests. No ads. No tracking.
              No manipulation. Just content aligned with who you are.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="snap-section min-h-screen flex items-center justify-center px-4 sm:px-6 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-16 animate-on-scroll">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 sm:mb-6 tracking-tight">
                Why .truespace?
              </h2>
              <p className="text-dark-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
                Built for people who value their time, privacy, and meaningful content.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <FeatureCard
                icon={<UserIcon />}
                title="Own Your Digital Identity"
                description="Build your identity from content you consciously choose, not data harvested for advertisers."
                delay="animation-delay-100"
              />
              <FeatureCard
                icon={<BreakFreeIcon />}
                title="Break Free from Bubbles"
                description="Escape echo chambers. Discover content based on your authentic interests, not what keeps you scrolling. Our content is curated to challenge, inspire, and expand your worldview."
                delay="animation-delay-200"
              />
              <FeatureCard
                icon={<SparklesIcon />}
                title="Meaningful Recommendations"
                description="Suggestions designed to enrich, not just engage. Based on your values, refined by your reactions, never optimized for advertisers."
                delay="animation-delay-300"
              />
              <FeatureCard
                icon={<LockIcon />}
                title="Complete Privacy"
                description="Fully encrypted profile, never shared. You can delete everything instantly. No trace, no hidden copies."
                delay="animation-delay-400"
              />
              <FeatureCard
                icon={<RefreshIcon />}
                title="Evolves With You"
                description="Your interests change, and so does your space. Every share, every reaction refines the platform's understanding of you better."
                delay="animation-delay-500"
              />
              <FeatureCard
                icon={<ClockIcon />}
                title="Respects Your Time"
                description="No infinite scroll or notification anxiety. Content worth your focus, designed so you can step away when you're done."
                delay="animation-delay-600"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="snap-section min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 relative">
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-r from-primary-400/5 to-transparent rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-gradient-to-l from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-12 animate-on-scroll">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3 sm:mb-4">
                Common Questions
              </h2>
              <p className="text-dark-400 text-sm sm:text-base max-w-md mx-auto">
                Everything you need to know about .truespace
              </p>
            </div>

            <div className="animate-on-scroll">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Download Section */}
        <section id="download" className="snap-section h-screen flex flex-col justify-between px-4 sm:px-6">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-5xl mx-auto w-full">
            <div className="rounded-2xl sm:rounded-[2rem] p-6 sm:p-10 md:p-14 text-center animate-on-scroll relative overflow-hidden bg-gradient-to-b from-white/[0.04] via-black/20 to-black/40 border border-white/[0.08] shadow-2xl shadow-black/40 backdrop-blur-xl">
              {/* Metallic shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/50 to-transparent" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4 tracking-tight">
                  Ready to reclaim your digital life?
                </h2>
                <p className="text-dark-300 mb-6 sm:mb-8 max-w-md mx-auto text-sm sm:text-base">
                  Start building your private space for content that truly matters.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <StoreButton
                    store="apple"
                    href="https://apps.apple.com/pl/app/truespace/id6751807004"
                  />
                  <StoreButton store="google" comingSoon />
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Footer */}
          <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-dark-800">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center gap-4 sm:gap-6">
                {/* Brand */}
                <div className="flex items-center gap-2">
                  <TruespaceLogo size={24} />
                  <span className="text-sm sm:text-base font-semibold text-white">
                    .truespace
                  </span>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-dark-400 text-xs sm:text-sm">
                  <a
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="mailto:contact@truespace.app"
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

                {/* Copyright */}
                <div className="text-dark-500 text-xs" suppressHydrationWarning>
                  © {new Date().getFullYear()} .truespace
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}

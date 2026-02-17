"use client";

import HeroChat from "@/components/HeroChat";
import Link from "next/link";
import { useState, useEffect, useMemo, useCallback } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1652878856788-6dc9e56c9235?w=1920&q=80",
  "https://images.unsplash.com/photo-1756705406506-50500a12463c?w=1920&q=80",
  "https://images.unsplash.com/photo-1637844528679-f91e0b15f3e3?w=1920&q=80",
  "https://images.unsplash.com/photo-1683436491260-37c6c692cf51?w=1920&q=80",
];

const PRODUCTS_IMAGES = [
  "https://images.unsplash.com/photo-1644079446600-219068676743?w=1920&q=80",
  "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1920&q=80",
  "https://images.unsplash.com/photo-1606824722920-4c652a70f348?w=1920&q=80",
];

const LOGISTICS_IMAGES = [
  "https://images.unsplash.com/photo-1563147236-8b428c840b75?w=1920&q=80",
  "https://images.unsplash.com/photo-1593617762209-00636c2ca9c6?w=1920&q=80",
  "https://images.unsplash.com/photo-1602009775595-f35cf45d9f33?w=1920&q=80",
];

const TAGLINES_EN = [
  "Buy from us, sell to us. By the ton.",
  "Buy by the ton. At your door.",
  "Fast. Accurate. Reliable.",
  "You manufacture, leave the rest to us.",
  "Global source, local delivery.",
  "Supply chain powered by technology.",
  "Ready for any project, scalable to any size.",
];

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function EnglishHome() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(true);
  const heroImg = useMemo(() => pickRandom(HERO_IMAGES), []);
  const productsImg = useMemo(() => pickRandom(PRODUCTS_IMAGES), []);
  const logisticsImg = useMemo(() => pickRandom(LOGISTICS_IMAGES), []);
  const tagline = useMemo(() => pickRandom(TAGLINES_EN), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  return (
    <main className={`min-h-screen transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-zinc-50"}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full backdrop-blur-md border-b z-40 transition-colors duration-300 ${dark ? "bg-zinc-950/90 border-white/5" : "bg-white/90 border-zinc-200"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-xl font-bold tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}>
              TONLA
            </span>
            <span className={`text-xs hidden sm:inline font-medium tracking-wider ${dark ? "text-zinc-500" : "text-zinc-400"}`}>
              MATERIALS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className={`text-sm transition-colors hidden sm:inline ${dark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
              Products
            </a>
            <a href="#logistics" className={`text-sm transition-colors hidden sm:inline ${dark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
              Logistics
            </a>
            <a href="#technology" className={`text-sm transition-colors hidden sm:inline ${dark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
              Technology
            </a>
            <a href="#contact" className={`text-sm transition-colors hidden sm:inline ${dark ? "text-zinc-400 hover:text-white" : "text-zinc-600 hover:text-zinc-900"}`}>
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className={`text-xs px-2.5 py-1 rounded border transition-colors ${dark ? "text-zinc-400 border-zinc-700 hover:text-white" : "text-zinc-600 border-zinc-300 hover:text-zinc-900"}`}
            >
              {dark ? "Light" : "Dark"}
            </button>
            <Link
              href="/"
              className={`text-xs px-2.5 py-1 rounded border transition-colors ${dark ? "text-zinc-500 hover:text-white border-zinc-700" : "text-zinc-500 hover:text-zinc-900 border-zinc-300"}`}
            >
              TR
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section with Inline Chat */}
      <section
        id="chat"
        className="section-bg-fixed min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.5), rgba(10,10,15,0.7)), url('${heroImg}')`,
        }}
      >
        <div className="absolute inset-0 ai-grid pointer-events-none" />
        <div className="absolute inset-0 ai-glow pointer-events-none" />
        <div className="w-full max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <p className="text-xs font-semibold text-red-400 tracking-widest uppercase mb-3">
              TONLA MATERIALS
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-2">
              Door-to-door raw material supply.
            </h1>
            {mounted && (
              <p className="text-sm sm:text-base font-medium text-red-300 italic">
                &ldquo;{tagline}&rdquo;
              </p>
            )}
          </div>
          <HeroChat lang="en" />
          <div className="text-center mt-4">
            <a
              href="#products"
              className="text-xs text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
            >
              &darr; Explore our products
            </a>
          </div>
        </div>
      </section>

      {/* Rubber Raw Materials Section */}
      <section
        id="products"
        className="section-bg py-24 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.8), rgba(10,10,15,0.88)), url('${productsImg}')`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-red-400 tracking-widest uppercase mb-3">
              Product Range
            </p>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${dark ? "text-white" : "text-zinc-900"}`}>
              Rubber Raw Materials
            </h2>
            <p className={`max-w-2xl mx-auto ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
              A comprehensive range of rubber compounds and raw materials
              for industrial manufacturing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Tire Compound Wigwag
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                SBR/NR based tire compound materials. Suitable for
                high-volume production lines.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Tire Tread Compounds
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                SBR/NR based tire tread compounds. Custom formulations
                and high performance standards.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Technical Compounds
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                EPDM, SBR, NR, NBR and more. Industry-specific
                technical rubber compounds.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Off-Spec Polymers
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                Cost-effective off-spec polymer supply.
                Quality-controlled and competitively priced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Delivery Section */}
      <section
        id="logistics"
        className="section-bg-fixed py-24 px-6 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,10,15,0.55), rgba(10,10,15,0.7)), url('${logisticsImg}')`,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-10 sm:p-14 shadow-2xl">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold text-red-800 tracking-widest uppercase mb-3">
                Logistics &amp; Delivery
              </p>
              <h2 className="text-3xl font-bold text-zinc-900">
                International Supply Chain
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Import &amp; Local Delivery</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Global sourcing with local distribution. Raw materials
                  delivered directly to your production facility.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">Customs Cleared Cargo</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Fully cleared, ready-to-deliver cargo. You focus on
                  manufacturing, we handle the rest.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h3 className="font-semibold text-zinc-900 mb-2">3-6 Month Planning</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Supply chain planning for 3 to 6 months ahead.
                  Secure your raw material needs in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Powered Section */}
      <section id="technology" className={`relative py-24 px-6 overflow-hidden transition-colors duration-300 ${dark ? "bg-zinc-950" : "bg-white"}`}>
        <div className="absolute inset-0 ai-grid pointer-events-none" />
        <div className="absolute inset-0 ai-glow pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 ${dark ? "bg-red-900/20 border border-red-800/30" : "bg-red-50 border border-red-200"}`}>
              <div className={`w-2 h-2 rounded-full bg-red-500 ${mounted ? "animate-pulse" : ""}`} />
              <span className="text-xs font-semibold text-red-400 tracking-widest uppercase">
                Modern Technology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold gradient-text mb-4">
              Powered by Modern Technology
            </h2>
            <p className={`max-w-2xl mx-auto ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
              We optimize your supply chain processes with modern technology,
              delivering faster and more reliable service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-red-900/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Volume Transaction Management
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                Automatically manage and optimize high-volume
                orders and transaction processes.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-red-900/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Consistent Documentation
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                All orders, invoices, and shipping documents are
                automatically generated in standardized formats.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-red-900/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Real-Time Visibility
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                Track your shipments in real time.
                Full visibility, zero surprises.
              </p>
            </div>
            <div className={`p-7 rounded-xl border transition-all group ${dark ? "bg-zinc-900/60 backdrop-blur-sm border-zinc-800 hover:border-red-800/40" : "bg-white border-zinc-200 shadow-md hover:shadow-lg"}`}>
              <div className="w-10 h-10 bg-gradient-to-br from-red-700 to-red-900 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-red-900/20 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h3 className={`text-base font-semibold mb-2 ${dark ? "text-white" : "text-zinc-900"}`}>
                Predictive Intelligence
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-zinc-400" : "text-zinc-600"}`}>
                Demand forecasting and inventory optimization
                to prevent supply disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section
        id="contact"
        className="cta-overlay py-24 px-6"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(127,29,29,0.85), rgba(80,10,10,0.92)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-red-300 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Let&apos;s Get Started
          </h2>
          <p className="text-red-100/70 mb-8 max-w-lg mx-auto leading-relaxed">
            Use the chat above to discuss your raw material supply needs.
          </p>
          <a
            href="#chat"
            className="px-8 py-3.5 bg-white text-red-900 font-medium text-sm tracking-wide uppercase hover:bg-red-50 transition-all inline-block"
          >
            Back to Chat
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t transition-colors duration-300 ${dark ? "bg-zinc-950 border-white/5" : "bg-zinc-100 border-zinc-200"}`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-xs ${dark ? "text-zinc-600" : "text-zinc-400"}`}>
            &copy; 2026 TONLA MALZEME END&Uuml;STR&#304;YEL HAMMADDE T&#304;CARET
            LTD. &#350;T&#304;. All rights reserved.
          </p>
          <Link
            href="/"
            className={`text-xs ${dark ? "text-zinc-600" : "text-zinc-400"} hover:text-zinc-400 transition-colors`}
          >
            T&uuml;rk&ccedil;e Versiyon
          </Link>
        </div>
      </footer>

    </main>
  );
}

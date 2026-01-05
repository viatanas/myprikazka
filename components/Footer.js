"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-coral/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 text-2xl font-black mb-4">
            <img src="/img/logo-mp-white.png" className="w-36" />
          </div>
          <p className="text-gray-200 max-w-sm mx-auto">
            Създаваме уникални детски книжки, в които твоето дете е главният
            герой
          </p>
        </div>

        {/* Trust notes */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
            <span className="text-xl">🔒</span>
            <span className="text-gray-300 text-sm">Без спам</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
            <span className="text-xl">📧</span>
            <span className="text-gray-300 text-sm">
              Само имейл при новини около старта
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
            <span className="text-xl">🇧🇬</span>
            <span className="text-gray-300 text-sm">
              Създадено за български деца
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © 2026 MyPrikazka. Всички права запазени.
            </p>

            {/* Made with love */}
            <p className="text-gray-500 text-sm flex items-center gap-2">
              Направено с <span className="text-coral animate-pulse">❤️</span> в
              България
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

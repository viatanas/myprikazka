"use client";

export default function Hero() {
  const scrollToOrderForm = () => {
    document
      .getElementById("order-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExample = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#F8F5EE] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23074FB5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold  mb-6">
              <span className="text-black leading-[1.1]">
                Детска книжка, в която лицето на твоето{" "}
                <span className="relative inline-block">
                  дете е героят!
                  <img
                    src="/img/crayon-underline.png"
                    alt=""
                    className="absolute bottom-0 left-0 w-full h-auto"
                    style={{ transform: "translateY(0.4em)" }}
                  />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-black font-normal leading-relaxed mb-10 max-w-xl">
              Създай уникална история на български език за деца 3–7 г. Всяка
              книжка е специално направена с лицето на твоето дете в
              илюстрациите.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={scrollToOrderForm}
                className="inline-flex items-center justify-center gap-2 bg-[#074FB5] hover:bg-[#074FB5]/90 text-white font-bold text-lg px-10 py-3 rounded-full"
              >
                <span>Поръчай книжка</span>
              </button>
              <button
                onClick={scrollToExample}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-lg px-10 py-3 rounded-full border border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                <span>Виж пример</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-black">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Плащане при доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>100% уникална</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-mint"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>На български</span>
              </div>
            </div>
          </div>

          {/* Right Column - Book Preview */}
          <div className="order-1 lg:order-2 relative">
            {/* Background decoration - landscape image */}
            <div className="absolute -top-10 -right-10 w-full h-full rounded-3xl overflow-hidden opacity-90">
              <div
                className="w-full h-full bg-gradient-to-br from-[#074FB5]/20 via-mint/10 to-[#074FB5]/10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23074FB5' fill-opacity='0.1' d='M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>

            {/* Book Preview Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              {/* Book Header */}
              <div className="bg-gradient-to-r from-coral via-sunshine to-coral p-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <span className="text-white font-bold text-sm">
                  📚 Преглед на книжката
                </span>
              </div>

              {/* Book Content Preview */}
              <div className="p-6">
                {/* Book Cover */}
                <div className="bg-gradient-to-br from-[#074FB5]/10 to-[#074FB5]/5 rounded-2xl p-6 mb-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    {/* Child Avatar */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-peach to-coral/30 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
                        <svg
                          className="w-14 h-14 text-coral/60"
                          viewBox="0 0 100 100"
                          fill="none"
                        >
                          <circle
                            cx="50"
                            cy="35"
                            r="20"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <circle cx="50" cy="33" r="16" fill="#FFE5D9" />
                          <circle cx="44" cy="30" r="2.5" fill="#2D3436" />
                          <circle cx="56" cy="30" r="2.5" fill="#2D3436" />
                          <path
                            d="M45 38 Q50 42 55 38"
                            stroke="#2D3436"
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <path
                            d="M32 30 Q38 12 50 15 Q62 12 68 30"
                            fill="#8B5A2B"
                          />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-mint rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 mb-1">
                        Персонализирана история
                      </p>
                      <h3 className="font-bold text-gray-800 text-lg mb-2">
                        Приключенията на Мария
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-sunshine/20 text-sunshine-700 rounded-full text-xs font-medium">
                          5 години
                        </span>
                        <span className="px-2 py-1 bg-[#074FB5]/20 text-[#074FB5] rounded-full text-xs font-medium">
                          24 страници
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Pages Preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="font-semibold text-gray-700">
                      Страници от книжката
                    </span>
                    <span className="text-xs">стр. 1-3</span>
                  </div>

                  {/* Page 1 */}
                  <div className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-12 h-16 bg-gradient-to-br from-[#074FB5]/20 to-[#074FB5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏠</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-bold text-coral">Мария</span> се
                        събуди рано сутринта. Днес беше специален ден...
                      </p>
                    </div>
                  </div>

                  {/* Page 2 */}
                  <div className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-12 h-16 bg-gradient-to-br from-mint/20 to-mint/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌲</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        В гората{" "}
                        <span className="font-bold text-coral">Мария</span>{" "}
                        срещна говореща сова, която ѝ каза...
                      </p>
                    </div>
                  </div>

                  {/* Page 3 */}
                  <div className="flex gap-3 p-3 bg-gray-50 rounded-xl">
                    <div className="w-12 h-16 bg-gradient-to-br from-lavender/20 to-lavender/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        „Ти си специална,{" "}
                        <span className="font-bold text-coral">Мария</span>!"
                        каза вълшебникът...
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-sunshine flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📖</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-700">
                        Bulgarian Storybook
                      </p>
                      <p className="text-xs text-gray-400">Уникална история</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-coral/10 text-coral font-semibold text-sm rounded-full hover:bg-coral/20 transition-colors">
                    Виж цялата
                  </button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-sunshine rounded-2xl shadow-lg flex items-center justify-center text-2xl animate-float">
              ⭐
            </div>
            <div className="absolute -bottom-4 -left-8 w-10 h-10 bg-mint rounded-xl shadow-lg flex items-center justify-center text-xl animate-float animation-delay-2000">
              🎨
            </div>
            <div className="absolute top-1/2 -right-4 w-10 h-10 bg-[#074FB5] rounded-xl shadow-lg flex items-center justify-center text-xl animate-float animation-delay-4000">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

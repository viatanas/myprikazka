"use client";

const points = [
  {
    icon: "🎨",
    title: "Лицето на детето е част от илюстрациите",
    description: "Не просто име – истинско лице във всяка сцена",
    color: "coral",
    colorValue: "#FF6B6B"
  },
  {
    icon: "🌟",
    title: 'Истинско усещане „това съм аз"',
    description: "Детето се разпознава като герой в историята",
    color: "primary",
    colorValue: "#074FB5"
  },
  {
    icon: "✨",
    title: "Всяка книжка е напълно уникална",
    description: "Никоя друга книжка не е като тази на твоето дете",
    color: "mint",
    colorValue: "#6BCB77"
  }
];

export default function Differentiator() {
  return (
    <section id="differentiator" className="relative py-24 bg-gradient-to-br from-cream via-peach/30 to-cream overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-sunshine/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-lavender/20 rounded-full blur-xl" />
      
      {/* Floating elements */}
      <div className="absolute top-40 right-20 text-3xl animate-float">📚</div>
      <div className="absolute bottom-40 left-20 text-2xl animate-float animation-delay-2000">💝</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-coral/10 rounded-full mb-4">
            <span>💡</span>
            <span className="text-coral font-semibold text-sm">Какво ни прави различни</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Това <span className="text-coral">не е</span> просто
            <br />
            <span className="text-[#074FB5]">име в историята</span>
          </h2>
        </div>

        {/* Points grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card */}
              <div className="card relative overflow-hidden h-full">
                {/* Colored accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: point.colorValue }}
                />
                
                {/* Content */}
                <div className="pt-6">
                  {/* Icon with colored background */}
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-3xl group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${point.colorValue}1A` }}
                  >
                    {point.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {point.title}
                  </h3>

                  <p className="text-gray-500">
                    {point.description}
                  </p>
                </div>

                {/* Hover decoration */}
                <div 
                  className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full transform group-hover:scale-150 transition-transform duration-500"
                  style={{ backgroundColor: `${point.colorValue}0D` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Comparison visual */}
        <div className="mt-20">
          <div className="bg-white rounded-4xl p-8 md:p-12 shadow-soft">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Traditional book */}
              <div className="text-center p-6 rounded-3xl bg-gray-50 border-2 border-dashed border-gray-200">
                <div className="text-4xl mb-4 opacity-50">📖</div>
                <h4 className="font-bold text-gray-400 mb-2">Обикновена книжка</h4>
                <p className="text-gray-400 text-sm">„Здравей, [име]!"</p>
                <div className="mt-4 px-4 py-2 bg-gray-100 rounded-full text-gray-400 text-sm inline-block">
                  Само текст
                </div>
              </div>

              {/* Our book */}
              <div className="text-center p-6 rounded-3xl bg-gradient-to-br from-coral/10 via-[#074FB5]/10 to-[#074FB5]/5 border-2 border-coral/30 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-sunshine text-xs font-bold px-2 py-1 rounded-full">
                  ⭐ НАШАТА
                </div>
                <div className="text-4xl mb-4">📚✨</div>
                <h4 className="font-bold text-gray-800 mb-2">Нашата книжка</h4>
                <p className="text-gray-600 text-sm">Детето ТЕ гледа от страниците!</p>
                <div className="mt-4 px-4 py-2 bg-coral/20 rounded-full text-coral font-semibold text-sm inline-block">
                  Лице + история
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

export default function CtaSection() {
  const scrollToOrderForm = () => {
    document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#074FB5] via-[#074FB5]/80 to-coral overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating icons */}
      <div className="absolute top-20 left-[15%] text-4xl animate-float opacity-80">📚</div>
      <div className="absolute top-32 right-[20%] text-3xl animate-float animation-delay-2000 opacity-80">✨</div>
      <div className="absolute bottom-32 left-[25%] text-3xl animate-float animation-delay-4000 opacity-80">🌟</div>
      <div className="absolute bottom-20 right-[15%] text-4xl animate-float opacity-80">💝</div>

      {/* Stars */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className="absolute text-white/30 text-2xl"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 0.5}s`
          }}
        >
          ⭐
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-8">
          <span>🎁</span>
          <span className="font-medium">Създай нещо специално</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Готов ли си да създадеш
          <br />
          <span className="text-sunshine drop-shadow-lg">първата книжка</span>
          <br />
          на твоето дете?
        </h2>

        {/* Description */}
        <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Всяка книжка е приключение, в което твоето дете е звездата
        </p>

        {/* CTA Button */}
        <button 
          onClick={scrollToOrderForm}
          className="group relative inline-flex items-center gap-3 bg-white text-gray-800 font-bold text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-2xl group-hover:animate-wiggle">📚</span>
          <span>Поръчай книжка</span>
          <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {/* Trust note */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <span className="text-mint text-xl">✓</span>
            <span>Плащане при доставка</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-mint text-xl">✓</span>
            <span>Без скрити такси</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-mint text-xl">✓</span>
            <span>Доставка до 7 дни</span>
          </div>
        </div>
      </div>
    </section>
  );
}


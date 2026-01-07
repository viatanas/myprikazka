"use client";

const steps = [
  {
    number: "1",
    title: "Попълваш формата",
    icon: "📸",

    bgColor: "bg-coral/10",
    description:
      "Въвеждаш име и възраст и качваш 2–3 ясни снимки на лицето на детето",
  },
  {
    number: "2",
    title: "Получаваш преглед",
    icon: "✨",

    bgColor: "bg-[#074FB5]/10",
    description:
      "Изпращаме ти пример на приказката по имейл, персонализирана за детето",
  },
  {
    number: "3",
    title: "Поръчваш книжката",
    icon: "📖",

    bgColor: "bg-mint/10",
    description:
      "Ако ти хареса, я отпечатваме специално за теб и я изпращаме до избран офис на Еконт",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
        {/* Section title */}
        <div className="text-center mb-24">
          <span className="inline-block px-4 py-2 bg-[#FFF8F0] text-black border border-neutral-100 rounded-full text-sm font-semibold mb-10">
            Лесно като 1-2-3
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            Как работи?
          </h2>
          <p className="text-black text-lg max-w-xl mx-auto">
            Само три стъпки те делят от най-специалния подарък
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (hidden on mobile) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-coral via-[#074FB5] to-mint rounded-full opacity-30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div
                className={`card text-center ${step.bgColor} border-2 border-transparent transition-all duration-300`}
              >
                {/* Step number */}
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2`}>
                  <img
                    src={`/img/icon-${step.number}.png`}
                    alt={`Step ${step.number}`}
                    className="w-12 h-12"
                  />
                </div>

                {/* Icon */}
                <div className="text-4xl mb-6 mt-4 transform group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-900 text-[15px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

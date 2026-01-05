"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Как работи процесът на създаване на книжка?",
    answer:
      "Много лесно! Попълваш формата с името и възрастта на детето, качваш 2-3 снимки и избираш дали искаш да видиш пример или да поръчаш директно. Ние създаваме уникална илюстрирана история, в която твоето дете е главният герой!",
  },
  {
    question: "Колко време отнема изработката?",
    answer:
      "Обикновено книжката е готова за 5-7 работни дни. При поръчка ще получиш имейл с актуализации за напредъка и линк за преглед преди финализиране.",
  },
  {
    question: "Какви снимки трябва да кача?",
    answer:
      "Най-добре работят ясни снимки на лицето на детето с добро осветление. Препоръчваме поне една снимка отпред и една от профил. Избягвай снимки със слънчеви очила или маски.",
  },
  {
    question: "Мога ли да видя пример преди да поръчам?",
    answer:
      "Разбира се! Избери опцията 'Искам да видя пример' във формата и ние ще ти изпратим персонализирана страница от книжката напълно безплатно.",
  },
  {
    question: "В какъв формат се доставя книжката?",
    answer:
      "Предлагаме както дигитална версия (PDF), така и отпечатана книжка с твърди корици. Можеш да избереш при финализиране на поръчката.",
  },
  {
    question: "Подходящо ли е за подарък?",
    answer:
      "Абсолютно! Персонализираната книжка е перфектен подарък за рожден ден, Коледа, имен ден или просто за да зарадваш едно дете. Можем да добавим и персонализирано посвещение.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#074FB5]/10 rounded-full border border-blue-900/10 text-[#074FB5] font-semibold text-sm mb-4">
            <span>Имаш въпроси?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            Често задавани въпроси
          </h2>
          <p className="text-lg text-neutral-800">
            Всичко, което искаш да знаеш за магическите книжки
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 pt-5 pb-4 flex items-center justify-between text-left"
              >
                <span className="font-bold text-gray-800 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#074FB5] rotate-180"
                      : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? "text-white" : "text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-800 text-lg">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Не намери отговор на въпроса си?</p>
          <a
            href="mailto:hello@storybook.bg"
            className="inline-flex items-center gap-2 text-[#074FB5] font-bold hover:underline"
          >
            <span>Пиши ни на имейл</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

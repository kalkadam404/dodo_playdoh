import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export function YourDuo({ initialActive = 1 }) {
  const [active, setActive] = useState(initialActive);
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);

  const textRef = useRef(null);
  const duoTypes = [
    {
      id: 1,
      count: "5–8 баллов ",
      yourDuo: "Творцы",
      firstText:
        "творческий дуэт, который любит создавать что-то своими руками:",
      desc: " лепить, мастерить и придумывать блюда. Совместные игры и поделки развивают мелкую моторику и воображение ребенка, а обычный ужин превращается в яркую арт-сессию. Вместе вы с радостью готовите и украшаете пиццу, делаете фигурки из Play-Doh и обсуждаете свои идеи. Такой подход делает семейное время веселым и сближает вас как команду.",
    },
    {
      id: 2,
      count: "8–12 баллов",
      yourDuo: "Исследователи",
      firstText:
        "самая любознательная пара мамы и ребенка, которой интересно узнавать новое.",
      desc: "Вместе вы читаете энциклопедии и книги о животных, гуляете по парку и изучаете окружающий мир. Наше детское комбо Play Dodo поможет ближе узнать животных из Красной книги Казахстана — каждый набор содержит карточку с новым видом. Такие занятия расширяют кругозор ребенка и прививают заботу о природе.",
    },
    {
      id: 3,
      count: "12–15 баллов",
      yourDuo: "Гурманы",
      firstText:
        "то самое дуо, которое любит вкусно поесть и приготовить что-то вместе.",
      desc: "Вы исследуете рецепты, устраиваете домашние пицца-вечеринки и делитесь друг с другом впечатлениями о добавленных специях. Регулярные семейные ужины полезны для здоровья и настроения детей. ",
    },
  ];
  const activeType = duoTypes[active - 1];

  useGSAP(() => {
    const container =
      window.innerWidth < 640
        ? mobileContainerRef.current
        : containerRef.current;

    if (!container) return;
    const cards = container.querySelectorAll(".trend-card");
    const targetIndex = active - 1;

    cards.forEach((card, index) => {
      const isPastCard = index < targetIndex;
      const isActiveCard = index === targetIndex;

      if (isPastCard) gsap.set(card, { zIndex: 40 });
      else if (isActiveCard) gsap.set(card, { zIndex: 30 });
      else gsap.set(card, { zIndex: 10 - index });

      gsap.to(card, {
        x: isPastCard ? -600 : 0,
        opacity: isPastCard ? 0 : 1,
        duration: 0.8,
        ease: "power3.inOut",
      });
    });

    // анимация текста
    // if (textRef.current) {
    //   const elements = Array.from(textRef.current.children);
    //   gsap.fromTo(
    //     elements,
    //     { opacity: 0, y: 10 },
    //     { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
    //   );
    // }
    // ---- Анимация текстов ----
    if (textRef.current) {
      const tl = gsap.timeline();

      // исчезновение старого текста
      tl.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
      });

      // Появление нового текста
      tl.to(textRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.in",
      });
    }
  }, [active]);

  useEffect(() => {
    setActive(initialActive);
  }, [initialActive]);

  const handleNext = () => {
    setActive((prev) => Math.min(prev + 1, duoTypes.length));
  };

  const handleBack = () => {
    setActive((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div
      id="duo"
      className="min-h-full bg-[#F6EBDD] rounded-t-[60px] mt-40 py-34 max-sm:pt-10  max-sm:mt-10 "
    >
      <div className="flex items-center justify-center gap-28  ">
        <div
          ref={containerRef}
          className="relative aspect-3/4  w-[400px] max-sm:w-[270px] max-sm:hidden"
        >
          <div className="trend-card absolute top-0 left-0 -rotate-8  w-[395px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
            <div className=" overflow-hidden rounded-2xl">
              <img
                src="/fam3.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="trend-card absolute top-0 -left-3 -rotate-2 w-[395px]max-sm:w-[270px]   mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/fam2.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="trend-card absolute top-0 left-0 -rotate-4  w-[395px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/fam1.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" flex items-start justify-center flex-col gap-10 w-1/2 max-sm:w-full max-sm:px-4 max-sm:items-center max-sm:gap-6">
          <div className="flex flex-col items-start gap-10 w-full max-sm:items-center min-h-[530px] max-sm:min-h-auto">
            <div className="max-sm:text-center">
              <div className="text-[#0AC5A4] font-helvetica-black uppercase text-3xl max-sm:text-2xl mb-10 max-sm:mb-2">
                {activeType.count}
              </div>
              <div className="max-sm:text-center">
                <div className="text-[80px] max-sm:text-[54px] text-[#FF6B01] font-helvetica-black uppercase leading-none ">
                  Ваш Дуо
                </div>
                <div className="text-[64px] max-sm:text-4xl text-[#FF6B01] font-helvetica-black uppercase leading-none ">
                  {activeType.yourDuo}
                </div>
              </div>
            </div>

            <div
              ref={mobileContainerRef}
              className="relative aspect-3/4  w-[400px] max-sm:w-[280px] sm:hidden max-sm:mb-5"
            >
              <div className="trend-card absolute top-0 left-0 -rotate-8  w-[395px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
                <div className=" overflow-hidden rounded-2xl">
                  <img
                    src="/fam3.webp"
                    alt="Card"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="trend-card absolute top-0 -left-3 -rotate-2 w-[395px] max-sm:w-[270px]   mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/fam2.webp"
                    alt="Card"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="trend-card absolute top-0 left-0 -rotate-4  w-[395px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4 aspect-3/4 ">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="/fam1.webp"
                    alt="Card"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            <div
              ref={textRef}
              className="font-rooftop text-xl mt-2 max-sm:text-sm max-sm:w-full max-sm:text-center"
            >
              Вы —{" "}
              <span className="font-rooftop-bold">{activeType.firstText}</span>{" "}
              {activeType.desc}
            </div>
          </div>
          <div className="flex items-center justify-between gap-5 mt-2 ">
            <button
              onClick={handleBack}
              disabled={active === 1}
              className={` bg-[#FFF7EE]  rounded-2xl py-4 px-15 text-2xl max-sm:text-base font-rooftop-bold cursor-pointer ${
                active !== 1 ? "" : "opacity-60"
              }`}
            >
              Назад
            </button>
            <button
              onClick={handleNext}
              disabled={active === duoTypes.length}
              className={` bg-[#FF6B01] text-white rounded-2xl py-4  px-15 text-2xl max-sm:text-base font-rooftop-bold cursor-pointer ${
                active !== duoTypes.length ? "" : "opacity-30"
              }`}
            >
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

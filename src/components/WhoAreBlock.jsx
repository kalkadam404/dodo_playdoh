import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { getCurrentPromoCode, getPromoCode } from "../utils/getPromoCode";
import { YourDuoBlock } from "./YourDuoBlock";
import { slides } from "../constants/slideList";
import { testVariants } from "../constants/test";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function WhoAreBlock({ onFinish }) {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(true);
  const [promo, setPromo] = useState(null);

  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);

  useGSAP(() => {
    if (started && !showResult) {
      const tl = gsap.timeline();
      tl.from(leftBlockRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: "power1.out",
      }).from(
        rightBlockRef.current,
        { x: 50, opacity: 0, duration: 0.6, ease: "power1.out" },
        "-=0.6"
      ); // перекрытие анимации
    }
  }, [started]);

  useGSAP(() => {
    if (!leftBlockRef.current) return;
    const cards = leftBlockRef.current.querySelectorAll(".slide-card");
    const targetIndex = currentQuestion;

    cards.forEach((card, index) => {
      const isPastCard = index < targetIndex;
      const isActiveCard = index === targetIndex;

      if (isPastCard) gsap.set(card, { zIndex: 40 });
      else if (isActiveCard) gsap.set(card, { zIndex: 30 });
      else gsap.set(card, { zIndex: 10 - index });

      gsap.to(card, {
        y: isPastCard ? -600 : 0,
        opacity: isPastCard ? 0 : 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  }, [currentQuestion]);

  const handleAnswerSelect = (answerId) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion + 1]: answerId,
    }));
  };

  const handleNext = () => {
    if (answers[currentQuestion + 1]) {
      if (currentQuestion < slides.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        // Все вопросы отвечены, показываем результат
        setShowResult(false);
        handleFinish();
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateResult = () => {
    let totalPoints = 0;
    Object.values(answers).forEach((answer) => {
      if (answer === "A") totalPoints += 1;
      else if (answer === "B") totalPoints += 2;
      else if (answer === "C") totalPoints += 3;
    });

    if (totalPoints >= 5 && totalPoints <= 8) {
      return testVariants[5].variantA; // "5–8 баллов"
    } else if (totalPoints >= 9 && totalPoints <= 12) {
      return testVariants[5].variantB; // "8–12 баллов"
    } else {
      return testVariants[5].variantC; // "12–15 баллов"
    }
  };

  const handleFinish = () => {
    onFinish();
    const code = getCurrentPromoCode() || getPromoCode();
    setPromo(code);
    const target = document.querySelector("#duo");
    if (target) {
      gsap.to(window, {
        scrollTo: target,
        duration: 0.8,
        onComplete: () => ScrollTrigger.refresh(), // пересчет ScrollTrigger
      });
    }
  };

  if (!showResult) return;
  return (
    <div className="min-h-full mt-34 w-full  max-sm:mt-0 ">
      {!started ? (
        <YourDuoBlock
          onClick={() => {
            setStarted(true);
          }}
        />
      ) : (
        <div className="flex items-center justify-center mt-35 gap-15 max-sm:flex-col  max-sm:mt-25 ">
          <div
            ref={leftBlockRef}
            className="w-4/5 aspect-square max-w-[600px]  relative "
          >
            {slides.map((item, index) => {
              if (index === 5) {
                return (
                  <div
                    key={item.id}
                    className={`slide-card flex flex-col items-center justify-center gap-5 max-sm:gap-3 rounded-3xl border-11 border-solid px-16 py-12 max-sm:px-0 max-sm:py-0 bg-[#FFF7EE] overflow-hidden w-full h-80 sm:h-[400px] md:h-[470px] absolute top-1/2 -translate-y-1/2 left-0 shadow-xl -rotate-${item.rotate} `}
                    style={{
                      borderColor: item.borderColor,
                      zIndex: item.id * -1,
                    }}
                  >
                    <div className=" font-rooftop-bold text-3xl leading-none max-sm:text-base text-center mb-2">
                      Сложите набранные баллы и определите результат:
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 w-fit max-sm:gap-0">
                      <div className="text-[#FF6B01] text-4xl font-helvetica-black uppercase max-sm:text-xl">
                        5–8 баллов
                      </div>
                      <div className="font-rooftop text-lg leading-none text-center max-sm:text-xs">
                        вы с ребенком <br /> настоящие{" "}
                        <span className="font-rooftop-bold">Творцы</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center w-fit max-sm:gap-0">
                      <div className="text-[#FF6B01] text-4xl font-helvetica-black uppercase max-sm:text-xl">
                        8–12 баллов
                      </div>
                      <div className="font-rooftop text-lg leading-none text-center max-sm:text-xs">
                        любознательная и веселая <br /> пара{" "}
                        <span className="font-rooftop-bold">
                          Исследователей
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center justify-center w-fit max-sm:gap-0">
                      <div className="text-[#FF6B01] text-4xl font-helvetica-black uppercase max-sm:text-xl">
                        12–15 баллов
                      </div>
                      <div className="font-rooftop text-lg leading-none text-center max-sm:text-xs">
                        ваш аппетит подсказывает <br /> нам, что вы{" "}
                        <span className="font-rooftop-bold">Гурманы</span>
                      </div>
                    </div>
                    <div className="text-center font-rooftop-bold text-base sm:text-2xl md:text-3xl w-[95%] sm:w-[420px] md:w-[450px] max-sm:leading-none">
                      {item.question}
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.id}
                  className={`slide-card flex flex-col items-center justify-center gap-12 rounded-3xl border-11 border-solid px-16 py-12 max-sm:px-0 max-sm:py-0 bg-[#FFF7EE] overflow-hidden w-full h-80 sm:h-[400px] md:h-[470px] absolute top-1/2 -translate-y-1/2 left-0 shadow-xl -rotate-${item.rotate} `}
                  style={{
                    borderColor: item.borderColor,
                    zIndex: item.id * -1,
                  }}
                >
                  <div className="absolute top-10 left-10 font-black text-6xl leading-none max-sm:text-2xl">
                    {item.idText}
                  </div>
                  <div className="aspect-square">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[120px] sm:w-[180px] md:w-[200px]"
                    />
                  </div>
                  <div className="text-center font-rooftop-bold text-base sm:text-2xl md:text-3xl w-[95%] sm:w-[420px] md:w-[450px] max-sm:leading-none">
                    {item.question}
                  </div>
                </div>
              );
            })}
          </div>
          <div
            ref={rightBlockRef}
            className="flex flex-col justify-between w-1/2 max-sm:w-full max-sm:px-4"
          >
            <div className="space-y-4">
              {testVariants[currentQuestion] &&
                (() => {
                  const test = testVariants[currentQuestion];
                  const options = [
                    { id: "A", title: test.variantA, point: "1 балл" },
                    { id: "B", title: test.variantB, point: "2 балла" },
                    { id: "C", title: test.variantC, point: "3 балла" },
                  ];

                  return options.map((option) => (
                    <button
                      key={`${test.id}-${option.id}`}
                      onClick={() => handleAnswerSelect(option.id)}
                      className={`w-full bg-[#F6EBDD] rounded-3xl pl-5 max-sm:pl-2 py-4 flex items-center gap-4 transition-all hover:bg-[#e5e0d8] ${
                        answers[currentQuestion + 1] === option.id
                          ? "ring-4 ring-[#ff6b2c]"
                          : ""
                      }`}
                    >
                      <div className="shrink-0 w-16 h-16 max-sm:w-12 max-sm:h-12 bg-[#FF6B01] rounded-2xl flex items-center justify-center">
                        <span className="text-white text-3xl font-bold max-sm:text-xl">
                          {option.id}
                        </span>
                      </div>

                      <div className="grow text-left ml-4">
                        <p className="font-rooftop-medium text-xl max-sm:text-sm leading-none">
                          {option.title}
                        </p>
                      </div>

                      <div className="shrink-0 rotate-90">
                        <span className="font-rooftop-medium leading-none max-sm:text-xs">
                          {option.point}
                        </span>
                      </div>
                    </button>
                  ));
                })()}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                disabled={currentQuestion === 0}
                className={`w-[45%] rounded-2xl py-4 text-2xl font-rooftop-bold max-sm:text-xl ${
                  currentQuestion === 0
                    ? "bg-[#F6EBDD] opacity-50 cursor-not-allowed"
                    : "bg-[#F6EBDD] hover:bg-[#e5e0d8]"
                }`}
              >
                Назад
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion + 1]}
                className={`w-[45%] rounded-2xl py-4 text-2xl font-rooftop-bold max-sm:text-xl ${
                  !answers[currentQuestion + 1]
                    ? "bg-[#FF6B01] opacity-50 cursor-not-allowed text-white"
                    : "bg-[#FF6B01] text-white hover:bg-[#e55a00]"
                }`}
              >
                {currentQuestion === slides.length - 1 ? "Результаты" : "Далее"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { getCurrentPromoCode, getPromoCode } from "../utils/getPromoCode";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
export function WhoAreBlock() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [promo, setPromo] = useState(null);

  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);
  const testVariants = [
    {
      id: 1,
      variantA: "Рисовать, лепить фигурки и мастерить поделки",
      variantB:
        "Читать книги, смотреть познавательные передачи или посещать музей",
      variantC: "Готовить вместе или пробовать новые блюда и рецепты",
    },
    {
      id: 2,
      variantA: "Фламинго ",
      variantB: "Снежный барс",
      variantC: "Каспийская нерпа",
    },
    {
      id: 3,
      variantA:
        "Вы вместе с ребенком украшаете торт или печенье, придумываете собственные шедевры из теста",
      variantB:
        "Вы обсуждаете интересные факты о животных, динозаврах или океане, узнаете что-то новое ",
      variantC:
        "Вы устраиваете семейный пикник или ужин и наслаждаетесь приготовлением и дегустацией ",
    },
    {
      id: 4,
      variantA: "Яркая пицца с необычной начинкой",
      variantB: "Горячий картофель фри из печи",
      variantC: "Интересная закуска: Додстер или Дэнвич",
    },
    {
      id: 5,
      variantA: "Когда можно пофантазировать и создать что-то своими руками ",
      variantB: "Когда можно вместе исследовать новый мир и расширять кругозор",
      variantC:
        "Когда можно порадовать вкусовые рецепторы и угостить друг друга чем-то особенным",
    },
    {
      id: 6,
      variantA: "5–8 баллов ",
      variantB: "8–12 баллов",
      variantC: "12–15 баллов",
    },
  ];

  const slides = [
    {
      id: 1,
      idText: "1.",
      img: "/clock.png",
      question: "Чем вы любите заниматься вместе с ребенком в свободное время?",
      borderColor: "#F7A517",
    },
    {
      id: 2,
      idText: "2.",
      img: "/bearB.png",
      question:
        "Какое животное из Красной книги Казахстана выбрал бы ваш ребенок?",
      borderColor: "#EE1C24",
    },
    {
      id: 3,
      idText: "3.",
      img: "/tractor.png",
      question: "Какой сценарий семейного досуга вам ближе всего?",
      borderColor: "#02B59E",
    },
    {
      id: 4,
      idText: "4.",
      img: "/dodo.png",
      question: "Какое любимое блюдо в Dodo у вашего ребенка?",
      borderColor: "#9A258E",
    },
    {
      id: 5,
      idText: "5.",
      img: "/sun_w.png",
      question: "Что обычно приносит вам и ребенку больше всего радости?",
      borderColor: "#E4185C",
    },
  ];

  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  useGSAP(() => {
    const elements = Array.from(containerRef.current.children);
    gsap.from(elements, {
      opacity: 0,
      y: 20, // лёгкое смещение вниз
      duration: 0.6, // время анимации каждого элемента
      stagger: 0.3, // задержка между элементами
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // когда верх контейнера достигнет 80% экрана
      },
    });
    gsap.from(textRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 1.8, // после заголовков
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // когда верх контейнера достигнет 80% экрана
      },
    });
    // Анимация кнопки с небольшой задержкой после текста
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.6,
      delay: 2,
      ease: "power1.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // когда верх контейнера достигнет 80% экрана
      },
    });
  }, []);

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
  }, [started, currentQuestion, showResult]);

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
        setShowResult(true);
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

  return (
    <div className="min-h-full mt-34 w-full  max-sm:mt-0 ">
      {!started ? (
        <div className="flex flex-col justify-center items-center gap-10  max-sm:gap-10 ">
          <div
            ref={containerRef}
            className="relative flex flex-col items-center justify-center  w-full max-sm:pt-25  max-sm:overflow-hidden"
          >
            <img
              src="/glina2.png"
              alt=""
              className="absolute -top-10 left-0 max-sm:w-36  max-sm:top-3 max-sm:-left-10"
            />
            <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[55px] uppercase leading-[110%] -rotate-8">
              Какое вы
            </div>
            <div className="flex items-center gap-2">
              <img src="/glina.png" alt="" className="max-sm:w-36" />
              <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[55px] uppercase leading-[110%] rotate-2">
                дуо с
              </div>
            </div>
            <img
              src="/list.png"
              alt=""
              className="absolute top-12 right-0 max-sm:w-33 max-sm:bottom-0 max-sm:-top-2 max-sm:-rotate-150 max-sm:-right-10"
            />
            <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[55px] uppercase leading-[110%] -rotate-2">
              ребенком?
            </div>
          </div>

          <div
            ref={textRef}
            className="w-3/5 mx-auto text-center font-rooftop text-xl  max-sm:w-full max-sm:px-4 max-sm:text-sm"
          >
            Пройдите тест из 5 вопросов, чтобы узнать, какое вы дуо Считайте
            баллы за каждый ответ, который ближе вам и вашему ребенку. В конце
            вы получите результат с кратким описанием вашей пары мамы и
            сына/дочки. Давайте проверим, творцы вы, исследователи или все-таки
            гурманы?
          </div>

          <button
            ref={buttonRef}
            onClick={() => setStarted(true)}
            className="py-4 px-15 font-rooftop-bold text-2xl text-white bg-[#FF6B01] rounded-[20px] max-sm:text-base max-sm:px-10 "
          >
            Пройти тест
          </button>
        </div>
      ) : showResult ? (
        <div className="flex flex-col items-center justify-center mt-35 gap-10 max-sm:mt-25 max-sm:px-4">
          <div className="text-center">
            <h2 className="font-helvetica-black text-[#FF6B01] text-6xl max-sm:text-4xl mb-8">
              Ваш результат
            </h2>
            <div className="font-rooftop-bold text-4xl max-sm:text-2xl text-center">
              {calculateResult()}
            </div>
          </div>

          <button
            onClick={handleFinish}
            className="py-4 px-15 font-rooftop-bold text-2xl text-white bg-[#FF6B01] rounded-[20px] max-sm:text-base max-sm:px-10 cursor-pointer"
          >
            Ваш дуо
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-center mt-35 gap-15 max-sm:flex-col overflow-hidden max-sm:mt-25">
          <div
            ref={leftBlockRef}
            className="w-4/5 max-w-[500px] overflow-hidden"
          >
            {slides[currentQuestion] && (
              <div
                className="relative flex flex-col items-center justify-center gap-12 rounded-3xl border-11 border-solid px-16 py-12 max-sm:px-0 max-sm:py-0 bg-[#FFF7EE] overflow-hidden w-full h-80 sm:h-[450px] md:h-[470px]"
                style={{
                  borderColor: slides[currentQuestion].borderColor,
                }}
              >
                <div className="absolute top-10 left-10 font-black text-6xl leading-none max-sm:text-2xl">
                  {slides[currentQuestion].idText}
                </div>
                <div className="aspect-square">
                  <img
                    src={slides[currentQuestion].img}
                    alt=""
                    className="w-[120px] sm:w-[180px] md:w-[200px]"
                  />
                </div>
                <div className="text-center font-rooftop-bold text-base sm:text-2xl md:text-3xl w-[95%] sm:w-[420px] md:w-[450px] max-sm:leading-none">
                  {slides[currentQuestion].question}
                </div>
              </div>
            )}
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
                          ? "ring-2 ring-[#ff6b2c]"
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
                {currentQuestion === slides.length - 1 ? "Завершить" : "Далее"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

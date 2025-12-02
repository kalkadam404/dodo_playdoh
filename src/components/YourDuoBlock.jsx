import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export function YourDuoBlock({ onClick }) {
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
  return (
    <div className="flex flex-col justify-center items-center gap-10  max-sm:gap-10 ">
      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center  w-full max-sm:pt-30  max-sm:overflow-hidden "
      >
        <img
          src="/glina2.png"
          alt=""
          className="absolute -top-10 left-0 max-sm:w-36  max-sm:top-10 max-sm:-left-10"
        />
        <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[50px] uppercase leading-[110%] -rotate-8">
          Какое вы
        </div>
        <div className="flex items-center gap-2">
          <img src="/glina.png" alt="" className="max-sm:w-36" />
          <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[50px] uppercase leading-[110%] rotate-2">
            дуо с
          </div>
        </div>
        <img
          src="/list.png"
          alt=""
          className="absolute top-12 right-0 max-sm:w-33 max-sm:bottom-0 max-sm:top-2 max-sm:-rotate-150 max-sm:-right-10"
        />
        <div className="font-helvetica-black text-[#FF6B01] text-[140px] max-sm:text-[50px] uppercase leading-[110%] -rotate-2">
          ребенком?
        </div>
      </div>

      <div
        ref={textRef}
        className="w-3/5 mx-auto text-center font-rooftop text-xl  max-sm:w-full max-sm:px-4 max-sm:text-sm"
      >
        Пройдите тест из 5 вопросов, чтобы узнать, какое вы дуо Считайте баллы
        за каждый ответ, который ближе вам и вашему ребенку. В конце вы получите
        результат с кратким описанием вашей пары мамы и сына/дочки. Давайте
        проверим, творцы вы, исследователи или все-таки гурманы?
      </div>

      <button
        ref={buttonRef}
        onClick={onClick}
        className="py-4 px-15 font-rooftop-bold text-2xl text-white bg-[#FF6B01] rounded-[20px] max-sm:text-base max-sm:px-10 "
      >
        Пройти тест
      </button>
    </div>
  );
}

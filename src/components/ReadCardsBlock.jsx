import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export function ReadCardsBlock() {
  const cardsRef = useRef([]);
  const [active, setActive] = useState(0);
  const mobileCardRef = useRef(null);

  const mobileCards = [
    {
      img: "/trend1.webp",
      text: "Как украсить стол в трендовом цвете сезона",
      link: "trend",
    },
    {
      img: "/fashion1.webp",
      text: "3 модные детали, которые сделают ваш вечер особенным",
      link: "fashion",
    },
    {
      img: "/diy1.webp",
      text: "Как сделать DIY-декор с детьми и не потерять стиль",
      link: "diy",
    },
  ];

  useGSAP(() => {
    if (!mobileCardRef.current) return;

    const card = mobileCardRef.current;

    gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [active]);

  const handleChange = (num) => {
    setActive(num);
  };
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const elementCenterY = rect.top + window.scrollY + rect.height / 2;
      const viewportCenterY = window.innerHeight / 2;

      const offset = 80; // px
      const targetScrollY = elementCenterY - viewportCenterY - offset;

      window.scrollTo({
        top: targetScrollY,
        behavior: "smooth",
      });
    }
  };

  useGSAP(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 200, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current[0], // отслеживаем первый элемент
            start: "top 70%", // когда верх блока дойдет до 80% экрана
            toggleActions: "play none none none", // play анимации один раз
          },
        }
      );
    }
  }, []);

  return (
    <div className="bg-[#0AC5A4] rounded-[60px] flex flex-col gap-20 items-center justify-center py-20  max-sm:py-15 max-sm:px-4 -mt-14 max-sm:rounded-[40px] max-sm:gap-10">
      <h2 className="text-8xl max-sm:text-[54px] text-white font-helvetica-black leading-none max-sm:text-center">
        FASHION TIPS ELLE
      </h2>

      <div
        ref={mobileCardRef}
        className="bg-white rounded-[20px] flex flex-col items-center justify-center gap-7 p-3 pb-7 sm:hidden"
      >
        <img
          src={mobileCards[active].img}
          alt=""
          className="w-80 h-80 rounded-2xl"
        />
        <h2 className="text-2xl font-rooftop-bold text-center max-w-xs leading-none">
          {mobileCards[active].text}
        </h2>

        <a
          href={`#${mobileCards[active].link}`}
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo(mobileCards[active].link);
          }}
          className="bg-[#FF6B01] rounded-2xl py-3 px-8 text-white font-rooftop-bold leading-none text-xl"
        >
          Читать
        </a>
      </div>

      <div className="flex items-center justify-center gap-6 ">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="bg-white rounded-[20px] flex flex-col items-center justify-center gap-7 p-3 pb-7 max-sm:p-2 max-sm:pb-5 max-sm:gap-6 max-sm:hidden"
        >
          <img
            src="/trend1.webp"
            alt=""
            className="w-96 h-96 max-sm:w-66 max-sm:h-66 rounded-2xl "
          />
          <h2 className="text-[26px] max-sm:text-xl font-rooftop-bold mt-1 text-black text-center max-sm:max-w-48 leading-none max-w-2xs">
            Как украсить стол в трендовом цвете сезона
          </h2>
          <a
            href="#trend"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("trend");
            }}
            className="bg-[#FF6B01] rounded-2xl py-3 px-8 text-white font-rooftop-bold leading-none text-2xl max-sm:text-base "
          >
            Читать
          </a>
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="bg-white rounded-[20px] flex flex-col items-center justify-center gap-7 p-3 pb-7 max-sm:p-2 max-sm:pb-5 max-sm:gap-6 max-sm:hidden"
        >
          <img
            src="/fashion1.webp"
            alt=""
            className="w-96 h-96 max-sm:w-66 max-sm:h-66 rounded-2xl "
          />
          <h2 className="text-[26px] max-sm:text-xl font-rooftop-bold mt-1 text-black text-center max-sm:max-w-48 leading-none max-w-xs">
            3 модные детали, которые сделают ваш вечер особенным
          </h2>
          <a
            href="#fashion"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("fashion");
            }}
            className="bg-[#FF6B01] rounded-2xl py-3 px-8 text-white font-rooftop-bold leading-none text-2xl max-sm:text-base"
          >
            Читать
          </a>
        </div>
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="bg-white rounded-[20px] flex flex-col items-center justify-center gap-7 p-3 pb-7 max-sm:p-2 max-sm:pb-5 max-sm:gap-6 max-sm:hidden"
        >
          <img
            src="/diy1.webp"
            alt=""
            className="w-96 h-96 max-sm:w-66 max-sm:h-66 rounded-2xl "
          />
          <h2 className="text-[26px] max-sm:text-xl font-rooftop-bold mt-1 text-black text-center max-sm:max-w-48 leading-none max-w-2xs">
            Как сделать DIY-декор с детьми и не потерять стиль
          </h2>
          <a
            href="#diy"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("diy");
            }}
            className="bg-[#FF6B01] rounded-2xl py-3 px-8 text-white font-rooftop-bold leading-none text-2xl max-sm:text-base"
          >
            Читать
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between gap-5  sm:hidden">
        {[1, 2, 3].map((r, id) => (
          <button
            key={id}
            onClick={() => handleChange(id)}
            className={`rounded-xl flex-1 px-6 py-2 text-xl font-rooftop-bold cursor-pointer ${
              active === id ? "bg-[#FF6B01] text-white" : "bg-white text-black"
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export function FashionDetail() {
  const [active, setActive] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const recipeList = [
    {
      id: 1,
      headText: "Лайфхаки со свечками",
      desc: "Свечи — это не просто светильники, а отличный способ добавить уюта и настроения.",
      desc2: [
        "Покрасьте их воском в новые оттенки",
        "Добавьте ароматические масла для мягкого аромата",
        "Украсьте бантиками, бусинами и сухоцветами",
      ],
      text: "Такие простые изменения превращают обычную свечу в оригинальный элемент декора, который сделает ваш вечер по-настоящему особенным и теплым.",
    },
    {
      id: 2,
      headText: "Книга воспоминаний",
      desc: "Создание семейного альбома — это ценный способ сохранить важные моменты жизни вас и вашего ребенка.",
      desc2: [
        "Соберите фотографии и билеты с путешествий",
        "Добавьте забавные записи или пожелания близких",
        "Украсьте обложку тканью, аппликациями или рукописными подписями",
      ],
      text: "Они выглядят модно и дарят ребенку новые тактильные ощущения.",
    },
    {
      id: 3,
      headText: "Глиняная чашка своими руками",
      desc: "Совместное творчество всегда сближает и создает особую атмосферу дома. ",
      desc2: [
        "Лепите форму вместе, сглаживайте детали",
        "Оставляйте отпечатки пальчиков",
        "После высыхания распишите яркими красками, добавьте узоры или надписи",
      ],
      text: "Сделайте парные чаши, чтобы они напоминали вам о совместном время провождении",
    },
  ];

  const activeRecipe = recipeList[active - 1];

  useGSAP(() => {
    const cards = containerRef.current.querySelectorAll(".trend-card");

    cards.forEach((card, index) => {
      gsap.set(card, {
        zIndex: 10 - index,
        x: 0,
        opacity: 1,
      });
    });
  }, []);

  const handleChange = (num) => {
    if (num === active) return;

    const cards = containerRef.current.querySelectorAll(".trend-card");
    const targetIndex = num - 1;
    const transitionDuration = 0.8;

    cards.forEach((card, index) => {
      const isPastCard = index < targetIndex;
      const isActiveCard = index === targetIndex;

      // Сначала устанавливаем z-index для ушедших карточек выше
      if (isPastCard) {
        gsap.set(card, { zIndex: 40 });
      } else if (isActiveCard) {
        gsap.set(card, { zIndex: 30 });
      } else {
        gsap.set(card, { zIndex: 10 - index });
      }

      gsap.to(card, {
        x: isPastCard ? 600 : 0,
        opacity: isPastCard ? 0 : 1,
        duration: transitionDuration,
        ease: "power3.inOut",
      });
    });

    if (textRef.current) {
      const elements = Array.from(textRef.current.children); // заголовок, описание, список, основной текст

      // Fade out всех элементов одновременно
      gsap.to(elements, {
        opacity: 0,
        y: 0, // можно добавить небольшое смещение, если нужно
        duration: 0.3,
        ease: "power1.in",
        onComplete: () => {
          setActive(num); // смена текста

          // Плавное появление поочередно
          gsap.fromTo(
            Array.from(textRef.current.children),
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.1, // задержка между элементами
            }
          );
        },
      });
    }
  };

  return (
    <div
      id="fashion"
      className="min-h-screen  mt-0  max-sm:mt-15 overflow-hidden  max-sm:pt-5"
    >
      <div className="flex items-center justify-around max-sm:flex-col-reverse max-sm:gap-15">
        <div className=" flex items-start justify-center flex-col gap-12 w-1/2 max-sm:w-full max-sm:px-4 max-sm:items-center max-sm:gap-6">
          <div className="text-[#FF6B01] font-helvetica-black uppercase text-5xl max-sm:text-3xl w-[580px] max-sm:w-full max-sm:leading-none">
            <span className="text-[#0AC5A4] max-sm:leading-none">
              3 модные детали,
            </span>{" "}
            которые сделают ваш вечер особенным
          </div>
          <div
            ref={textRef}
            className="text-lg font-rooftop flex flex-col justify-center gap-3 max-sm:text-sm"
          >
            <div className="text-[28px] font-rooftop-bold max-sm:text-base">
              {activeRecipe.headText}
            </div>
            <div> {activeRecipe.desc}</div>
            {activeRecipe.desc2 && (
              <ol className="list-disc pl-5">
                {activeRecipe.desc2.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            )}
            <div>{activeRecipe.text}</div>
          </div>

          <div className="flex items-center justify-between gap-5 mt-2">
            {recipeList.map((r) => (
              <button
                key={r.id}
                onClick={() => handleChange(r.id)}
                className={`rounded-[20px] px-6 py-2 text-3xl max-sm:text-xl font-rooftop-bold cursor-pointer ${
                  active === r.id
                    ? "bg-[#FF6B01] text-white"
                    : "bg-white text-black"
                }`}
              >
                {r.id}
              </button>
            ))}
          </div>
        </div>
        <div
          className="relative aspect-3/4  w-[394px] max-sm:w-[270px] "
          ref={containerRef}
        >
          <div className="trend-card absolute top-0 left-0  w-[394px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4">
            <div className=" overflow-hidden rounded-2xl">
              <img
                src="/fashion1.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className=" trend-card absolute -top-5 -left-2 -rotate-2 w-[394px] max-sm:w-[270px]   mx-auto bg-white rounded-3xl shadow-xl p-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/fashion2.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="trend-card absolute top-0 left-0 -rotate-8 w-[394px] max-sm:w-[270px]  mx-auto bg-white rounded-3xl shadow-xl p-4">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/fashion3.webp"
                alt="Card"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

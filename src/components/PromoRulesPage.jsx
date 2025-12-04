import { Link } from "react-router-dom";

function PromoRulesPage() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-600 font-rooftop-bold text-lg transition-colors"
          >
            ← Назад
          </Link>
        </div>

        <h1 className="text-4xl font-rooftop-bold text-black mb-8 max-sm:text-3xl">
          Правила акции
        </h1>

        <div className="text-black font-rooftop text-base leading-relaxed space-y-6 max-sm:text-sm">
          <p className="font-rooftop-bold text-xl">«Play-Doh комбосына –10%»</p>

          <p>
            <strong>Терминдер:</strong>
          </p>
          <p>Науқан – «Play-Doh комбосына –10%» іс-шарасы.</p>
          <p>
            Ұйымдастырушы — «Додо Груп» ЖШС, БСН 220840015468, 050012, Алматы
            қаласы, Алмалы ауданы, Әди Шәріпов көшесі, № 92 үй, 50-кеңсе.
          </p>
          <p>
            Серіктес — «Partners Media Group» ЖШС, БСН 050740004383, 050002,
            Алматы қаласы, Зенков көшесі, № 22 үй, 600-кеңсе.
          </p>
          <p>Қосымша — «Додо Пицца: жеткізу, мейрамхана» мобильді қосымшасы;</p>
          <p>
            Elle сайты —{" "}
            <a
              href="https://elle.com.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              https://elle.com.kz/
            </a>
            ;
          </p>
          <p>
            Elle инстаграмы —{" "}
            <a
              href="https://www.instagram.com/elle_kazakhstan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              https://www.instagram.com/elle_kazakhstan/
            </a>
            ;
          </p>
          <p>
            Сайт —{" "}
            <a
              href="https://dodopizza.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              dodopizza.kz
            </a>
            ;
          </p>
          <p>Пиццерия — «Додо Пицца» пиццериялар желісінің пиццериясы.</p>

          <p className="font-rooftop">
            <strong>
              Науқанға қатысу үшін Қатысушы мыналарды орындауы керек:
            </strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Науқанның Ережелерімен танысып шығу;</li>
            <li>Elle сайтына немесе Elle инстаграмына кіру;</li>
            <li>
              Elle сайтындағы баннерді немесе Elle Инстаграмындағы постта
              көрсетілген сілтемені басу;
            </li>
            <li>
              Play-Doh-мен бірлесіп жаңа «Play Dodo Combo» өнімін шығаруға
              орайластырылған арнайы Elle және Додо лендингіне өту;
            </li>
            <li>Лендингте «Сіз балаңызбен қандай дуосыз» деген тесттен өту;</li>
            <li>Арнайы промокодты алу;</li>
            <li>Қосымшаға өту;</li>
            <li>Себетке Play Doh комбосын қосу;</li>
            <li>Арнайы өріске промокодты енгізу;</li>
            <li>Комбоға 10% жеңілдіктің қолданылғанына көз жеткізу;</li>
            <li>Тапсырысты ресімдеу.</li>
          </ul>

          <p>
            Науқанның қолданылу мерзімі{" "}
            <span className="font-rooftop-bold">
              04.12.2025 бастап 31.12.2025 дейін қоса алғанда.
            </span>
          </p>

          <p>
            <strong>Науқанның қолданылу шектеулері:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>басқа комболармен әрекет етпейді;</li>
            <li>басқа науқандармен қолданылуы — Жоқ;</li>
            <li>қосылған ингредиенттерге қолданылуы — Жоқ;</li>
            <li>бір клиент үшін неше рет қолданылады — Бір рет;</li>
            <li>қайда қолдануға болады — Қосымша;</li>
            <li>
              тапсырыстың қандай түрлеріне қолданылады — Пиццерия залында, Өзі
              алып кетуге, Жеткізуге;
            </li>
            <li>
              жеткізуге тапсырыс бергенде тапсырыстың минималды сомасына жету
              керек. Ол науқан қолданылатын сомадан жоғары болуы мүмкін.
            </li>
          </ul>

          <p>
            Ұйымдастырушы біржақты тәртіппен Науқанның қолданылу мерзімін және
            өзге де шарттарын өзгертуге құқылы.
          </p>
          <p>
            Өнімдер мен олардың құны туралы ақпарат —{" "}
            <a
              href="https://dodopizza.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              dodopizza.kz
            </a>{" "}
            сайтында, Қосымшада.
          </p>

          <hr className="my-10" />

          <p className="font-rooftop-bold text-xl">«–10% на комбо Play-Doh»</p>

          <p>
            <strong>Термины:</strong>
          </p>
          <p>Акция – мероприятие “–10% на комбо Play-Doh”.</p>
          <p>
            Организатор — ТОО "Додо Груп", БИН 220840015468, 050012, город
            Алматы, Алмалинский район, улица Ади Шарипова, дом № 92, офис 50.
          </p>
          <p>
            Партнер — ТОО "Partners Media Group", БИН 050740004383, 050002,
            город Алматы, улица Зенкова, дом № 22, офис 600.
          </p>
          <p>
            Приложение — мобильное приложение “Додо Пицца: доставка, ресторан”;
          </p>
          <p>
            Сайт Elle —{" "}
            <a
              href="https://elle.com.kz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              https://elle.com.kz/
            </a>
            ;
          </p>
          <p>
            Инстаграм Elle —{" "}
            <a
              href="https://www.instagram.com/elle_kazakhstan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              https://www.instagram.com/elle_kazakhstan/
            </a>
            ;
          </p>
          <p>
            Сайт —{" "}
            <a
              href="https://dodopizza.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              dodopizza.kz
            </a>
            ;
          </p>
          <p>Пиццерия — пиццерия сети пиццерий “Додо Пицца”.</p>

          <p>
            <strong>Для участия в Акции Участнику необходимо:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ознакомиться с Правилами Акции;</li>
            <li>Зайти на Сайт Elle или в Инстаграм Elle;</li>
            <li>
              Кликнуть на баннер на Сайте Elle или на ссылку в посте в Инстаграм
              Elle;
            </li>
            <li>
              Перейти на специальный лендинг Elle и Додо, приуроченный к выходу
              нового продукта в коллаборации с Play-Doh — “Play Dodo Combo”;
            </li>
            <li>Пройти тест "Какое вы дуо с ребенком" на лендинге;</li>
            <li>Получить специальный промокод;</li>
            <li>Перейти в Приложение;</li>
            <li>Добавить в корзину комбо Play Doh;</li>
            <li>Вставить промокод в специальное поле;</li>
            <li>Убедиться что скидка 10% применилась к комбо;</li>
            <li>Оформить заказ.</li>
          </ul>

          <p>
            Срок действия акции{" "}
            <span className="font-rooftop-bold">
              с 04.12.2025 по 31.12.2025 включительно.
            </span>
          </p>

          <p>
            <strong>Ограничения действия Акции:</strong>
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>не действует с иными комбо;</li>
            <li>действие с другими акциями — Нет;</li>
            <li>действие на добавленные ингредиенты — Нет;</li>
            <li>сколько раз действует для одного клиента — Однократно;</li>
            <li>где можно применить — Приложение;</li>
            <li>
              на какие типы заказов действует — В зале пиццерии, На самовывоз,
              На доставку;
            </li>
            <li>
              при заказе на доставку необходимо набрать минимальную сумму
              заказа. Она может быть выше, чем сумма, от которой действует
              акция.
            </li>
          </ul>

          <p>
            Организатор вправе в одностороннем порядке изменить срок действия и
            другие условия Акции.
          </p>
          <p>
            Информация о продукции и ее стоимости — на{" "}
            <a
              href="https://dodopizza.kz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline hover:text-orange-600"
            >
              dodopizza.kz
            </a>
            , в Приложении.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PromoRulesPage;

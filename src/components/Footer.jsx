export function Footer() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-12 max-sm:px-4 max-sm:gap-9 max-sm:items-start max-sm:mt-20 ">
      <div className="text-[#FF6B01] text-[60px] font-helvetica-black uppercase max-sm:text-3xl">
        Над проектом работали:
      </div>
      <div className="flex items-start justify-center gap-28 max-sm:flex-col max-sm:gap-0 max-sm:justify-start">
        <div className="flex flex-col justify-center font-rooftop text-2xl max-sm:text-sm">
          Проджект-менеджер - Сагындык Туртулов
          <br />
          Креативный менеджер - Лана Тажетдинова
          <br />
          Дизайнер - Алишер Мажитов
          <br />
          Front-End Dev - Еркебұлан Койшыбай
          <br />
          Менеджер по рекламе - Матвей Колташев
        </div>
        <div className="flex flex-col justify-center font-rooftop text-2xl max-sm:text-sm">
          Редактор - Тансу Оспан
          <br />
          Фотограф - Марина Гришко
          <br />
          Стилист - Айдана Турганбай
          <br />
          Макияж и прически - Амина Аскарова
        </div>
      </div>
    </div>
  );
}

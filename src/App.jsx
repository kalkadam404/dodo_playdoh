import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DiyDecor } from "./components/DiyDecor";
import { FashionDetail } from "./components/FashionDetail";
import FashionTips from "./components/FashionTips";
import PromoRulesPage from "./components/PromoRulesPage";

import { Footer } from "./components/Footer";
import { HeadBlock } from "./components/HeadBlock";
import { TrendColor } from "./components/TrendColor";
import { WhoAreBlock } from "./components/WhoAreBlock";
import { YourDuo } from "./components/YourDuo";
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function HomePage() {
  const location = useLocation();

  // Восстанавливаем состояние из sessionStorage при монтировании
  const [testFinished, setTestFinished] = useState(() => {
    const saved = sessionStorage.getItem("testFinished");
    return saved === "true";
  });
  const [resultType, setResultType] = useState(() => {
    const saved = sessionStorage.getItem("testResultType");
    return saved ? parseInt(saved, 10) : null;
  });

  const handleTestFinish = (resultGroup) => {
    setResultType(resultGroup);
    setTestFinished(true);
    // Сохраняем состояние в sessionStorage (очистится при перезагрузке страницы)
    sessionStorage.setItem("testFinished", "true");
    sessionStorage.setItem("testResultType", resultGroup.toString());
  };

  useEffect(() => {
    if (!testFinished) return;

    // Проверяем, возвращаемся ли мы со страницы правил
    const fromPromoRules = sessionStorage.getItem("fromPromoRules") === "true";

    // Определяем цель прокрутки
    const targetSelector = fromPromoRules ? "#promo-code" : "#duo";
    const target = document.querySelector(targetSelector);

    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: "power3.inOut",
        onComplete: () => {
          ScrollTrigger.refresh();
          // Очищаем флаг после прокрутки
          if (fromPromoRules) {
            sessionStorage.removeItem("fromPromoRules");
          }
        },
      });
    }
  }, [testFinished, location.pathname]);

  return (
    <>
      <div className="container mx-auto py-20 ">
        <HeadBlock />
        <WhoAreBlock onFinish={handleTestFinish} />
      </div>
      {testFinished && (
        <>
          <YourDuo initialActive={resultType} />
          <FashionTips />
          <div className="container mx-auto py-20">
            <TrendColor />
            <FashionDetail />
            <DiyDecor />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/promo-rules" element={<PromoRulesPage />} />
    </Routes>
  );
}

export default App;

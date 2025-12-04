import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
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
  const [testFinished, setTestFinished] = useState(false);
  const [resultType, setResultType] = useState(null);

  const handleTestFinish = (resultGroup) => {
    setResultType(resultGroup);
    setTestFinished(true);
  };

  useEffect(() => {
    if (!testFinished) return;

    const target = document.querySelector("#duo");

    gsap.to(window, {
      duration: 1,
      scrollTo: target,
      ease: "power3.inOut",
      onComplete: () => {
        ScrollTrigger.refresh();
      },
    });
  }, [testFinished]);

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

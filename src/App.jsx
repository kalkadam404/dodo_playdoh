import { useState } from "react";
import { DiyDecor } from "./components/DiyDecor";
import { FashionDetail } from "./components/FashionDetail";
import FashionTips from "./components/FashionTips";

import { Footer } from "./components/Footer";
import { HeadBlock } from "./components/HeadBlock";
import { TrendColor } from "./components/TrendColor";
import { WhoAreBlock } from "./components/WhoAreBlock";
import { YourDuo } from "./components/YourDuo";

function App() {
  const [testFinished, setTestFinished] = useState(false);
  const [resultType, setResultType] = useState(null);

  const handleTestFinish = (resultGroup) => {
    setResultType(resultGroup);
    setTestFinished(true);
  };
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

export default App;

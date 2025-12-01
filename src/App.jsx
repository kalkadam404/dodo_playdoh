import { DiyDecor } from "./components/DiyDecor";
import { FashionDetail } from "./components/FashionDetail";
import FashionTips from "./components/fashionTips";

import { Footer } from "./components/Footer";
import { HeadBlock } from "./components/HeadBlock";
import { TrendColor } from "./components/TrendColor";
import { WhoAreBlock } from "./components/WhoAreBlock";
import { YourDuo } from "./components/YourDuo";

function App() {
  return (
    <>
      <div className="container mx-auto py-20 ">
        <HeadBlock />
        <WhoAreBlock />
      </div>
      <YourDuo />
      <FashionTips />
      <div className="container mx-auto py-20">
        <TrendColor />
        <FashionDetail />
        <DiyDecor />
        <Footer />
      </div>
    </>
  );
}

export default App;

import {
  HiOutlineChartBar,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineComputerDesktop,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

import WhatLi from "./WhatLi";

function What() {
  return (
    <div className="px-80 h-screen w-screen flex flex-col gap-24 justify-center items-center bg-mainColor">
      <h1 className="text-7xl font-medium text-white font-montserrat uppercase ">
        What can I do for you?
      </h1>
      <ul className="flex gap-16">
        <WhatLi
          icon={<HiOutlineChartBar />}
          header="Marketing"
          paragraph="Advanced analysis and strategies that will increase your salesand reduce the costs of marketing campaigns."
        />
        <WhatLi
          icon={<HiOutlineChatBubbleOvalLeftEllipsis />}
          header="Copywriting"
          paragraph="Texts that will build the image of your brand."
        />
        <WhatLi
          icon={<HiOutlineComputerDesktop />}
          header="UX Design"
          paragraph="Fully functional, customer-friendly web design which improvesthe sales and experiences of customer with brand."
        />
        <WhatLi
          icon={<HiOutlineGlobeAlt />}
          header="Optimization"
          paragraph="Content + SEO for your website and social media."
        />
      </ul>
    </div>
  );
}

export default What;

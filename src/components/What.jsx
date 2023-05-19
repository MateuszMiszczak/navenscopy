import {
  HiChartBarSquare,
  HiPencil,
  HiWindow,
  HiAdjustmentsVertical,
} from "react-icons/hi2";

import WhatLi from "./WhatLi";

function What() {
  return (
    <div className="px-80 min-h-screen flex flex-col gap-16 justify-center bg-sectionWhat">
      <h1 className="text-7xl font-medium text-gray-800 font-cinzel">
        What can I do for you?
      </h1>
      <ul className="flex flex-col gap-12">
        <WhatLi
          icon={<HiChartBarSquare />}
          header="Marketing"
          paragraph="Advanced analysis and strategies that will increase your salesand reduce the costs of marketing campaigns."
        />
        <WhatLi
          icon={<HiPencil />}
          header="Content marketing"
          paragraph="Texts that will build the image of your brand. "
        />
        <WhatLi
          icon={<HiWindow />}
          header="UX Design"
          paragraph="Fully functional, customer-friendly web design which improvesthe sales and experiences of customer with brand."
        />
        <WhatLi
          icon={<HiAdjustmentsVertical />}
          header="Optimization"
          paragraph="Content + SEO for your website and social media."
        />
      </ul>
    </div>
  );
}

export default What;

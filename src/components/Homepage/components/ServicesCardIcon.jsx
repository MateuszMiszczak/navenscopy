import {
  HiOutlineChartBar,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

function ServicesCardIcon({ icon }) {
  let currIcon;

  switch (icon) {
    case 1:
      currIcon = <HiOutlineChartBar />;
      break;
    case 2:
      currIcon = <HiOutlineChatBubbleOvalLeftEllipsis />;
      break;
    case 3:
      currIcon = <HiOutlineComputerDesktop />;
      break;
    default:
      currIcon = <div>Icon</div>;
  }

  return currIcon;
}

export default ServicesCardIcon;

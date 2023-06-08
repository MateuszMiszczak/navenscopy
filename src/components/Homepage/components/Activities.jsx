import ActivitiesCard from "./ActivitiesCard";
import { activitiesData } from "../../../data/activitiesData";

function Activities() {
  const renderCard = activitiesData.map((cardData) => {
    return (
      <ActivitiesCard
        key={cardData.id}
        icon={cardData.icon}
        header={cardData.header}
        paragraph={cardData.paragraph}
      />
    );
  });

  return (
    <div className="mx-auto flex w-3/5 flex-col items-center gap-4 text-center md:gap-8 lg:flex-row lg:justify-center lg:gap-24 xl:gap-48">
      {renderCard}
    </div>
  );
}

export default Activities;

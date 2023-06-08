import ActivitiesCardIcon from "./ActivitiesCardIcon";

function ActivitiesCard({ icon, header, paragraph }) {
  return (
    <div className="xl:scale-125">
      <div className="flex min-h-[500px] min-w-[300px] max-w-[350px] flex-col items-center gap-6 rounded-md border border-gray-400 p-4 py-12 shadow-lg shadow-gray-300">
        <div>
          <div className="h-52 w-52 overflow-hidden rounded-full bg-gradient-to-r from-roundedBorderColor3 via-roundedBorderColor2 to-roundedBorderColor1 p-2">
            <div className="back flex h-full w-full items-center justify-center rounded-full bg-white">
              <div className="text-8xl font-black text-headerColor">
                {/* <ActivitiesCardIcon icon={icon} /> */}
                123
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-10">
          <h2 className="text-2xl uppercase text-black md:text-4xl">
            {header}
          </h2>
          <p className="text-black-300 text-md md:text-xl">{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default ActivitiesCard;

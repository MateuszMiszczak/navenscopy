function WhatLi({ icon, header, paragraph }) {
  return (
    <li>
      <div className="flex gap-6">
        <div className="text-7xl text-gray-800 place-self-center">{icon}</div>
        <div className="flex flex-col gap-1">
          <h2 className="place-self-start text-4xl text-lighterMainText">
            {header}
          </h2>
          <p className="place-self-start text-xl text-gray-800">{paragraph}</p>
        </div>
      </div>
    </li>
  );
}

export default WhatLi;

import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <img src={props.imgsrc} alt="" className="h-60 w-full object-cover" />
        <div className="p-4 flex justify-between">
        <div>
          <h3 className="text-base font-bold mb-2 w-72">{props.title}</h3>
          <p className="text-gray-600">Card description goes here.</p>
          <button className="border border-blue-400 h-8 w-28 rounded-xl font-semibold hover:bg-green-400 hover:text-white">
            Click Here
          </button>
          </div>
          <div>
            <li>{props.date}</li>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

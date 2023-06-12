import React from "react";
import Card from "./Card";
import Sdata from "./Card_data";

const Services = () => {
  return (
    <>
      <div className="bg-black md:grid md:grid-cols-2 md:gap-8 md:p-14 sm:grid-cols-1 pl-8 pr-8">
        {Sdata.map((val, ind) => (
          <Card key={ind} imgsrc={val.imgsrc} title={val.title} date={val.date}/>
        ))}
      </div>
    </>
  );
};

export default Services;

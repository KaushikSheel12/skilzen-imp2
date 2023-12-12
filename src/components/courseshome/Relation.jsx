import React from "react";
import RelationBox from "./RelationBox";
import { ImgData } from "./data/data";

const Relation = () => {
  return (
    <>
      <div className="md:w-[70%] w-full mx-auto mt-6 grid md:grid-cols-4 grid-cols-1  h-full  py-2">
        {ImgData.map((el, index) => {
          return (
            <div key={index}>
              <RelationBox imgUrl={el.url} text={el.title} course={el.course} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Relation;

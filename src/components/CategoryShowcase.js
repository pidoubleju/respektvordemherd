import React from "react";
import ShowcaseCategory from "./ShowcaseCategory";

function CategoryShowcase({ data }) {
  return (
    <div className="category-showcase container flex">
      <h2>{data.header[0].text}</h2>
      {data.kategorien.map((kat, index) => {
        kat.index = index;
        return <ShowcaseCategory categoryInfo={kat} key={index} />;
      })}
    </div>
  );
}

export default CategoryShowcase;

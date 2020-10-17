import React from "react";
import '../styles/components/ShowcaseCategory.css';

function ShowcaseCategory({ categoryInfo }) {
  console.log(categoryInfo);
  return (
    <div className={`showcase-category flex w-100 ${categoryInfo.index % 2 !== 0 ? 'order-switch' : ''}`}>
      <div className="wrapper flex">
        <div className="cat-img flex">
          <img
            width={categoryInfo.kategorie_bild.dimensions.width}
            src={categoryInfo.kategorie_bild.url}
          />
        </div>
        <div className="wrapper cat-info flex">
          <p><h2>{categoryInfo.kategorie_titel[0].text}</h2>{categoryInfo.kategorie_text[0].text}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCategory;

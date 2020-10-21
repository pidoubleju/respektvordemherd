import React from "react";
import '../styles/components/ShowcaseCategory.css';

function ShowcaseCategory({ categoryInfo }) {
  return (
    <div className={`showcase-category flex w-100 ${categoryInfo.index % 2 !== 0 ? 'order-switch' : ''}`}>
      <div className="wrapper flex w-100 justify-between">
        <div className="cat-img flex">
          <img
            width={categoryInfo.kategorie_bild.dimensions.width}
            src={categoryInfo.kategorie_bild.url}
            alt="category-img"
          />
        </div>
        <div className="wrapper cat-info flex">
          <p><span className="h3">{categoryInfo.kategorie_titel[0].text}</span>{categoryInfo.kategorie_text[0].text}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCategory;

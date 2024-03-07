import React, { useState, useEffect } from "react";
import "./Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import datas from "./../../datas";

export default function Menu() {
  const [data, setData] = useState(datas);
  const [filteredData, setFilteredData] = useState(datas);
  const [activeBtn, setActiveBtn] = useState(null);

  const allHandler = () => {
    setFilteredData(datas);
    setActiveBtn("all");
  };

  const breakfastHandler = () => {
    let breakfastDatas = data.filter((item) => item.type == "breakfast");
    setData(data);
    setFilteredData(breakfastDatas);
    setActiveBtn("breakfast");
  };

  const lunchHandler = () => {
    let lunchDatas = data.filter((item) => item.type == "lunch");
    setData(data);
    setFilteredData(lunchDatas);
    setActiveBtn("lunch");
  };

  const shakesHandler = () => {
    let shakesDatas = data.filter((item) => item.type == "shake");
    setData(data);
    setFilteredData(shakesDatas);
    setActiveBtn("shakes");
  };

  return (
    <div className="menu-container">
      <div className="menu-title">
        <h1>Our Menu</h1>
        <span className="border-bottom"></span>
      </div>

      <div className="menu">
        <ul>
          <li
            onClick={allHandler}
            className={activeBtn == "all" ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={breakfastHandler}
            className={activeBtn == "breakfast" ? "active" : ""}
          >
            Breakfast
          </li>
          <li
            onClick={lunchHandler}
            className={activeBtn == "lunch" ? "active" : ""}
          >
            Lunch
          </li>
          <li
            onClick={shakesHandler}
            className={activeBtn == "shakes" ? "active" : ""}
          >
            Shakes
          </li>
        </ul>

        <div className="items">
          {filteredData.map((data) => (
            <div key={data.id} className="item">
              <MenuItem {...data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

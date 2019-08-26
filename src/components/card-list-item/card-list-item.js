import React from "react";
import "./card-list-item.css";
import icon from "./icon.svg";

const CardListItem = ({ elem }) => {

  const iconStyle = {
    width: 90,
    display: "flex",
    justifyContent: "space-between"
  };

  let is_required = elem.is_required !== undefined? true : false;
  let start = elem.deadline || elem.startDate

  return (
    <div className="card-wrapper">
      <div className="card-wiew">
        <div>
          <span>Статус: </span>
          <span>{elem.state}</span>
        </div>
      </div>
      <div className="card-info">
        {is_required && (
          <div className="card-level-urgent">
            <span>{elem.is_required}</span>
          </div>
        )}
        <div className="card-time-wrapper">
        {start && (
            <span className="card-date">Пройти до {start}</span> 
        )}
          <div style={iconStyle}>
            <img src={icon} alt = 'time-icon'/>
            <span className="card-time">{elem.timeLimit} минут</span>
          </div>
        </div>
        <p className="card-title">{elem.title}</p>
        <div className="card-progress-wrapper">
          <button>Продолжить</button>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;

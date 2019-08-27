import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./card-list-item.css";
import icon from "./icon.svg";

const CardListItem = ({ elem }) => {
  const percentage = elem.progress !== false ? elem.progress : false;
  const iconStyle = {
    width: 90,
    display: "flex",
    justifyContent: "space-between"
  };

  const statusClass = elem.status_class !== undefined ? elem.status_class : '';
  const strokeColor = (status) => {
    let color = '';
    switch (status) {
      case 'c_progress' : color = '#f5b800';
      break;

      case 'c_success' : color = '#6bca6b';
      break;
      
      case 'c_assigned' : color = '#989898';
      break;

      case 'c_fail' : color = 'tomato';
      break;

      default: color = '#3e98c7';
    
    }

    return color;
  }

  let is_required = elem.is_required !== undefined? true : false;
  let start = elem.deadline || elem.startDate

  return (
    <div className="card-wrapper">
      <div className="card-wiew">
        <div className={statusClass}>
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
          {percentage && <div><CircularProgressbar 
                                value={elem.progress} 
                                text={`${elem.progress}%`} 
                                strokeWidth = {10} 
                                styles={buildStyles({pathColor: strokeColor(statusClass), trailColor: 'none'})} /></div>}
        </div>
      </div>
    </div>
  );
};

export default CardListItem;

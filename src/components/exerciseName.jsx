import React from 'react';

function ExerciseName(props) {
  return (
    <li className={props.isActive} onClick={props.onClick}>
      <span>{props.name}</span>
    </li>
  )
};

export default ExerciseName;
import React from 'react';
import Video from './video';

function ExerciseDescription(props) {
  const name = props.activeExercise.name;
  const description = props.activeExercise.description;
  const videoUrl = props.activeExercise.video ? props.activeExercise.video.url : '';

  return (
    <div>
      <div className="description_container">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <Video video={videoUrl} showVideo={props.showVideo}/>
    </div>
  )
}

export default ExerciseDescription;
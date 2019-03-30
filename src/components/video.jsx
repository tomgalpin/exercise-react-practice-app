import React from 'react';

function Video(props) {
  /*
    ToDo: fade video in and out to hide load and resizing
  */
  return (
    <div>
      <div className="video_container">
        <video key={props.video} controls>
          <source src={props.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )

}

export default Video;
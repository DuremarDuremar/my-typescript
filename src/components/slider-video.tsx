import React from "react";

function SliderVideo() {
  // console.log(fetchVideo());

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0IMz8d9Cby4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default SliderVideo;

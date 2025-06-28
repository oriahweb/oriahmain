"use client";
import React from "react";
import { Leaf } from "../svg";

const VideoTwo = () => {
  return (
    <div className="tp-video-area w-full">
      <div className="container container-1870">
        <div className="row">
          <div className="col-xl-12 rounded-[20px]">
            <div className="tp-video-wrap relative w-full overflow-hidden rounded-[20px]">
              <video
                className="play-video w-full  max-h-[110vh] object-cover rounded-[20px]"
                loop
                muted
                autoPlay
                playsInline
              >
                <source src="/assets/video/vid1.mp4" type="video/mp4" />
              </video>
              <div className="tp-video-content absolute inset-0 flex flex-col items-center justify-center px-4 text-white text-center bg-black/40 w-full sm:w-[90%] mx-auto">
                <span className="tp-video-subtitle flex items-center gap-2 text-sm sm:text-base mb-2">
                  <span>
                    <Leaf />
                  </span>
                  Créativité en action
                </span>
                <h2 className="tp-video-title text-2xl sm:text-4xl font-bold mb-2">
                  Notre univers
                </h2>
                <p className="text-xs sm:text-base max-w-sm sm:max-w-md">
                  Chaque projet raconte une histoire unique. Mettez vos écouteurs et plongez dans notre monde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTwo;

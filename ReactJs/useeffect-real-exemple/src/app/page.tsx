"use client"

import VideoPlayer from "@/components/VideoPlayer";
import { useState } from "react";

const Page = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const urlVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

  return(
    <div className="w-screen h-screen flex justify-center items-center flex-col-reverse">
      <div className="flex gap-3 h-fit m-5 items-center">
        <p className="text-2xl uppercase">{isPlaying ? "Rodando" : "Pausado"}</p>
        <button 
        className="bg-black px-5 py-2 text-white rounded-md"
        onClick={() => setIsPlaying(!isPlaying)}
        >Play/Pause</button>
      </div>
      <VideoPlayer 
        src={urlVideo}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default Page;
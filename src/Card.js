import React from "react";
import { useStore } from "./App";

const Card = () => {
  const bears = useStore((state) => state.bears);

  return (
    <div>
      {bears > 0
        ? Array(bears)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src="https://i.namu.wiki/i/bDPtFmEdnrEVrP6VZGytq04OrOpubv5MC3b6F7yRId5ddFFHHrc8QmdOG3iVdrvMqfgXVxw9Vvp4Q9zZInokOQOWf7TWhNxNER1W2Xranfy2fP-fhZJMZoAPcXe8iEvnlPMafFTXyWXWj8NotFIDmw.webp"
                alt="Joke Bear"
              />
            ))
        : Array(-1 * bears)
            .fill(0)
            .map((_, index) => (
              <img
                key={index}
                src="https://i.namu.wiki/i/Wt7Efq0TBZcGx_xFuo-miuVWiVa26GptF7tWqXHuUcBXf1-0nmKkO_gcOQuyUwb-qPypXKspOXK3UcY3TX-eMUDYBARXTH3Hhx3_gS0BKtMthugyOE8k0ktH92fBqiG5QLHpqtn4tlkZmq8D2yrjYA.webp"
                alt="Joke Bear"
              />
            ))}
    </div>
  );
};

export default Card;

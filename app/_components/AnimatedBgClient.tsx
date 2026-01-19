"use client";

import { AnimatedBackground } from "animated-backgrounds";

export default function AnimatedBgClient() {
  return (
    <AnimatedBackground
      animationName="auroraBorealis"
      theme="portfolio"
      interactive={true}
      interactionConfig={{
        effect: "attract",
        strength: 0.8,
        radius: 150,
        continuous: true,
      }}
      performanceConfig={{
        adaptivePerformance: true,
        maxFps: 60,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}
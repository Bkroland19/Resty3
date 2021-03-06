import React from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Video } from "../components/Video";
import { HeroText } from "../components/Hero";

const videos = [
  {
    title: "Theory on how to use the white space properly",
    date: "April 14th",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  {
    title: "How to manage projects properly",
    date: "May 20th",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY"
  }
];

const Videos= () => (
  <div>
    <AnimatedSection>
      <HeroText text={"Videos"} />
      {Videos.map(Videos => (
        <Video {...Videos} key={Videos.title} />
      ))}
    </AnimatedSection>
  </div>
);

export default Videos;

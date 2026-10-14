// import React from 'react'
import { Inestagram } from "./components/Inestagram";
import { Linkedin } from "./components/Linkdin";
import { Tellegram } from "./components/Tellegram";
import { YouTube } from "./components/YouTube";

const SocialMedia = () => {
  return (
    <div className="h-8.75 flex gap-1.5">
      <Tellegram />
      <Inestagram />
      <YouTube />
      <Linkedin />
    </div>
  );
};

export { SocialMedia };

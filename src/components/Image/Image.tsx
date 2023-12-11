import React from "react";

export interface ImageProps {
  imgSrc: string;
}

const Image: React.FC<ImageProps> = ({ imgSrc }) => {
  return <img src={imgSrc} className="image" />;
};

export default Image;

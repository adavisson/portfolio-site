import React from 'react';

export interface IImageProps {
  imgSrc: string;
}

const Image: React.FC<IImageProps> = ({ imgSrc }) => {
  return <img src={imgSrc} className='image' />;
};

export default Image;

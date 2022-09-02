import React from 'react';
import Slider from '../../components/Slider';
import { imagesList } from '../../components/Slider/sliderData';

export default function Products() {
  return <Slider slides={imagesList} />;
}

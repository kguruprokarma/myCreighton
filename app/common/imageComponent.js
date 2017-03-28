/*Created Date: - 22-03 -2017
 *Usage of file: - This component is used include images.*
 */

import React from 'react';
import { Image } from 'react-bootstrap';

const ImageComponent = (imageProps) => (
  <figure>
    <Image src={imageProps.imagePath} width={imageProps.imageWidth} />
  </figure>
);

export default ImageComponent;
/*Created Date: - 22-03 -2017
 *Usage of file: - This component is used include images.*
 */

import React from 'react';
import { Image } from 'react-bootstrap';

const ImageComponent = (imageProps) => (
  <Image src={imageProps.imagePath} width={imageProps.imageWidth} alt={imageProps.imagealtText} className={imageProps.imgClassName} />
);

export default ImageComponent;
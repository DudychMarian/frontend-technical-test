import React, { useState } from 'react';

function VehicleImage({ name, media }) {
  const [imgError, setImgError] = useState(false);

  return (
    media.length > 1 ? (
      <picture className="card__picture">
        <source
          media="(min-width: 768px)"
          onError={() => setImgError(true)}
          srcSet={!imgError ? media[0].url : '/images/16x9/coming-soon.jpg'}
        />
        <img data-testid="multiple-imgs" onError={() => setImgError(true)} className="card__image" src={!imgError ? media[1].url : '/images/16x9/coming-soon.jpg'} alt={`Jaguar ${name}`} />
      </picture>
    ) : (
      <img data-testid="single-img" className="card__image" src="/images/1x1/coming-soon.jpg" alt={`Jaguar ${name}`} />
    )
  );
}

export default VehicleImage;

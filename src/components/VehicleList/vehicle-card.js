import React from 'react';
import VehicleImage from './vehicle-image';

function VehicleCard({
  name, media, price, description
}) {
  return (
    <div className="card" data-testid="vehicle-card">
      <VehicleImage
        name={name}
        media={media}
      />
      <div className="card__body">
        {name && (
        <h1 className="card__title" data-testid="vehicle-card--title">
          {`Jaguar ${name}`}
        </h1>
        )}
        {price && (
        <p className="card__price" data-testid="vehicle-card--price">
          From
          {' '}
          {price}
        </p>
        )}
        {description && (
        <p className="card__copy" data-testid="vehicle-card--description">
          {description}
        </p>
        )}
      </div>
    </div>
  );
}

export default VehicleCard;

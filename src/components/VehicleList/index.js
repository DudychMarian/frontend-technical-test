import React from 'react';
import useData from './useData';
import './style.scss';
import VehicleCard from './vehicle-card';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{error}</div>;
  }

  return (
    <div data-testid="results" id="vehicle-list">
      <div className="row">
        {vehicles.length > 0 ? (
          vehicles
            .filter((v) => v.price)
            .map((v) => (
              <div key={`Jaguar-${v.id}`} className="column">
                <VehicleCard
                  name={v.id}
                  media={v.media}
                  price={v.price}
                  description={v.description}
                />
              </div>
            ))
        ) : (
          <h1>No vehicles to show :(</h1>
        )}
      </div>
    </div>
  );
}

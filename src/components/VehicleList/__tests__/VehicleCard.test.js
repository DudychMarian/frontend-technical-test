import React from 'react';
import { render } from '@testing-library/react';
import VehicleCard from '../vehicle-card';

describe('<VehicleCard /> Tests', () => {
  it('Should render vehicle card', () => {
    const mProps = {
      name: 'mockName',
      media: [
        '/images/mock-image.jpg',
        '/images/mock-image.jpg',
      ],
      price: '£30,000',
      description: 'Mock Description'
    };

    const { queryByTestId } = render(<VehicleCard name={mProps.name} media={mProps.media} price={mProps.price} description={mProps.description} />);

    expect(queryByTestId('vehicle-card')).not.toBeNull();
    expect(queryByTestId('vehicle-card--title')).not.toBeNull();
    expect(queryByTestId('vehicle-card--price')).not.toBeNull();
    expect(queryByTestId('vehicle-card--description')).not.toBeNull();
  });

  it('Should not render title', () => {
    const mProps = {
      media: [
        '/images/mock-image.jpg',
        '/images/mock-image.jpg',
      ],
      price: '£30000',
      description: 'Mock Description'
    };

    const { queryByTestId } = render(<VehicleCard media={mProps.media} price={mProps.price} description={mProps.description} />);

    expect(queryByTestId('vehicle-card')).not.toBeNull();
    expect(queryByTestId('vehicle-card--title')).toBeNull();
    expect(queryByTestId('vehicle-card--price')).not.toBeNull();
    expect(queryByTestId('vehicle-card--description')).not.toBeNull();
  });

  it('Should not render price', () => {
    const mProps = {
      name: 'mockName',
      media: [
        '/images/mock-image.jpg',
        '/images/mock-image.jpg',
      ],
      description: 'Mock Description'
    };

    const { queryByTestId } = render(<VehicleCard name={mProps.name} media={mProps.media} description={mProps.description} />);

    expect(queryByTestId('vehicle-card')).not.toBeNull();
    expect(queryByTestId('vehicle-card--title')).not.toBeNull();
    expect(queryByTestId('vehicle-card--price')).toBeNull();
    expect(queryByTestId('vehicle-card--description')).not.toBeNull();
  });

  it('Should not render description', () => {
    const mProps = {
      name: 'mockName',
      media: [
        '/images/mock-image.jpg',
        '/images/mock-image.jpg',
      ],
      price: '£30000'
    };

    const { queryByTestId } = render(<VehicleCard name={mProps.name} media={mProps.media} price={mProps.price} />);

    expect(queryByTestId('vehicle-card')).not.toBeNull();
    expect(queryByTestId('vehicle-card--title')).not.toBeNull();
    expect(queryByTestId('vehicle-card--price')).not.toBeNull();
    expect(queryByTestId('vehicle-card--description')).toBeNull();
  });
});

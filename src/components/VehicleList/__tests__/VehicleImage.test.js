import React from 'react';
import { render } from '@testing-library/react';
import VehicleImage from '../vehicle-image';

describe('<VehicleImage /> Tests', () => {
  it('Should render art direction image', () => {
    const mProps = {
      name: 'mockName',
      media: [
        '/images/mock-image.jpg',
        '/images/mock-image.jpg',
      ]
    };

    const { queryByTestId } = render(<VehicleImage name={mProps.name} media={mProps.media} />);

    expect(queryByTestId('multiple-imgs')).not.toBeNull();
    expect(queryByTestId('single-img')).toBeNull();
  });

  it('Should render a single image', () => {
    const mProps = {
      name: 'mockName',
      media: [
        '/images/mock-image.jpg',
      ]
    };

    const { queryByTestId } = render(<VehicleImage name={mProps.name} media={mProps.media} />);

    expect(queryByTestId('multiple-imgs')).toBeNull();
    expect(queryByTestId('single-img')).not.toBeNull();
  });
});

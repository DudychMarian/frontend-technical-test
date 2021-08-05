// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await fetch('/api/vehicles.json').then((data) => data.json());
  try {
    const vehicleResponses = await Promise.all(
      vehicles.map((v) => fetch(v.apiUrl)
        .then((r) => r.json())
        .catch((error) => ({ error, v })))
    );

    return vehicles.map((v, i) => ({
      ...v,
      price: vehicleResponses[i].price ? vehicleResponses[i].price : null,
      description: vehicleResponses[i].description ? vehicleResponses[i].description : null,
    }));
  } catch (errors) {
    console.log(errors);
  }

  return vehicles;
}
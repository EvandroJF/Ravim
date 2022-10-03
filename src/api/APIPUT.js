import { API } from './index';

export default {
  async putBusiness(
    name,
    email,
    description,
    streetname,
    number,
    complement,
    neighborhood,
    city,
    stateDistrict,
    // postalcode,
    // countrycode,
    zip,
    id
  ) {
    // console.log('id', name, id);
    // name, email, description, streetname, number, complement, neighborhood, city, stateDistrict, zip, id;

    const body = {
      name,
      email,
      description,
      streetname,
      number,
      complement,
      neighborhood,
      city,
      stateDistrict,
      // postalcode,
      // countrycode,
      zip,
    };

    try {
      const response = await API.put(`business/details?id=${id}`, body);
      return response.data;
    } catch (error) {
      console.log('getRequest: ', error);
      return null;
    }
  },
};

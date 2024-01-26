import axios from 'axios'

export const getAllCountries = async () => {
  const { data } = await axios.get("/countries");
  return data;
};

export const countriesByName = async (name) => {
  const { data } = await axios.get(`/countries/name?name=${name}`);
  return data;
}
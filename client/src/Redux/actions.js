import axios from "axios";
import { countriesByName, getAllCountries } from "../services/countries";
import { getCountriesByActivity, postAct } from "../services/activities";

export const SET_COUNTRIES = "SET_COUNTRIES";
export const GET_COUNTRIES_BY_NAME = "GET_COUNTRIES_BY_NAME";
export const GET_COUNTRIES_BY_ACTIVITY = "GET_COUNTRIES_BY_ACTIVITY";
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_POPULATION = "ORDER_POPULATION";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_RELATION = "GET_RELATION";

export const setCountries = () => {
  return async (dispatch) => {
    try {
      const countries = await getAllCountries();
      return dispatch({
        type: SET_COUNTRIES,
        payload: countries,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getActivities = () => {
  return async (dispatch) => {
    try {
      const data = await getCountriesByActivity("0");
      return dispatch({
        type: GET_ACTIVITIES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getCountriesByA = (id) => {
  return async (dispatch) => {
    try {
      const data = await getCountriesByActivity(id);
      return dispatch({
        type: GET_RELATION,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getCountriesByName = (name) => {
  return async (dispatch) => {
    try {
      const data = await countriesByName(name);
      return dispatch({
        type: GET_COUNTRIES_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const filterByContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

export const orderByName = (order) => {
  return {
    type: ORDER_NAME,
    payload: order,
  };
};

export const orderByPopulation = (order) => {
  return {
    type: ORDER_POPULATION,
    payload: order,
  };
};

export const postActivity = (activity) => {
  console.log(activity)
  return async (dispatch) => {
    try {
      const data = await postAct(activity);
      return dispatch({
        type: POST_ACTIVITY,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

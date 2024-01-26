import axios from "axios";

export const getCountriesByActivity = async (id) => {
  if (id === "0") {
    var { data } = await axios.get("/activities");
  } else {
    var { data } = await axios.get(
      `/countries-by-activities/${id}`
    );
  }
  return data;
};

export const postAct = async (activity) => {
  console.log(activity)
  const data = await axios.post("/activities", activity);

  return data;
};

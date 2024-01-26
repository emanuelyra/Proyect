import "./App.css";
import { useState, useEffect } from "react"; 
import axios from "axios"; 
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import { setCountries, getActivities } from "./Redux/actions";

axios.defaults.baseURL = "http://localhost:3001/"
function App() {
  
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(setCountries());
    dispatch(getActivities());
  }, [dispatch]); 

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home countries={countries} />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

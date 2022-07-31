import React, { useEffect } from "react";
// import "./styles.css";
import { useFormik } from "formik";
import Select from "react-select";
import csc from "country-state-city";

const SearchByFilter=(props)=> {
  // const addressFromik = useFormik({
  //   initialValues: {
  //     country: "India",
  //     state: null,
  //     city: null
  //   },
  //   onSubmit: (values) => console.log(JSON.stringify(values))
  // });

  // const countries =  ;
  // const [countries,Countries]=useState

  // const updatedCountries =async()=>{ let countries= await csc.getAllCountries();
  //   console.log("hello");
  //   console.log(countries);
  //   countries.map((country) => ({
  //   label: country.name,
  //   value: country.id,
  //   ...country
  // }));
  
// }
  // const updatedStates =async (countryId) =>
  //  await csc
  //     .getStatesOfCountry(countryId)
  //     .map((state) => ({ label: state.name, value: state.id, ...state }));
  // const updatedCities = async(stateId) =>
  //  await csc
  //     .getCitiesOfState(stateId)
  //     .map((city) => ({ label: city.name, value: city.id, ...city }));

  // const { values, handleSubmit, setFieldValue, setValues } = addressFromik;

  // useEffect(() => {}, [values]);
  console.log("before");
  const countries= csc.getAllCountries()?csc.getAllCountries():["India"];
  console.log(countries);


  return (
    <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <p>dhgefhjubfj</p>
        <Select
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={values.country}
          // onChange={value => {
          //   setFieldValue("country", value);
          //   setFieldValue("state", null);
          //   setFieldValue("city", null);
          // }}
          onChange={(value) => {
            setValues({ country: value, state: null, city: null }, false);
          }}
        /> */}
        {/* <Select
          id="state"
          name="state"
          options={updatedStates(values.country ? values.country.value : null)}
          value={values.state}
          onChange={(value) => {
            setValues({ state: value, city: null }, false);
          }}
        />
        <Select
          id="city"
          name="city"
          options={updatedCities(values.state ? values.state.value : null)}
          value={values.city}
          onChange={(value) => setFieldValue("city", value)}
        /> */}
        {/* <button type="submit">Submit</button> */}
        {/* <p>{JSON.stringify(csc.get)}</p> */}
      {/* </form> */}
    </div>
  );
}

;

export default SearchByFilter;
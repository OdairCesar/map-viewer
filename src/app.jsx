import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from './api'

import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";


const App = () => {
  const [ places, setPlaces ] = useState([])
  const [ coordinates, setCoordinates ] = useState({ lat: 0, lng: 0 })
  const [ bounds, setBounds ] = useState({
    sw: { lat: '-23.6017', lng: '-46.7482'},
    ne: { lat: '-23.51', lng: '-46.5559'}
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne)
      .then((data) => {
        setPlaces(data)
      })

  }, [coordinates, bounds])

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}/>
        </Grid>
      </Grid>
    </>
  );
};

export default App;

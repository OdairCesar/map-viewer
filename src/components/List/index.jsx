import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import PlaceDetails from '../PlaceDetails'

import useStyles from './style'

export default function List() {
  const classes = useStyles()
  const [ type, setType ] = useState('restaurantes')
  const [ rating, setRating ] = useState('')

  const places = [
    { name: 'Cool Place' },
    { name: 'Best Beer' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' },
    { name: 'Best Steak' }
  ]

  return (
    <div className={classes.container}>
      <Typography variant='h4'> Restaurantes, Hoteis e Atrações para você </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Tipo</InputLabel>
        <Select 
          value={type} 
          onChange={e => setType(e.target.value)}>
          <MenuItem value='restaurants'>Restaurantes</MenuItem>
          <MenuItem value='hotels'>Hoteis</MenuItem>
          <MenuItem value='attractions'>Atrações</MenuItem>
        </Select>
      </FormControl>
      
      <FormControl className={classes.formControl}>
        <InputLabel>Raio</InputLabel>
        <Select 
          value={rating} 
          onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={3}>Cerca de 3 Km</MenuItem>
          <MenuItem value={4}>Cerca de 4 Km</MenuItem>
          <MenuItem value={4.5}>Cerca de 4.5 Km</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={5} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
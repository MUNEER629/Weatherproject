import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const WeatherSearch = ({ onSearch }) => {
 
const nav=useNavigate()
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city) {
      onSearch(city);
    }
    else {
      alert('Please enter a city name');
    }
  };

  

  return (
    <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
      <TextField 
        label="Enter city" 
        variant="outlined" 
        name="search"
        value={city} 
        
        onChange={(e) => setCity(e.target.value)} 
      
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSearch}
        style={{ marginLeft: 10 }}
      >
        Search
      </Button>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={()=>{
          nav("/")
        }}
        style={{ marginLeft: 10 }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default WeatherSearch;

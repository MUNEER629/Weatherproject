import React from 'react';
import { Box, Typography, Paper, Grid,Card, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';


const WeatherDisplay = ({ data }) => {
//   const { name, main, wind, sys } = data;

  const chartData = data.list.map((forecast) => ({
    date: forecast.dt_txt,
    temp: forecast.main.temp,
    humidity: forecast.main.humidity,
  }));
  return (
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        Weather  {name}
        
      </Typography>
       
      
      {data.list
      .filter((forecast,index)=>{
        return  index==0
      })
      .map((forecast, index) => {
       return( <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{forecast.dt_txt}</Typography>
              <Typography variant="body1">
                Temp: {forecast.main.temp}°C
              </Typography>
              <Typography variant="body1">
                Humidity: {forecast.main.humidity}%
              </Typography>
              <Typography variant="body1">
                Weather: {forecast.weather[0].main}
              </Typography>
              <Typography variant="body1">
                Wind: {forecast.wind.speed}km/hr
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>)
      }
      )}
      
      <Paper elevation={3} style={{ padding: 20 }}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Grid>
  
      {data.list.map((forecast, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{forecast.dt_txt}</Typography>
              <Typography variant="body1">
                Temp: {forecast.main.temp}°C
              </Typography>
              <Typography variant="body1">
                Humidity: {forecast.main.humidity}%
              </Typography>
              <Typography variant="body1">
                Weather: {forecast.weather[0].main}
              </Typography>
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
      </Paper>
    </Box>
  );
};

export default WeatherDisplay;
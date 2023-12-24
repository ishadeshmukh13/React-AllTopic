import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
const ExampleComponent = () => {
  // State to hold some data
  const [data, setData] = useState(null);

  // Effect for componentDidMount (runs once after initial render)
  useEffect(() => {
    console.log('Component is mounted');

    // Simulating an asynchronous data fetch
    const fetchData = async () => {
      // Assuming fetchData returns some data after a delay
      // const result = await fetch('https://api.example.com/data');
      // const jsonData = await result.json();
      // setData(jsonData);
    };

    fetchData();

    // Cleanup function (equivalent to componentWillUnmount)
    return () => {
      console.log('Component will unmount');
    };
  }, []); // The empty dependency array means this effect only runs once

  // Effect for componentDidUpdate (runs whenever data changes)
  useEffect(() => {
    console.log('Component did update with new data:', data);

    // Additional logic can be added here based on the new data

    // Cleanup function for this specific effect (if needed)
    return () => {
      console.log('Cleanup for componentDidUpdate');
    };
  }, [data]); // The effect runs whenever 'data' changes

  // Render content based on the fetched data
  return (
    <Grid style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>UseEffect hook</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </Grid>
  );
};

export default ExampleComponent;

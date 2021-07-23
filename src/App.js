import { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box, 
  Grommet, 
  ResponsiveContext 
} from 'grommet';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  const [boredData, setBoredData] = useState([]);
  /* let response = useEffect(() => {
      response = axios.get('https://www.boredapi.com/api/activity')
    }, []);

  setBoredData(response.data);
  console.log(boredData); */
  return (
    <Grommet theme={theme} full /* themeMode='dark' */>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
              <Box flex align='center' justify='center'>
                app body
              </Box>
            </Box>
          </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;

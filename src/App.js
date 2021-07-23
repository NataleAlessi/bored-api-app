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

const api = axios.create({
  baseURL: 'https://www.boredapi.com/api/activity',
  headers: {
    "Content-type": "application/json"
  }
})

function App() {
  const [boredData, setBoredData] = useState({});
  
  useEffect(() => {
    api.get().then(
      res => {
        setBoredData(res.data);
        console.log(res.data);
      }
    )
    .catch(e => {
      HTMLFormControlsCollection.log(e)
    })
  }, [])
  
  return (
    <Grommet theme={theme} full /* themeMode='dark' */>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Box direction='row' flex /* overflow={{ horizontal: 'hidden' }} */>
              <Box flex align='center' justify='center'>
                {boredData.activity}<br/>
                {boredData.type}<br/>
                {boredData.participants}<br/>
                {boredData.price}<br/>
                {boredData.accessibility}<br/>

                {boredData.link
                  ? boredData.link
                  : "no link avalaible"
                }

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

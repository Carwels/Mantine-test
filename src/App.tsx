import { MantineProvider, Paper } from '@mantine/core';
import './App.css';
import './index.css'
import Navbar from './Components/Navbar'
import HeaderText from './Components/HeaderText'


function App() {

  return (
    <div className="App">
        <MantineProvider >
          <Paper radius={0} style={{ minHeight: "100vh", backgroundColor: "#F5FEFE" }}>
            <Navbar />
            <HeaderText />
          </Paper>
        </MantineProvider>
    </div>
  );
}

export default App;

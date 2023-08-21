import {React} from 'react'
import {Routes, Route} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useMode} from './theme'
import './App.css';

import Homepage from './components/homepage'
import Dash from './components/dash'
import DisplayArticle from './components/display-article'
import AI from './components/ai'

function App() {
  const [theme] = useMode()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/dash' element={<Dash/>}/>
          <Route path='/article/:id' element={<DisplayArticle/>}/>
          <Route path='/ai' element={<AI/>}/>
        </Routes>
    </ThemeProvider>
  );
}

export default App;

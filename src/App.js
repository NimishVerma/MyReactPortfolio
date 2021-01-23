// App.jsx
 
import React from 'react';
import logo from './logo_nv.png';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Skills from './Skills.js';
import Experience from './Experience.js';
import Education from './Education.js';
import About from './About.js';
import './App.css';
 
function App() {
  return (
 <div style={{'background':'rgb(39 43 53)','color':'white','height':'calc(100vh - 130px)'}}>



       <Route exact path="/" component={Skills} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
        <Route path="/about" component={About} />
    </div>
  );
}
 
export default App;
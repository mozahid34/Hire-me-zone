import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;

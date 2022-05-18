import React from 'react';
// import './App.css';
import Myheader from './Myheader';
import Counter from './Counter.js';
import Container from './container';

function App() { 
  const counterProps ={
    a:1, 
    b:2, 
    c:3, 
    d:4, 
    e:5, 
    initialValue:5,
  }

  return (
    <Container>
      <div>
        <Myheader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;

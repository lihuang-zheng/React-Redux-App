import React from 'react';
import './App.css';

// redux imports here
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

// import reducer here
import DogImg from "./components/DogImg"

// created store for reducer
const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Simply Dogs</h1>
        <DogImg />
      </div>
    </Provider>
  );
}

export default App;

import './App.css';
import Nav from './components/Nav'
import Home from './views/Home';
import Pokemon from './views/Pokemon';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Test from './views/Test'
import React, { useState } from 'react'
import Feed from './views/Feed';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn'

export default function App() {
  //set hooks
  const[name, setName] = useState('Dylan')
  const[age, setAge] = useState(99)

  const addOne = () => {
    setAge(age + 1)
  }

  return (
    <BrowserRouter>
      <div>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home age={age} addOne={addOne} name={name}/>}/>
          <Route path='/pokemon' element={<Pokemon/>}/>
          <Route path='/feed' element={<Feed/>}/>
          <Route path='/test' element={<Test age={age} name={name} addOne={addOne}/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    );
}


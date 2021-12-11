import React from 'react'
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Result from './pages/Result';


const App = () => {
  return (
    <Router>
      <div className='bg-gray-100 w-100  h-full'>
        <main className='max-w-screen-xl  mx-auto p-5'>
          <Routes >
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/result" element={<Result/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App


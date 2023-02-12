import { useState } from 'react';
import './App.css'

import axios from 'axios';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';

function App() {
  
  return (
    <div className="flex h-screen justify-center items-center flex-col">
          <RouterProvider router={router} />
    </div>
  )
}

export default App

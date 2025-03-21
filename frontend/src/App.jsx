import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'

function App() {
 

  return (
    
      <div className="mx-4 sm:mx-[1%]">
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </div>
    
     
    
  )
}

export default App

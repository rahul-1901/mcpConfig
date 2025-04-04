import './App.css'
import MCP from './Mcp'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<MCP/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App

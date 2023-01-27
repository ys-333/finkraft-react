import Wrapper from './components/UI/Wrapper'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Table from './pages/Table'

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grid" element={<Table />} />
      </Routes>
    </Wrapper>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Arena from './page/arena'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/arena/:id" element={<Arena />}>
            {' '}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App

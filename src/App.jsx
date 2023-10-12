import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ROUTES from './Middleware/routes.js'
import Chat from './pages/Chat.jsx'
import Leaderboard from './pages/Leaderboard.jsx'
import NotFound from './pages/NotFound.jsx'
import Presentation from './pages/Presentation.jsx'
import Reward from './pages/Reward.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.PRESENTATION} element={<Presentation />} />
        <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
        <Route path={ROUTES.CHAT} element={<Chat />} />
        <Route path={ROUTES.REWARD} element={<Reward />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App

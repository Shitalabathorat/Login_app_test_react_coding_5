import Login from './components/Login'
import LogOut from './components/LogOut'
import Message from './components/Message'
import './index.css'

import './App.css'

const Home = () => (
  <div className="container">
    <div className="cart">
      <Message />
      <Login />
      <LogOut />
    </div>
  </div>
)

export default Home

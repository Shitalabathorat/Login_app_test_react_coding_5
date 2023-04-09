import Login from '../Login'
import LogOut from '../LogOut'
import Message from '../Message'
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

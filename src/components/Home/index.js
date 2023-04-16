import  {Component} from 'react'
import Login from '../Login'
import Logout from '../LogOut'
import Message from '../Message'
import './index.css'

import './App.css'

class Home extends Component{
    state={isLoggedIn:false}

    onClickButton=()=>{
        this.setState(prevState=>({isLoggedIn: !prevState.isLoggedIn}))
    }
    render(){
        const {isLoggedIn}=this.state
        return(
              <div className="container">
                  <div className="cart">
                      <Message isLoggedIn={isLoggedIn} />
                      {isLoggedIn? (<Logout  logout={this.onClickButton}/>
                      ):( 
                          <Login login={this.onClickButton} />
                      )}
                  </div>
              </div>
        )
    }




export default Home

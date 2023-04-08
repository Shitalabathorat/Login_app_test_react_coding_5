import {Component} from 'react'
import './index.css'

 class Login extends Component{
    state={isLogin: true}
    onChange=()=>{
        this.setState(prevState=>({isLogin: !prevState.isLogin}))
    }

    render(){
        const {isLogin}=this.state
        return{
            <div >
                <button className="btn" type="button" onClick={this.onChange}>{isLogin? 'Login': null}</button>
            </div>
        }
    }
 }
 export default Login
 
import {Component} from 'react'
import './index.css'
 

class Message extends Component{
    state={IsPleaseLogin : true}

    render(){
        const={IsPleaseLogin}=this.state
        return(
            <div>
                <h1 className="heading">{IsPleaseLogin? 'Please Login' : 'Welcome User'}</h1>
            </div>

        )
    }
}
export default Message
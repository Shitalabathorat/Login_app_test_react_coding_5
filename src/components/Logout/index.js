import {Component} from 'react'
import './index.css'

class LogOut extends Component {
  state = {isLogOut: true}

  onChange = () => {
    this.setState(prevState => ({isLogOut: !prevState.isLogOut}))
  }
  render() {
    const {isLogOut} = this.state
    return (
      <div>
        <button className="btn" type="button" onClick={this.onChange}>
          {isLogOut ? 'Logout' : null}
        </button>
      </div>
    )
  }
}
export default LogOut

import React from "react";
import { render } from "react-dom";
import Display from './Display';

export default class Userform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      uid: "",
      hobby: ""
    }
    
    
  }
  
  handleUname(event) {
    this.setState({ uname: event.target.value });
  }
   handleUid(event){
    this.setState({ uid: event.target.value });
   }
   handleHobby(event)
   {
    this.setState({ hobby: event.target.value });
  }
  onClear(){
    this.setState({
      uname:'',
      uid:'',
      hobby:''
    })
  }

  handleSubmit(event) {
    if (
      this.state.uname == "" ||
      this.state.uid == "" ||
      this.state.hobby == ""
    ) {
      alert("Details must be filled");
    }
  }
  render() {
    return (
      <div>
        <label>
          UserName:
          <input
            type="text"
            value={this.state.uname}
            onChange={this.handleUname.bind(this)}
          />
        </label><br/>

        <label>
          UserId:
          <input
            type="text"
            value={this.state.uid}
            onChange={this.handleUid.bind(this)}
          />
        </label><br/>

        <label>
          Hobbies:
          <input
            type="text"
            value={this.state.hobby}
            onChange={this.handleHobby.bind(this)}
          />
        </label><br/>

        <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}
        >Submit</button>
        <button type="button" className="btn btn-primary" onClick={this.onClear.bind(this)}>Next</button>

        <div>
        <Display uname={this.state.uname} uid={this.state.uid} hobby={this.state.hobby}/>
        </div>
        </div>

        
    );
  }
}

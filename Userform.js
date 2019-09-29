import React from 'react';
import { render } from 'react-dom';

export default class Userform extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Uname:'',
      Uid:'',
      hobby:''
    }
  }
  handleChange(event){
    this.setState({Uname:event.target.value});
    this.setState({Uid:event.target.value});
    this.setState({hobby:event.target.value});
  }
  handleSubmit(event){
    if(this.state.uname == '' || this.state.uid == '' || this.state.hobby == '')
    {
      alert("Details must be filled");
    }


  }
  render() {  
      return (  
          <form onSubmit={this.handleSubmit.bind(this)}>  
            <h1>UserForm</h1>  
            <label>  
                UserName:  
                <input type="text" value={this.state.uname} onChange={this.handleChange.bind(this)} />  
            </label>
            <label>  
                UserId:  
                <input type="text" value={this.state.uid} onChange={this.handleChange.bind(this)} />  
            </label>
            <label>  
                Hobbies:  
                <input type="text" value={this.state.hobby} onChange={this.handleChange.bind(this)} />  
            </label>
            <input type="reset" value="submit"/>
             <input type="submit" value="Submit" />  
         </form>  
      );  
  }  
}


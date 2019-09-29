import React,{Component} from "react";

const Display=(props)=>{
    return(
      <div>
      <h3>{props.uname}</h3>
      <h3>{props.uid}</h3>
      <h3>{props.hobby}</h3>
      </div>
    )
  }
export default Display;
import React from 'react'

const ErrorMsg=(props)=>{
    if(props.error_msg_1===true){
    return (
         <div style={{color:"red",marginLeft:"10px",
         textAlign:"center"}}>
           Enter all Mandatory Fields
         </div>
    )
    }
    else{
      return(
        <div></div>
      )
    }
  }


  export default ErrorMsg;
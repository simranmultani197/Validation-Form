import React, { useState,useRef, useEffect } from 'react'
import './testing_com.css'  
import InputElement from './child_input';
import ErrorMsg from './EmptyFieldError'
import axios from 'axios';
import styled from 'styled-components';

import {Form,Child1,Main} from './styleComponent';
 


const Testing_app=(props)=> {
  let [strong_password,setStrongPassword]=useState(true);
  let [special_charater,setSpecialCharacter]=useState(true);
  let [number_contain,setNumberContain]=useState(true);
  let [capital_alphabet,setCapitalAlphabet]=useState(true);
  let [password_length,setPasswordLength]=useState(true);
  let [error_msg_1,setErrorMsg]=useState(false);
  let [length_of_password,setLengthOfPassword]=useState(0);
  let [confirm_password_error,setConfirmPasswordError]=useState(false);
  let inputref_1=useRef(null);
  let inputref_2=useRef(null);
  let inputref_3=useRef(null);
  let error_msg_2_ref=useRef(null);
  let error_msg_3_ref=useRef(null);
  let error_msg_4_ref=useRef(null);
  let submit_button=useRef(null);
  let form_ref=useRef(null);
  
  

  function validate_email_react(e,error_msg_2_ref){
    let email=e.target.value;
   // console.log(error_msg_2_ref);
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)){
      error_msg_2_ref.current.innerHTML="";
      inputref_1.current.style.borderColor="black";
      
    }
    else{
      error_msg_2_ref.current.innerHTML="Invalid Email";
      error_msg_2_ref.current.style.color="red";
  
    }
  
  
  }




  function check_strong(e,error_msg_3_ref){
    let special_char=0;
    let capital_alp=0;
    let number_contain=0;
    let temp_password=e.target.value;
    setLengthOfPassword(temp_password.length);
    //console.log(typeof(temp_password));
   // console.log(error_msg_3_ref);
    for(let i =0;i<temp_password.length;i++){
      if((temp_password.charCodeAt(i)>=32 && temp_password.charCodeAt(i)<=47) || (temp_password.charCodeAt(i)>=58 && temp_password.charCodeAt(i)<=64) || (temp_password.charCodeAt(i)>=91 && temp_password.charCodeAt(i)<=96) || (temp_password.charCodeAt(i)>=123 && temp_password.charCodeAt(i)<=126)){
        special_char=1;
      }
      if(temp_password.charCodeAt(i)>=48 && temp_password.charCodeAt(i)<=57){
        number_contain=1;
      }
      if(temp_password.charCodeAt(i)>=65 && temp_password.charCodeAt(i)<=90){
        capital_alp=1;
      }
  
    }
    
    if(temp_password.length<=7){
      setPasswordLength(false);
  
    }
    else{
      setPasswordLength(true);
    }
    if(special_char===0){
      setSpecialCharacter(false);
    }
    else{
      setSpecialCharacter(true);
    }
    if(number_contain===0){
      setNumberContain(false);
    }
    else{
      setNumberContain(true);
    }
    if(capital_alp===0){
      setCapitalAlphabet(false);
    }
    else{
      setCapitalAlphabet(true);

    }
    if(special_char!==1 || number_contain!==1 || capital_alp!==1 || temp_password.length<=7 ){
      setStrongPassword(false);
    }
    else{
      setStrongPassword(true);
      inputref_2.current.style.borderColor="black";
    }

    
   
  
  }
  
function sign_up_fun(e){
  e.preventDefault();
  //console.log(e.target);
  const data = new FormData(form_ref.current);
  const value = Object.fromEntries(data.entries());
  const sample=data.entries();
  //console.log(sample);
  //console.log(value);

  
  if(inputref_1.current.value.length===0 || inputref_2.current.value.length===0 || inputref_3.current.value.length===0){
    setErrorMsg(true);
    if(inputref_1.current.value.length===0){
      inputref_1.current.style.borderColor="red";
    }
    if(inputref_2.current.value.length===0){
      inputref_2.current.style.borderColor="red";
    }
    if(inputref_3.current.value.length===0){
      inputref_3.current.style.borderColor="red";
    }


  }
  else{
    setErrorMsg(false);
    
    if(strong_password===true && special_charater===true && number_contain===true && capital_alphabet===true && password_length===true && inputref_2.current.value===inputref_3.current.value){
      let action="https://run.mocky.io/v3/08fdab14-0544-482c-ae0f-915e6f40d0c8";
      form_ref.current.action=action;
      axios.get(action).then(response  =>{
        let dummydata=response.data;
        dummydata=JSON.stringify(dummydata)
        alert(dummydata)
       // form_ref.current.submit();
      })
      let current_user=localStorage.getItem("number");
     // console.log(current_user);
      if(current_user==null){
        current_user=1;
      }
      else{
        current_user=parseInt(current_user)+1;
      }
      localStorage.setItem("number",current_user);
      localStorage.setItem(current_user,JSON.stringify(value));
      let stored_value=JSON.parse(localStorage.getItem(current_user));
      console.log(current_user);
      console.log(stored_value);
      
    //  form_ref.current.submit();
    }
  }

  
}


function confirm_password_fun(e){
  if(inputref_2.current.value!==inputref_3.current.value && inputref_3.current.value.length!==0){
    setConfirmPasswordError(true);
    inputref_3.current.style.borderColor="red";

  }
  else{
    setConfirmPasswordError(false);
    inputref_3.current.style.borderColor="black";
  }



}







return ( 
<Main id="child_parent_1">



    	
  <Child1 id="child1">
      
      
    
    <ErrorMsg error_msg_1={error_msg_1}/>  
	
    <div>


    
      <Form id="form_1" method="post" action="" ref={form_ref}>

	
		
	  
        <InputElement ref2={inputref_1} classname1="child12" id1="email_parent_container" ref3={error_msg_2_ref} classname2="input_1" id2="email_container"  onblur={(event)=>{ validate_email_react(event,error_msg_2_ref)}} type2="email" placeholder2="Email" name2="email"  />
			
        <InputElement ref2={inputref_2} classname1="child12" id1="password_container" ref3={error_msg_3_ref} classname2="input_1" id2="password_field"  onchange={(event)=>{ check_strong(event,error_msg_3_ref)}} type2="password" placeholder2="Password" name2="password" special_charater={special_charater} number_contain={number_contain} capital_alphabet={capital_alphabet} check_strong={strong_password} password_length={password_length} length_of_password={length_of_password}/>

	
        <InputElement ref2={inputref_3} classname1="child12" id1="confirm_password_container" ref3={error_msg_4_ref} classname2="input_1"   onblur={(event)=>{ confirm_password_fun(event,error_msg_4_ref)}} type2="password" placeholder2="Confirm Password" name2="confirm_password" confirm_password_error={confirm_password_error} />
	
        <InputElement classname1="child123 child12"  ref3={submit_button} classname2="input_1" id2="submit_button"  name2="sub_btn"  type2="submit"  value2="Sign Up" onclick={sign_up_fun} />	




      </Form>

    </div>	
  </Child1>
</Main>
    
    
  );
}

export default Testing_app;
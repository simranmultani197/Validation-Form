import React, { useState,useRef, useEffect } from 'react'
import AddError from './PasswordError'
import Animator from './PasswordStrengthAnimator';





const InputElement=(props)=>{

    let strong_password;
    
    if(props.id1==="password_container" && props.check_strong===false){
        //console.log(props.special_charater)
        strong_password=<div>
            <Animator password_length={props.password_length} special_charater={props.special_charater} number_contain={props.number_contain} capital_alphabet={props.capital_alphabet} />


            <ul style={{color:"red"}}>
                
              {props.password_length?null:<AddError><li>Length should be atleast 8</li></AddError>}
              {props.special_charater?null:<AddError><li>Please add a special character</li></AddError>} 
               {props.number_contain?null:<AddError><li>Please add a number</li></AddError>}
               {props.capital_alphabet?null:<AddError><li>Please add a Capital Alphabet</li></AddError>}

            </ul>
        </div>
    }
    else{
       // console.log("level1")
        if(props.id1==="password_container" && props.length_of_password>7){


         //   console.log("level2")
            strong_password=<div>

               <Animator password_length={props.password_length} special_charater={props.special_charater} number_contain={props.number_contain} capital_alphabet={props.capital_alphabet} />

            </div>
        }
        else{
            strong_password=<div></div>;
        }
    }
    let confirm_password_error;
    if(props.confirm_password_error){
        confirm_password_error=<div style={{color:"red"}}>confirm password is not matching with password</div>
    }
    else{
        <div></div>
    }


    return (
        <div>
        <div className={props.classname1} id={props.id1}>

        <input className={props.classname2} id={props.id2} ref={props.ref2} onBlur={props.onblur} type={props.type2} placeholder={props.placeholder2} name={props.name2} value={props.value2} onChange={props.onchange} onClick={props.onclick} required/>
        <div id={props.id3} ref={props.ref3} >
		{strong_password}
        {confirm_password_error}
	    </div>	
        </div>
        </div>
    )



}

export default InputElement;
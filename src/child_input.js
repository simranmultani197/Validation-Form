import React, { useState,useRef, useEffect } from 'react'
const SpecialChar=(props)=>{
    
    if(props.special_character===false){
        return(
        
        
            <li>please add a special character</li>
            
        );
    }
    else{
        return(<div></div>);
    }
    
}
const NumberContain=(props)=>{
    if(props.number_contain===false){
        return(
        
        
            <li>please add a number</li>
            
        );
    }
    else{
        return(<div></div>);
    }
}
const CapitalAlphabet=(props)=>{
    if(props.capital_alphabet===false){
        return(
        
        
            <li>please add a capital alphabet</li>
            
        );
    }
    else{
        return(<div></div>);
    }
}

const PasswordLength=(props)=>{
    if(props.password_length===false){
        return(
        
        
            <li>length should be atleast 8</li>
            
        );
    }
    else{
        return(<div></div>);
    }

}

const Animator=(props)=>{
    let count=props.password_length+props.capital_alphabet+props.special_charater+props.number_contain;
    let color;
    
    if(count==0 || count==1){
        color="red"
    }
    if(count==2){
        color="orange";
    }
    if(count==3){
        color="yellow";
    }
    if(count==4){
        color="green";
    }
    //console.log(count)
    //console.log(props.password_length);
    //console.log(props.special_charater);
   // console.log(props.number_contain);
   // console.log(props.capital_alphabet)
    let width="60px"
    let animantion=[];
    if(count==0 || count==1){
        animantion.push((<div key="0" style={{backgroundColor:color,width:width}}></div>));
    }
    else{
        for(let i=0;i<count;i++){
            animantion.push((<div key={i} style={{backgroundColor:color,width:width,margin:"0px"}}></div>))
        }
    }
    return (
        <div style={{display:"flex",height:"4px",marginTop:"4px"}}>
            {animantion}
        </div>
    )

}

const InputElement=(props)=>{

    let strong_password;
    
    if(props.id1==="password_container" && props.check_strong===false){
        //console.log(props.special_charater)
        strong_password=<div>
            <Animator password_length={props.password_length} special_charater={props.special_charater} number_contain={props.number_contain} capital_alphabet={props.capital_alphabet} />


            <ul style={{color:"red"}}>

            
               <PasswordLength password_length={props.password_length} />
               <SpecialChar special_character={props.special_charater} />
               <NumberContain number_contain={props.number_contain} />
               <CapitalAlphabet capital_alphabet={props.capital_alphabet} />

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
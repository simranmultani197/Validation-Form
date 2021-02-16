import React from 'react'

const Animator=(props)=>{
    let count=props.password_length+props.capital_alphabet+props.special_charater+props.number_contain;
    let color;
    
    if(count===0 || count===1){
        color="red"
    }
    if(count===2){
        color="orange";
    }
    if(count===3){
        color="yellow";
    }
    if(count===4){
        color="green";
    }
    //console.log(count)
    //console.log(props.password_length);
    //console.log(props.special_charater);
   // console.log(props.number_contain);
   // console.log(props.capital_alphabet)
    let width="60px"
    let animantion=[];
    if(count===0 || count===1){
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


export default Animator;
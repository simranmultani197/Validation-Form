import React from 'react'
import styled from 'styled-components';


export const Form= styled.form`
display: flex;
flex-direction: column;`;

export const Input=styled.input`
border:none;
border:solid 1px black;
border-radius: 10px;
width:100%;
height:30px;
box-sizing: border-box;
`
export const Child1=styled.div`
position: absolute;

background-color:#C0C0C0;
top: 20%;
width: 40%;
	
max-width: 400px;
min-width: 365px;
padding: 3%;
border-radius:10px;
display: flex;
flex-direction: column;

`

export const Main=styled.div`
display: flex;
justify-content: center;
width:100vw;
height:100vh;

background-image: url('./images/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg');
background-position:center ;
background-size: cover;
background-repeat: no-repeat;

overflow: visible;`



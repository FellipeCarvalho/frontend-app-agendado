import React from 'react';
import styled from "styled-components";


export const Container = styled.div `
width: 100%;

`

export const Content = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
padding:5px;


h3{
    color:#907B8E;
    
}

span{
    color:#907B8E;
    font-size:12px;
    margin-top:10px;
}



`

export const QrCodeArea = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;


span{
    margin-top:20px;
    margin-bottom:10px;
    font-size:12px;
    font-weight: bold;
    text-transform: uppercase;
    
}

p{
        color: red;
        font-size:11px;
        font-weight:bold;
        margin:0px;
    }

input{
    padding:12px;
    width:280px;
    border:none;
    box-shadow: 0px 0px 10px -5px #000;
    text-align:center;
    font-weight:bold;
  
}
input:focus {
    outline:none;
    border:1px solid #9C2BFF;

}


button{
    background:#9C2BFF;
    margin-top:15px;
    color:#fff;
    font-size:13px;
    font-weight:bold;
    width:330px;
    padding:12px;
    border-radius:30px;
    border:none;
    outline:none;
   

    &:Hover{
        opacity: 0.8;
        cursor:pointer;
        
    
    }

}


`
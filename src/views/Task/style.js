import styled from 'styled-components'

export const Container = styled.div `
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom:10px;
`

export const Form = styled.div `
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top:20px;
margin-bottom:90px;
`

export const TypeTask = styled.div `

.inativeTypeTask{
    opacity:0.5;
}

img{
    padding: 0 10px;
    width:50px;
    height:50px;
    cursor:pointer;

    &:Hover{
        opacity:0.5;
    }
}

button{
    background: none;
    outline:none;
    border:none;
}

`
export const Input = styled.div `
width:100%;
display:flex;
flex-direction:column;
margin:3% 0;


span{
    font-size:16px;
    color:#907B8E
}

input{
    border: none;
    outline:none;
    border-bottom:1px  solid;
    padding:15px 0;
    font-size:16px;
    color:#907B8E; 
}

textarea{

    border-radius: 10px;
    border: 1px solid;
    text-align: center;
    padding:25px;
    font-size:16px;
    
    color:#907B8E;
    
}


`
export const InputDateTime = styled.div `
width:100%;
display:flex;
margin:1% 0;



input{
    width:50%;
    border: none;
    outline:none;
    border-bottom:1px  solid;
    padding:5px 0;
    font-size:16px;
    color:#907B8E; 
}

.margin-right-input{
    margin-right:3%;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0.5;
    display: block;
    width: 25px;
    height: 25px;
    border-width: thin;

}


input[type="time"]::-webkit-calendar-picker-indicator {
    opacity: 0.5;
    display: block;
    width: 25px;
    height: 25px;
    border-width: thin;

}

`
export const SpanDateTime = styled.div`
width:50%;
display:flex;
align-self:flex-start;



span{
    font-size:16px;
    color:#907B8E;
}

.margin-left-span{
    margin-left:93%;
}

`

export const Checkbox = styled.div `
width:100%;
display: flex;
justify-content: space-between;
margin-top:25px;

div{
    display: flex;
    align-items: center;
}

span{
    font-size:16px;
    color:#907B8E; 
}

input[type="checkbox"] {
        position: relative;
        top: 0;
        width: 30px;
        height: 30px;
        -webkit-appearance: none;
        outline: none;
        transition: 0.5s;
        margin-right:15px;
        cursor:pointer;
      }
      input[type="checkbox"]::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        border: 6px solid  #9C2BFF ;
        box-sizing: border-box;
        transition: .5s;
      }
      input:checked[type="checkbox"]::before{
          border-left: none;
          border-top: none;
          width: 20px;
          transform: rotate(45deg) translate(5px, -15px);
          border-color: #FFC72B;
          transition: .5s;
      }


img{
    width:25px;
    height:25px;
    cursor: pointer;

    &:hover{
        opacity:0.5;
    }
}

button{
    background: none;
    outline:none;
    border:none;
}

`
export const Botao = styled.div `

margin-top:5%;

button{
  width: 450px;
  height: 50px;
  border-radius: 30px;
  background: #9C2BFF;
  color: #fff;
  font-size:16px;
  font-weight: bold;
  outline: none;
  border:none;
  cursor: pointer;
}

&:Hover{
    opacity:0.8;
}
`
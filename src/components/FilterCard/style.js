//import classe from nome da biblioteca
import styled from  'styled-components'

/*---------------------------*/
/*   CONTAINER PRINCIPAL     */
/*---------------------------*/
export const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 165px;  
    padding:5px;  
    height: 55px;
    //função deo react permite o props pega os parametros da tag que estamo usando no caso a Container
    //e ainda é possível usar expressões ternarias
    //no caso abaixo estamos verificando se a tag container possui o  
    background: ${props => props.actived ? '#FFC72B' : '#9C2BFF' };
    border-radius: 5px;
    display: flex;
    flex-direction:column; //faz com que os elementos dentro dessa div fiquem separados por colunas
    justify-content:space-around; //faz com que os elementos separados um abaixo do outro respeitando o espaco de inicio e fim da div
   
    img{
        width:15px;
        height:15px;
    }

    span{
        color:#F0F0F0;
        font-size:14px;
        font-weight: bold;
        align-self:flex-end; //coloca o item no final do espaço que esta ocupando   
        
    }
    //quando passar o mouse em cima do filtro fica de outra cor e coloca uma mãozinha
    &:hover{
        background-color:#FFC72B;
        cursor: pointer;//transforma o ponteiro em uma mãozinha
    }

`


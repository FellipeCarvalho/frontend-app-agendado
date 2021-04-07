//import classe from nome da biblioteca
import styled from  'styled-components'

/*---------------------------*/
/*   CONTAINER PRINCIPAL     */
/*---------------------------*/
export const Container = styled.div`

    font-family: 'Roboto', sans-serif;
    width: 245px;    
    height: 145px;
    margin: 20px;
    background-color: #FFF;
    display: flex; //graças a esse cara eles as divs dentro dele se comportam como inline e n d-block
    align-items: center; //alinha no meio da div tomando como partida a altura
    flex-direction: column; // assim cada um fica na sua caixa
    justify-content: center;//alinha no centro da div tomando como partida a largura
    box-shadow: 0px 0px 30px -15px #9C2BFF; //Coloca sombra na caixa branca 
    border-radius: 10px;
    opacity: ${props => props.done ? 0.5 : 1};



    img{
        width:40px;
        height:40px

    }

    &:Hover{
        opacity: 0.7; //fica com opacidade ao passar em cima
        cursor: pointer; //vai ficar uma maosinha ao passar o mouse em cima
        transition: all 0.3s ease; //faz uma transição para o efeito de opaco de 0,3 segundos  
 
    }



`
/*---------------------------*/
/*   TOP CARD                */
/*---------------------------*/
export const TopCard = styled.div` 
    display: flex; //graças a esse cara eles as divs dentro dele se comportam como inline e n d-block
    align-items: center; //alinha no meio da div tomando como partida a altura
    justify-content: center;//alinha no centro da div tomando como partida a largura
    flex-direction: column; //um abaixo do outro em sua caixa
    color: #18171A;
    font-size: 12px;
    


`

/*---------------------------*/
/*   BOTTOM CARD              */
/*---------------------------*/
export const BottomCard = styled.div` 
    width: 100%; //tive que colocar isso aqui para ele reconhecer o espaço dentro da div que esta
    display: flex; 
    justify-content: space-around; //alinha com espaço da div
    font-size: 12px;

    strong{
        color:#FFC72B;
        font-weight: bold;
    }

    span{
        color:#907B8E;

    }





`



//import classe from nome da biblioteca
import styled from  'styled-components'



/*---------------------------*/
/*   CONTAINER PRINCIPAL     */
/*---------------------------*/
//para conseguir usar em outra tela, vamos exportar uma constante
//que vai receber a sintaxe do style components que usa o ecma6script
//a sintaxe é basicamente"styled." + nome elemento + crase "``" no ecam5 era parenteses"()"
export const Container = styled.div`
    font-family: 'Raleway', sans-serif;
    width: 100%;    
    height: 70px;
    background-color: #F0F0F0;
    color: #707070;
    display: flex; //graças a esse cara eles as divs dentro dele se comportam como inline e n d-block
    align-items: center; //alinha no meio da div tomando como partida a altura
    justify-content: center;//alinha no centro da div tomando como partida a largura
    position: fixed; //posiciona de uma maneira fixa
    bottom:0;//sem qualquer bottom, ou seja ele vai para o final da pagina

    img{
        width: 85px;
        height: 65px;
        padding-left:5px;

    }

`


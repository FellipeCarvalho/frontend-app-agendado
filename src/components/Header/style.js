//import classe from nome da biblioteca
import styled from  'styled-components'



/*---------------------------*/
/*   CONTAINER PRINCIPAL     */
/*---------------------------*/
//para conseguir usar em outra tela, vamos exportar uma constante
//que vai receber a sintaxe do style components que usa o ecma6script
//a sintaxe é basicamente"styled." + nome elemento + crase "``" no ecam5 era parenteses"()"
export const Container = styled.div`
    width: 100%;    
    height: 70px;
    background-color: #FFF;
    border-bottom: 12px solid #FFC72B;

    display: flex; //graças a esse cara eles as divs dentro dele se comportam como inline e n d-block
    `
/*---------------------------*/
/*       LEFT SIDE           */
/*---------------------------*/
export const LeftSide = styled.div`
    width:70%; //largura
    height:70px; //altura
    display: flex; //por conta desse cara eu posso usar o align itens para alinhar a imagem no centro da div a esquerda por padrão
    align-items: center;
    padding-left:10px; //ele da um espaçamento na imagem para nao ficar colada a esquerda
    //com styled components, é possível tratar assim, sem precisar necessariamente de id, apenas chamando o que esta dentro da "tag style" dentro do html do index
    img{
        width:150px;
        height:100px;
    }
`


/*---------------------------*/
/*       RIGHT SIDE          */
/*---------------------------*/
export const RightSide = styled.div`
    font-family: 'Raleway', sans-serif;
    width:70%;
    height:70px;
    display: flex;
    align-items: center; //por conta do flex posso colocar eles no meio
    justify-content: flex-end; //por conta do flex da pra colocar eles a direita
    

        a{
            color: #907B8E;
            font-weight:bold;
            text-decoration:none;
            margin: 0 20px;
            font-size: 15px;
            font-weight:bold;

            //propriedade quando usada com & comercial para pegar efeito quando passa o mouse em cima
            &:hover{
                color:#FFC72B;
            }
        }
    //nesse caso estou usando um id no link, no qual recebe uma imagem, apenas para fazer tratativas separadas


        button{
            font-family: 'Raleway', sans-serif;
            background:none;
            outline:none;
            border:none;
            cursor:pointer;
            font-size:15px;
            font-weight:bold;
            color:#907B8E;


            &:Hover{
            opacity:0.5; //ao passar sobre o link que tem a imagem do sino, ele faz um efeito de opacidade
            color:#FFC72B;
            }

            img{
                    width:35px;
                    height:20px;
                    
                }
            span{
                font-family: 'Roboto', sans-serif;
                color:#FFF;
                background-color:#FFC72B;
                padding:2px 6px; //faz com que o span tenha um fundo
                border-radius:50%; //faz o arredondamento do padding
                font-size:12px;
                position:relative;//com essa propriedade eu posso mover o span parauma posição relativa ao topo, mas é necessario usar os atributor(left, top, bottom... para que ele se posicione)
                top:-12px;//posiciona em cima do sino
                right:14px//posiciona um pouco a direita do sino
            }

   
        }
        


    
    
    //criei uma classe já que vou usar varias vezes, e coloque um pseudo elemento after(serve para colocar um elemento em html, apos a div)
    .dividir::after{

    //o conteúdo que será criado no html
    //coloquei a barra para dividir os menus
    content:"|";
    padding-left: 0 10px; //retirei qualquer espaçamento para cima ou para baixo e coloquei apenas a esquerda
    color:#F0F0F0;
    }

`


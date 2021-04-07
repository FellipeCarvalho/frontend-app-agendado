//import classe from nome da biblioteca
import styled from  'styled-components'
//para conseguir usar em outra tela, vamos exportar uma constante
//que vai receber a sintaxe do style components que usa o ecma6script
//a sintaxe é basicamente"styled." + nome elemento + crase "``" no ecam5 era parenteses"()"
export const Container = styled.div`
    width:100%;
`

export const FilterArea = styled.div `

    display: flex; //faz com que os filtros fiquem um do lado do outro
    justify-content:space-around; //separa os filtros com espaçamento igual entre eles de acordo com tamanho da area
    margin-top:30px; //colocar uma margem na parte de cima

    button{
        
        border: none;
        background: none;
        //box-shadow: none;
        outline:none //retira linhas ao clicar
    }

`

export const Content = styled.div`
    width:100%;
    display:flex;
    flex-wrap: wrap; //ele faz uma quebra ao chegar no tamanho da pagina
    justify-content: center; //assim fica justificado 
    margin-top:20px;
    padding-bottom:70px;//coloquei para ficar por cima do footer

    
    a{
        text-decoration:none;
        color: #18171A;
    }

`


export const Title = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size:14px;
    width:100%;
    border-bottom: 1px solid #FFC72B; //CRIO A LINHA AQUI
    display:flex;//para poder manipular os elementos da div 
    justify-content:center; //manipulamos para ficar centralizado
    margin-bottom: 20px;
    
  
  h3{
    
      color:#907B8E;
      position: relative; //vamos colocar o texto sobre a linha
      top:25px; //com esse top sobre a div ele fica especificamente sob a linha que criamos
      background-color: #FFF; //vamos colocar um fundo brando para o texto apenas
      padding: 0 20px; //o padding serve nesse caso para deixar com o fundo branco sem a linha passando por cima

  }
`
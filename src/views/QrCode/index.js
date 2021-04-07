import React, { useState } from 'react'
import {Redirect} from 'react-router-dom'
import * as S from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import QrCodeGenerator from 'qrcode.react'



function QrCode() {

    const [macaddressNumber, setMacaddressNumber] = useState();
    const [redirectHome, setRedirectHome] = useState(false)

    async function SaveMacaddressInBrowser(){
        if(!macaddressNumber){
            alert('Você precisa informar o número que apareceu no seu celular! Como o app ainda não está disponível, você pode inserir qualquer nome no campo acima do botão Sincronizar, não esqueça de memorizar o nome que inserir, para posteriormente poder acessar com o mesmo nome de usuário.')
        }else{
            await localStorage.setItem('@agendado/macaddressNumber', macaddressNumber);
            setRedirectHome(true);
            window.location.reload();
            }
        }
    
    return(
        <S.Container>
            {redirectHome && <Redirect to="/" />}
            <Header />
            <S.Content>
                <h3> Veja o que tem agendado também pelo App</h3>

                <S.QrCodeArea>

                <QrCodeGenerator value="qualquer coisa que va para o celular" size={275} />
                <span>Digite aqui a imagem que apareceu no seu celular</span>
               {/* <p>*Atenção: App ainda não disponível, por isso ainda não é possível passar no QrCode. Nessa versão de testes pode inserir qualquer nome de usuário no campo abaixo e depois clicar em Sincronizar.</p>
                <p>*Esse nome de usuário é único, portanto, memorize o código que digitar para acessar com o mesmo usuário posteriormente e visualizar os dados armazenados para esse usuário.</p>
               */}
                <input type="text" onChange={e => (setMacaddressNumber(e.target.value))} value={macaddressNumber}></input>
                <button onClick={SaveMacaddressInBrowser}>SINCRONIZAR</button>
                </S.QrCodeArea>
            
                <span>*Baixe o app e clique na opção Sicronizar tarefa, e siga as instruções.</span>
            </S.Content>
            <Footer />
        </S.Container>
        
    );
}

export default QrCode;
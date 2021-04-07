import React from 'react';

//importa o style components aqui e renomeia ele para S
import * as S from './style'

//importa logo
import logo from  '../../assets/images/logo.svg'

function Footer() {
  return (<S.Container>
      <span>Não vai esquecer! Já tá</span>
              <img src={logo} alt="Logo" />
              <span>?</span>
          </S.Container>
         )
}

export default Footer;

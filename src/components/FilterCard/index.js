import React from 'react';

//importa o style components aqui e renomeia ele para S
import * as S from './style'

import filter from '../../assets/icons/filter.svg'

function FilterCard( {title , actived} ) {
  return (
          <S.Container actived={ actived } >
          
          <img src={ filter } alt="filter"/>
          <span>{ title }</span>

          </S.Container>
         )
}
export default FilterCard;


//importa biblioteca do react, e importa um recurso useMemo que vai servir para separar as datas de uma forma que não consuma tanto processamento
import React, {useMemo} from 'react';
//importa a função de formatar data de uma biblioteca date-fns (que tem varias funções para data)
import {format} from 'date-fns'
//importa o style components aqui e renomeia ele para S
import * as S from './style'
import typeIcons from '../../utils/typeIcons'


function TaskCard( {type, title,when, done} ) {

  //o useMemo serve para armazenar um valor de retorno de uma função a partir de valores de entrada, o pq de usar ele? pq ele economiza processamento
  //é bom ler depois sobre o useMemo faz parte de React hook que é sobre armazenar estados de funções...bem louco tem que estudar mais 
  //no caso o use memo esta armazenando o valores de retorno da formação da nossa data
  const date = useMemo(() => format(new Date(when), 'dd/MM/yyyy') );
  const hour = useMemo(() => format(new Date(when), 'HH:mm') );

  return (<S.Container done= {done}>

            <S.TopCard>
                <img src={ typeIcons[type]} alt="Ícone da tarefa"/>
                <h3>{title}</h3>
            </S.TopCard>

            <S.BottomCard>
                <strong>{date}</strong>
                <span>{hour}</span>
            </S.BottomCard>
 
          </S.Container>
         )
}

export default TaskCard;

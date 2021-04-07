import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api'
import isConnected from '../../utils/isConnected'


//importa o style components aqui e renomeia ele para S
import * as S from './style'

//importa logo
import logo from  '../../assets/images/logo.svg'
import sino from  '../../assets/icons/bell.svg'

function Header( {clickNotification}) {

const [lateTasksCount, setLateTasksCount] = useState()

  async function countLateTasks(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setLateTasksCount(response.data.length)
    })
  }

  function Logout(){
    localStorage.removeItem('@agendado/macaddressNumber');
    window.location.reload()

  }

  useEffect( () =>{
    countLateTasks();

  })

  return (<S.Container>

              <S.LeftSide>
              
              <img src={logo} alt="Logo" />

              </S.LeftSide>

              <S.RightSide>
                <Link to="/">Home</Link>
                <span className="dividir"/>
                <Link to="/task">Nova Tarefa</Link>
                <span className="dividir"/>
                {!isConnected  
                 ? <Link to="/qrcode">Sincronizar Tarefa </Link>
                 : <button type="button" onClick={Logout} >Sair</button>
                }

                { lateTasksCount > 0 && isConnected &&
                  <>
                    <span className="dividir"/>
                    <button type= "button" alt="Notificação" onClick={clickNotification} >
                      <img src={sino}/> 
                      <span>{lateTasksCount} </span>
                    </button>
                  </>
               }
              </S.RightSide>
             
          </S.Container>
         )
}

export default Header;

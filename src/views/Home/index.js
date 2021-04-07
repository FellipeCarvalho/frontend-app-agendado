
import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';

import api from '../../services/api'
import * as S from './style'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';
import isConnected from '../../utils/isConnected'



function Home() {

  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [lateTasks, setLateTasks] = useState(0);
  const [redirectNotConnectedUser, setRedirectNotConnectedUser] = useState(false);


  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
      .then(response => {
        setTasks(response.data)
      })
  }

  function Notification(){
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks();
    if(!isConnected){ 
      setRedirectNotConnectedUser(true)
    }
  }, [filterActived])

  return (
    <S.Container>
      {redirectNotConnectedUser && <Redirect to="/qrcode" />}
      <Header clickNotification = {Notification}/>

      <S.FilterArea>
        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === "all"} />
        </button>
        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === "today"} />
        </button>
        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === "week"} />
        </button>
        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === "month"} />
        </button>
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === "year"} />
        </button>
      </S.FilterArea>

      <S.Title>
        <h3> {filterActived =='late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}</h3>
      </S.Title>

      <S.Content>

        {
          tasks.map(task => (
            <Link to={`/task/${task._id}`}>
              <TaskCard type={task.type} title={task.title} when={task.when} done ={task.done}/>
            </Link>
          ))
        }

      </S.Content>

      <Footer />
    </S.Container>
  )
}

export default Home;

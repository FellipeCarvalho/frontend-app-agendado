import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';
import {format} from 'date-fns';
import api from '../../services/api'
import * as S from './style';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TypeIcons from '../../utils/typeIcons';
import trashIcon from '../../assets/icons/trash.svg';
import isConnected  from '../../utils/isConnected'


function Task ({match}) {
    const [redirectHome, setRedirectHome] = useState(false)
    const [lateTasks,setLateTasks] = useState(0)
    const [typeTask, setTypeTask]  = useState()
    const [done, setDone] = useState(false)
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()





    //se o parâmetro idTask não for alterado, não chama as funções count e loadtask
    useEffect( () => {
        if(!isConnected)
        setRedirectHome(true)
        LoadTaskDetails();

    },[])


    async function LoadTaskDetails(){
     
            await api.get(`/task/${match.params.id}`)
            .then(response =>{
                setTypeTask(response.data.type)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setTime(format(new Date(response.data.when), 'HH:mm'))
                setDone(response.data.done)
        })
    }

    
    async function Save() {
        
        if(!typeTask)
            return alert("Mermão, cadê o tipo? Esqueceu de selecionar foi? São aqueles ícones laranjinhas redondos no topo da página é só clicar em um! Ou ta de palhaçada comigo? Selecione logo pra gente terminar com isso, PQP!.")
        else if(!title)
            return  alert("Cadê o título? Porr#, to nervoso já! Esqueceu foi? Ta querendo me agredir? Vai logo pra gente terminar aqui meu")
        else if(!description)
            return  alert("Ah não! Cadê a descrição meu deus? como vai saber o que é pra fazer depois?! Esqueceu de selecionar foi? Ou ta de palhaçada comigo? É O MÍNIMO, só peço para digitar logo e acabar com isso, mds.")
        else if(!date)
            return  alert("Sem data, sério?? meu deus, coloca um prazo para suas coisas,nervoso aqui! Palhaçada! Selecione logo pra gente terminar com isso, aff.")
        else if(!time)
            return  alert("Não, não, não! Não tem horário para fazer essa tarefa? Selecione uma a hora logo, tempo é dinheiro! Senão não deixo salvar e pronto!")

        if (match.params.id) {
            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                type: typeTask,
                title,
                description,
                when: `${date}T${time}:00.000`,
                done
            })
            .then(() =>
            alert("Tarefa alterada com sucesso!"),
                setRedirectHome(true)
            )
        }else{
            await api.post('/task', {
            macaddress: isConnected,
            type: typeTask,
            title,
            description,
            when: `${date}T${time}:00.000`,
            done
        })
        .then(() => 
            alert("Até que enfim. Aleluia irmãos! Tarefa cadastrada com sucesso!"),
            setRedirectHome(true)
     )}        
    }

    async function RemoveTask(){
       const resp = window.confirm('Deseja realmente excluir essa tarefa?')
       if(resp == true) {
           await api.delete(`/task/${match.params.id}`)
           .then(() =>
             alert('Tarefa excluída com êxito!'),
             setRedirectHome(true))
        } 
    }
    
    return (
        <S.Container>
            {redirectHome  && <Redirect to="/" />}
            <Header />
            <S.Form>
                <S.TypeTask>
                    {
                    TypeIcons.map( (icon, index) =>(
                        index > 0 && 
                        <button type= "button" onClick= { () => setTypeTask(index)}> 
                            <img src={icon} alt='Tipo da Tarefa' 
                                className = { typeTask && typeTask != index && 'inativeTypeTask'}
                            />
                        </button>
                    ))
                    }
                </S.TypeTask>
                
                <S.Input>
                    <span> Título </span>
                    <input type="text" placeholder="Ex.: Fazer refactory do..."  maxlength="30"
                           onChange = { e => setTitle(e.target.value)} value ={title}/>
                </S.Input>
                
                <S.Input>
                    <span> Descrição </span>
                    <textarea type="text" placeholder="Ex.:Estudar o Modulo..."
                        onChange ={ e => setDescription(e.target.value)} value ={description} />
                </S.Input>

                <S.SpanDateTime>
                    <span> Data </span>
                    <span className="margin-left-span">Hora</span>
                </ S.SpanDateTime>

                <S.InputDateTime >
                    <input className= "margin-right-input" type="date" onChange = {e => setDate(e.target.value)} value={date}/>
                    <input type="time" onChange = {e => setTime(e.target.value)} value={time}/>
                </S.InputDateTime>

                <S.Checkbox>
                    <div>
                        <input type="checkbox" value= {done} checked={done && "checked"} onChange = {e => setDone(!done)}/>
                        <span>Tarefa Concluída</span>
                    </div>
                    <div>
                    { match.params.id &&
                        <button onClick= {RemoveTask}>
                        <img src={ trashIcon } alt="Excluir Tarefa" title="Excluir Tarefa"/>
                        </button> 
                    }
                    </div>
                </S.Checkbox>
                <S.Botao>
                    <button type="button" onClick={Save}>
                        Salvar
                    </button>
                </S.Botao>

            </S.Form>
            <Footer />
        </S.Container>    
    )
}
export default Task;


//importa biblioteca para fazer requisições
import axios from 'axios';

//cria quase que uma instancia dentro de uma constante para criar a conexão com a nossa api
const api = axios.create ({

    //baseURL é uma propriedade do axios que recebe o endereço da nossa api
    baseURL: process.env.REACT_APP_URL_API
})

//exporta a conexão com a api para usar em outros locais
export default api;
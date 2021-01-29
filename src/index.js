import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import { CompA, CompB } from './componentes/DoisComponentes'
// import MultElementos from './componentes/MultElementos'
import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
  <div>
    <Familia sobrenome="Pereira">
      <Membro nome="Andre"  />
      <Membro nome="Mariana"  />
    </Familia>

    {/* <Familia>
      <Membro nome="Bia" sobrenome="Batista" />
      <Membro nome="Gustava" sobrenome="Batista" />
    </Familia> */}

    <FamiliaSilva />

    {/* {<MultElementos />} */}

    {/* <CompA valor="Olá eu sou A!" />
    <CompB valor="B na área!" />  */}

    {/* <PrimeiroComponente valor="Olá, bom dia!" aBcD={ 2**8 }/> */}

  </div>
, elemento)


// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// ReactDOM.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>,
  //   document.getElementById('root')
  // );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();

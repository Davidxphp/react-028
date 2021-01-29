import React from 'react';

let isLegal = true

export default (props) =>
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.aBcD}</h2>
        <h3>{ 2 + 2}</h3>
        <p>Legal? {isLegal ? 'Sim' : 'Não'}</p>

        <p>{Math.random()}</p>
    </div>

// export default () =>
//     <div>
//         <h1>Primeiro Componente David</h1>
//     </div>

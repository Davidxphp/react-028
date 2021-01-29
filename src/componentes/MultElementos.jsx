import React from 'react'

// Solução 03 - envolvendo com [] - array
export default props => [
    <h1>Parte 3/1</h1>,
    <h2>Parte 3/2</h2>
]

// Solução 02 - envolvendo com <React.Fragment>
// export default props =>
//     <React.Fragment>
//         <p>solução 02</p>
//         <h1> Parte 2/1 </h1>
//         <h2> Parte 2/2 </h2>
//     </React.Fragment>

// Solução 01 - é mais usada , envolvendo com um <div></div>
// export default props =>
//     <div>
//         <p>solução 01</p>  
//         <h1> Parte 1/1 </h1>
//         <h2> Parte 1/2 </h2>
//     </div>

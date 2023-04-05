import React, { useState } from 'react';

import AgregarCategoria from './componentes/AgregarCategoria';
import GiftGrid from './componentes/GiftGrid';

const App = () => {

  const [ categorias, setCategorias ] = useState(['Skrillex']);

  const AgregaCategoria = ( newcategoria) => {

    // Validamos si el dato ya existe en el arreglo.
      // Includes se utiliza para verificar si un elemento se encuentra dentro de un array o una cadena de texto. Es parecido a FIND
      
    if (categorias.includes(newcategoria)) return;

    setCategorias([newcategoria, ...categorias]);
  }
  
  return ( 
    <div className='container'>

      <div className='row mt-4'>
        <div className='col-12'>
          <h1>GiftExpertApp</h1>
        </div>
      </div>

      <AgregarCategoria nuevaCategoria = { (value) => AgregaCategoria(value) } />

      
      { categorias.map((categoria, index) => (
          <GiftGrid key={ index } categoria={ categoria }/>
        ))
      }
      
    </div>
  );
}

export default App;
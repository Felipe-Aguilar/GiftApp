import { useState } from "react";

const AgregarCategoria = ({ nuevaCategoria }) => {

    const [ inputValue, setInputValue ] = useState('');

    const Subir = (e) => {
        e.preventDefault();
        // Quitamos espacios y validamos que no esté vacío
            // El return menciona que si se cumple esa función, se retorne y no siga ejecutando la función.
        if (inputValue.trim().length <= 1) return;

        nuevaCategoria(inputValue.trim());
        setInputValue('');
    }
    
    return ( 
        <div className="row">
            <div className="col-12">
                <form onSubmit={(e)=>Subir(e)}>
                    <input 
                        type="text" 
                        placeholder="Buscar Gift"
                        value={inputValue}
                        onChange={(e)=>setInputValue(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
}

export default AgregarCategoria;
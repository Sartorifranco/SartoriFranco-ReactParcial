import { useState } from "react";

import Card from "./Card";

const Form = () => {
    const [usuario, setUsuario] = useState({
        name: '',
        apellido: ''
    });
    console.log(usuario);
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(usuario.name.indexOf(' ') === -1 && usuario.name.length >= 3 && usuario.apellido.length >= 6){
            setShow(true);
            setError(false);
        }else{
            setError(true);
        }
    }

    return (
        <div>
            <h2>Formulario de usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label> <br/>
                    <input type="text" onChange={(e) => setUsuario({...usuario, name: e.target.value})}/><br/>
                    <label>Apellido: </label> <br/>
                    <input type="text" onChange={(e) => setUsuario({...usuario,apellido: e.target.value})}/> <br/>
                    <button>Enviar</button>
                </div>
            </form>
            {show ? 
            <>
                 <Card name={usuario.name} apellido={usuario.apellido} />
            </>
            : <p>Coloque su información</p>}
            {error ? <p style={{color: 'red'}}>Por favor, chequea que la información sea correcta</p> : null}
        </div>
    )
}

export default Form;
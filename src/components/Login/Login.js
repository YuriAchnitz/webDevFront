import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("username", name);
        localStorage.setItem("cart", JSON.stringify([]));
        alert(`Logado com o usuário: ${localStorage.getItem("username")}`);
        navigate('/cardapio');
      }
    return (
        <div className='login'>
        <div className='loginBox'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>
                    Usuário: 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Senha: 
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
        </div>
    )
}

export default Login;
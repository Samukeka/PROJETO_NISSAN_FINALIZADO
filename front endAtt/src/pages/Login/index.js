import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3333/session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (data.success) {
                navigate("/loja")
                
            } else {
                // Login inválido
                setLoginError(data.message);
            }
        } catch (error) {
            console.error('Ocorreu um erro ao fazer login:', error);
        }
    };

    return (
        <div className="login-container">
        <h1 className="titulo-login">Login</h1>
        <div className="login-form">
          
          {loginError && <p>{loginError}</p>}
          <form onSubmit={handleLogin}>
            <div>
              <label className='emailTxt'>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label className='senhaTxt'>Senha:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <button className="buttonl" type="submit">Entrar</button>
          </form>
        </div>
      </div>
    );
}

export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cadastroError, setCadastroError] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/login');
      } else {
        // Cadastro inválido
        setCadastroError(data.message);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao cadastrar:', error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="titulo-cadastro">Cadastro</h1>
      <div className="login-form">
        {cadastroError && <p>{cadastroError}</p>}
        <form onSubmit={handleCadastro}>
          <div>
            <label className='nomeTxt'>Nome:</label>
            <input  type="text" value={name} onChange={handleNameChange} required />
          </div>
          <div>
            <label className='nomeTxt'>Email:</label>
            <input className='emailTxt' type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label className='nomeTxt'>Senha:</label>
            <input className='senhaTxt' type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <button className='buttonl' type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
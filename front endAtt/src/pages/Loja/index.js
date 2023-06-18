import React, { useState, useEffect } from 'react';
import './style.css';

function Loja() {
  const [nomeProduto, setNomeProduto] = useState('');
  const [id, setIdProduto] = useState('');
  const [preco, setPreco] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [mostraCadastro, setMostraCadastro] = useState(false);
  const [mostraExcluir, setMostraExcluir] = useState(false);
  const [mostraAlterarNome, setMostraAlterarNome] = useState(false);
  const [mostraAlterarPreco, setMostraAlterarPreco] = useState(false);

  const handlePreco = (event) => {
    setPreco(event.target.value);
  };

  const handleNomeProduto = (event) => {
    setNomeProduto(event.target.value);
  };

  const handleIdProduto = (event) => {
    setIdProduto(event.target.value);
  };

  const handleCadastro = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/produto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeProduto, preco }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(data.user.name);
      } else {
        console.log('Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao fazer login:', error);
    }
  };

  const handleDeletarId = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/deletar', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: parseInt(id, 10) }),
      });

      const number = await response.json();
      if (number.success) {
        console.log(number.estoque.id);
      } else {
        console.log('Erro ao cadastrar');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao deletar produto:', error);
    }
  };

  const handleAlterarNome = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3333/produto/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nomeProduto }),
      });

      const data = await response.json();
      if (data.success) {
        console.log(`Nome do produto com ID ${id} alterado com sucesso`);
      } else {
        console.log('Erro ao alterar nome do produto');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao alterar nome do produto:', error);
    }
  };

  const handleAlterarPreco = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch(`http://localhost:3333/produto/${id}/preco`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preco: preco }), // Corrigido para enviar { preco: preco }
      });
  
      const data = await response.json();
      if (data.success) {
        console.log(`Preço do produto com ID ${id} alterado com sucesso`);
      } else {
        console.log('Erro ao alterar preço do produto');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao alterar preço do produto:', error);
    }
  };


  const handleListarProdutos = async () => {
    try {
      const response = await fetch('http://localhost:3333/produtos');
      const data = await response.json();
      if (data.error) {
        console.log('Erro ao listar produtos:', data.error);
      } else {
        setProdutos(data);
      }
    } catch (error) {
      console.error('Ocorreu um erro ao listar produtos:', error);
    }
  };

  useEffect(() => {
    handleListarProdutos();
  }, []);

  const handleCadastroToggle = () => {
    setMostraCadastro(!mostraCadastro);
  };

  const handleExcluirToggle = () => {
    setMostraExcluir(!mostraExcluir);
  };

  const handleAlterarNomeToggle = () => {
    setMostraAlterarNome(!mostraAlterarNome);
  };

  const handleAlterarPrecoToggle = () => {
    setMostraAlterarPreco(!mostraAlterarPreco);
  };

  return (
    <div>
      <div>
        <h1 className="titulo-loja">Loja</h1>
        <button onClick={handleCadastroToggle}>Cadastro de Produto</button>
        {mostraCadastro && (
          <form onSubmit={handleCadastro}>
            <div>
              <label>Nome Produto: </label>
              <input
                type="text"
                value={nomeProduto}
                onChange={handleNomeProduto}
                required
              />
              <br />
              <br />
              <label>Preço do Produto: </label>
              <input
                type="text"
                value={preco}
                onChange={handlePreco}
                required
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        )}
      </div>
      <div>
        <br />
        <br />
        <button onClick={handleExcluirToggle}>Excluir</button>
        {mostraExcluir && (
          <form onSubmit={handleDeletarId}>
            <div>
              <label>ID Produto: </label>
              <input
                type="text"
                value={id}
                onChange={handleIdProduto}
                required
              />
            </div>
            <button type="submit">Excluir</button>
          </form>
        )}
      </div>
      <br />
      <br />
      <button onClick={handleAlterarNomeToggle}>Alterar Nome</button>
      {mostraAlterarNome && (
        <form onSubmit={handleAlterarNome}>
          <div>
            <label>ID Produto: </label>
            <input
              type="text"
              value={id}
              onChange={handleIdProduto}
              required
            />
          </div>
          <div>
            <br />
            <label>Novo Nome: </label>
            <input
              type="text"
              value={nomeProduto}
              onChange={handleNomeProduto}
              required
            />
          </div>
          <br />
          <button type="submit">Alterar</button>
        </form>
      )}

      <br />
      <br />
      <button onClick={handleAlterarPrecoToggle}>Alterar Preço</button>
      {mostraAlterarPreco && (
        <form onSubmit={handleAlterarPreco}>
          <div>
            <label>ID Produto: </label>
            <input
              type="text"
              value={id}
              onChange={handleIdProduto}
              required
            />
          </div>
          <div>
            <br />
            <label>Novo Preço: </label>
            <input
              type="text"
              value={preco}
              onChange={handlePreco}
              required
            />
          </div>
          <br />
          <button type="submit">Alterar</button>
        </form>
      )}

      <div>
        <br />
        <br />
        <button onClick={handleListarProdutos}>Listar Produtos</button>
        <table className="product-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Produto</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>{produto.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Loja;
import React, { useState, useEffect } from 'react';
import './style.css';

function Home(props) {
  const [produtos, setProdutos] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [id, setIdProduto] = useState('');
  const [checkout, setCheckout] = useState([]);


  const handleButtonClick = () => {
    setShowEmail(true);
  }

  const handleIdProduto = (event) => {
    setIdProduto(event.target.value);
  };

  const fetchProdutos = async () => {
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
    fetchProdutos();
  }, []);

  const createCheckout = async () => {
    const productId = Number(id);
  
    const response = await fetch(`http://localhost:3333/produto/${productId}`);
  
    if (response.status === 200) {
      const product = await response.json();
      setCheckout([...checkout, product]); // Adiciona o novo produto ao array
    }
  };
  
  const createOrder = async () => {
    for (const product of checkout) {
      const order = await fetch(`http://localhost:3333/order`, {
        method: 'POST',
        body: JSON.stringify({
          productId: product.id,
          productName: product.nomeProduto,
          productPrice: product.preco,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (order.status === 201) {
        await fetchProdutos();
      }
    }
  };
  

  return (
    <div>
      <h1 className="titulo-home">Página Home</h1>
      <span className="texti">{props.texto}</span>
      <br />
      <h2 className='txtTitle'>Produtos Disponíveis no Estoque</h2>

      <table className="tableHome">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome do Produto</th>
            <th>Preço</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nomeProduto}</td>
              <td>{produto.preco}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>



      <div>
        <button
          className={`botao ${showEmail ? 'show-email' : ''}`}
          onClick={handleButtonClick}
        >
          <span className="email">
            <a href="mailto:nissanpecas@gmail.com">E-mail</a>
          </span>
          - Contato
        </button>
      </div>

            <div>
              <h2>Digite o ID do produto</h2>
              <input
                type="id"
                value={id}
                onChange={handleIdProduto}
                required
              />

              <button onClick={createCheckout}>Revisar Pedido.</button>
            </div>








            <div className='checkout'>
  {checkout.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome do Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {checkout.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nomeProduto}</td>
            <td>{item.preco}</td>
            <td>{item.quantidade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>Nenhum item no checkout.</p>
  )}
  <button onClick={createOrder}>Criar Pedido</button>
</div>



            

    </div>
  );
}

export default Home;
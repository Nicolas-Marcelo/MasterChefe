import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axios.get('/api.json')
      .then(response => {
        console.log("Dados recebidos:", response.data); // Verifica os dados recebidos
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ocorreu um erro', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando...</p>; // Exibe enquanto os dados são carregados

  // Verifica se posts é um array antes de usar map e slice
  if (!Array.isArray(posts)) {
    return <p>Erro ao carregar dados.</p>;
  }

  return (
    <div>
      <h1>Página Inicial</h1>
      {posts.slice(0, 20).map(post => (
        <div className="home-caixa">
          <div key={post.id}>
            <h2 className="home-nome">{post.nome}</h2>
            <img src={post.img} alt="imagem da receita" className="home-imagem" />
            <h3>{post.rendimento}</h3>
            <h3>{post.tempo_preparo}</h3>
            <p>{post.igredientes.slice(0, 0)}</p> {/* Exibe um resumo do conteúdo */}
            <Link to={`/post.json/${post.id}`} className="home-link">Ver mais</Link> {/* Botão para ver mais detalhes */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;

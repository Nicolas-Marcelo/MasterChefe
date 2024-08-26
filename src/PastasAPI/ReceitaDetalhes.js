import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from "axios";
import './ReceitaDetalhes.css';

const ReceitaDetalhes = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api.json')
            .then(response => {
                console.log("Dados recebidos:", response.data);
                const selectedPost = response.data.find(p => p.id === parseInt(id, 10));
                console.log("Post selecionado:", selectedPost);
                setPost(selectedPost);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ocorreu um erro', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <p>Carregando...</p>;

    if (!post) return <p>Post não encontrado...</p>;

    return (
        <div className="detalhe-caixa">
            <h1 className="detalhe-nome">{post.nome}</h1>
            <div className="detalhe-info">
                <img src={post.img} alt="imagem da receita" className="detalhe-imagem" />
                <p className="detalhe-descricao">{post.descricao}</p>
            </div>
            <div className="detalhe-passos">
                <ul className="detalhe-ingrediente">
                    {post.igredientes.map((igredientes, index) => (
                        <li key={index}>
                            <input type="checkbox" />
                            {igredientes}
                        </li>

                    ))}
                </ul>
                <ul className="detalhe-preparo">
                    {post.modopreparo.map((modopreparo, index) => (
                        <li key={index}>{modopreparo}</li>
                    ))}
                </ul>
            </div>

            <Link to="/" className="detalhe-link">Ver todas as receitas</Link>
        </div>
    );
}

export default ReceitaDetalhes;

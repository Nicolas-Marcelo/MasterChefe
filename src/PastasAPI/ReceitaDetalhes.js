import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ReceitaDetalhes = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/api.json')
            .then(response => {
                console.log("Dados recebidos:", response.data); // Verifique os dados recebidos
                const selectedPost = response.data.find(p => p.id === parseInt(id, 10));
                console.log("Post selecionado:", selectedPost); // Verifique o post selecionado
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
        <div>
            <h1>Pagina de detalhes</h1>
            <h1>{post.nome}</h1>
            <h3>{post.categoria}</h3>
            <h3>{post.tempo_preparo}</h3>
            <h3>{post.rendimento}</h3>
            <ul>
                {post.igredientes.map((igredientes, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {igredientes}
                    </li>
                ))}
            </ul>
            <ul>
                {post.modopreparo.map((modopreparo, index) => (
                    <li key={index}>{modopreparo}</li>
                ))}
            </ul>

            <a href="/">Ver todas as receitas</a>
        </div>
    );
}

export default ReceitaDetalhes;

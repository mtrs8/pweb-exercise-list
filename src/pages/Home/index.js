import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home(){
    return (
        <div className="page-home">
            <h1>Home Page</h1>
            <ul className="question-list">
               <li><Link to="/questao1">Questão 1</ Link></li>
               <li><Link to="/questao2">Questão 2</ Link></li>
               <li><Link to="/questao3">Questão 3</ Link></li>
               <li><Link to="/questao4">Questão 4</ Link></li>
               <li><Link to="/questao5">Questão 5</ Link></li>
               <li><Link to="/questao6">Questão 6</ Link></li>
               <li><Link to="/questao7">Questão 7</ Link></li>
            </ul>
        </div>
    ); 
}

export default Home;
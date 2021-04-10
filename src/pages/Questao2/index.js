import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Questao2() {
    const [total, setTotal] = useState();
    const [numPessoas, setNumPessoas] = useState();
    const [gorjeta, setGorjeta] = useState();

    function calcularNF(event) {
        let valorTotal = parseFloat(total.replace(',', '.'));
        let numeroDePessoas = parseInt(numPessoas.replace(',', '.'));
        let percentGorjeta = parseFloat(gorjeta.replace(',', '.'));
        const totalPorPessoa = (valorTotal / numeroDePessoas).toFixed(2);
        const gorjeta = (valorTotal*percentGorjeta)/100;
        event.preventDefault();
        alert(`Valor total da Mesa: ${valorTotal}
        \nValor por Pessoa: ${totalPorPessoa}
        \nValor da Gorjeta: ${gorjeta}`);
    }
    
    return (
        <div className="page-questao2">
             <Link to="/">Voltar para Home Page</Link>
            <h1>Questão 02 - Calcular Nota Fiscal</h1>
            <form onSubmit={calcularNF}>
                <input type="text" value={total} onChange={e => setTotal(e.target.value)} placeholder="Total Gasto" required/>
                <input type="text" value={numPessoas} onChange={e => setNumPessoas(e.target.value)} placeholder="Total Pessoas" required/>
                <input type="text" value={gorjeta} onChange={e => setGorjeta(e.target.value)} placeholder="Gorjeta em %" required/>
                <button type="submit"> Calcular Nota Fiscal</button>
            </form>
        </div>
    );
}

export default Questao2;
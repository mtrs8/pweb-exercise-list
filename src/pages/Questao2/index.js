import React, { useState } from 'react';
import './styles.css';

function Questao2() {
    const [total, setTotal] = useState();
    const [numPessoas, setNumPessoas] = useState();
    const [gorjeta, setGorjeta] = useState();

    function calcularNF(event) {

    }

    return (
        <div className="page-questao2">
            <form onSubmit={calcularNF}>
                <input type="text" value={total} onChange={e => setTotal(e.target.value)} placeholder="Total Gasto"/>
                <input type="text" value={numPessoas} onChange={e => setNumPessoas(e.target.value)} placeholder="Total Pessoas"/>
                <input type="text" value={gorjeta} onChange={e => setGorjeta(e.target.value)} placeholder="Gorjeta"/>
                <button type="submit"> Calcular Nota Fiscal</button>
            </form>
        </div>
    );
}

export default Questao2;
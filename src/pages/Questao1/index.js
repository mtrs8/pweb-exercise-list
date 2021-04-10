import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Questao1() {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    
    function calcularIMC(event) {
        let floatpeso=parseFloat(peso.replace(',', '.'));
        let floataltura=parseFloat(altura.replace(',', '.'));
        event.preventDefault();
        const result = (floatpeso/(floataltura*floataltura)).toFixed(2);
        
        if(result > 30) {
            alert(`${result}\nOBESIDADE`);
        } else if(result >= 25 && result <= 30){
            alert(`${result}\nSOBRE PESO`);
        } else {
            alert(`${result}\nPESO NORMAL`);
        }
        setAltura('');
        setPeso('');
    }

    return (
        <div className="page-questao1">
            <Link to="/">Voltar para Home Page</Link>
            <h1>Questão 01 - Calcular IMC</h1>
            <form onSubmit={calcularIMC}>

                <input type="text" value={peso} onChange={e => setPeso(e.target.value)} placeholder="Kg" required/>
                <input type="text" value={altura} onChange={e => setAltura(e.target.value)} placeholder="Metro" required/>
                <button type="submit">Calcular IMC</button>
            </form>
        </div>
    );
}
export default Questao1;
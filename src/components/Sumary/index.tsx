import React from 'react';
import entradasImg from '../../assets/entradas.svg';
import saidasImg from '../../assets/saidas.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Sumary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="entradas" />
                </header>
                <strong>R$14.500</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={saidasImg} alt="entradas" />
                </header>
                <strong>- R$ 1.675</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="entradas" />
                </header>
                <strong>R$12.825</strong>
            </div>
        </Container>
    )
}
import React from "react";
import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import { Container, TransactionTypeContainer } from './styles';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button" onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar Trasação</h2>

                <input
                    placeholder="Título"
                />

                <input
                    type='number'
                    placeholder="Valor"
                />

                <TransactionTypeContainer>
                    <button
                        type="button"
                    >
                        <img src={entradaImg} alt="entrada" />
                        <span>Entrada</span>
                    </button>

                    <button>
                        <img src={saidaImg} alt="saida" />
                        <span>Saida</span>
                    </button>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
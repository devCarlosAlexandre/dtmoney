import React, { FormEvent, useState } from "react";
import Modal from 'react-modal';
import closeImg from '../../assets/fechar.svg';
import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from "../../services/api";
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data)
    }


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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Trasação</h2>

                <input
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type='number'
                    placeholder="Valor"
                    value={value}
                    onChange={e => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={entradaImg} alt="entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={saidaImg} alt="saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}
import React from 'react';
import logo from './logo.svg';
import './App.css';

const quantidadeProdutos = [
  'Quantidade de produtos:'
]

const listaDeProdutos = [

  'item1',
  <button>Adicionar ao carrinho</button>,
  'item2',
  <button>Adicionar ao carrinho</button>,
  'item3',
  <button>Adicionar ao carrinho</button>,
  'item4',
  <button>Adicionar ao carrinho</button>,
  'item5',
  <button>Adicionar ao carrinho</button>,
  'item6',
  <button>Adicionar ao carrinho</button>,
  'item7',
  <button>Adicionar ao carrinho</button>,
  'item8',
  <button>Adicionar ao carrinho</button>
]
function App() {
  return (
    <div className="App">
      <h3>{quantidadeProdutos}</h3>
      <ul>{listaDeProdutos}</ul>
    </div>
  );
}

export default App;

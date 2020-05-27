import React from 'react';

const quantidadeProdutos = [
    'Quantidade de produtos:'
]



let carrinho = [

]



function Home() {
    function handleClick(e) {
        carrinho.push(listaDeProdutos[e]);
    }
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
        <button onClick={() => handleClick(1)}>Adicionar ao carrinho</button>
    ]
    return (
        <div className="App">
            <h3>{quantidadeProdutos}</h3>
            <ul>{listaDeProdutos}</ul>
        </div>
    );
}

export default Home;

const sequence = {
    _id: 1,
    get id() {
        return this._id++;
    }
}

const produtos = {};

function salvarProdutos(produto) {
    if (!produto.id) produto.id = sequence._id;
    produtos[produto.id] = produto;
    return produto;
}

// busca produto pelo identificador
function getProduto(id) {
    return produtos[id] || {};
}

// busca todos os produtos getfindAll
function getProdutos() {
    return Object.values(produtos);
}

function excluirProdutos(id) {
    const produtos = produtos[id];
    delete produtos[id];
    return produto;
}

// Exportando modulos ->
module.exports = { salvarProdutos, getProdutos, getProduto, excluirProdutos };
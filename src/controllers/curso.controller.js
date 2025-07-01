function listar(require, response) {
    response.send('Listar curso');
};

function criar(require, response) {
    response.send('Criar curso');
};

function deletar(require, response) {
    response.send('Deletar curso');
};

function atualizar(require, response) {
    response.send('Atualizar curso');
};

module.exports = {
    listar,
    criar,
    deletar,
    atualizar
};
// Remova o item cebola de todos os sanduíches
// Para isso, escreva no arquivo desafio19.js duas queries, nesta ordem:

// Crie uma query que faça a remoção do item cebola em todos os sanduíches.
db.produtos.updateMany({}, {
    $pull: {
        ingredientes: "cebola",
    },
});

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
}).pretty();
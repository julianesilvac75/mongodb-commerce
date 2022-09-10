// Inclua bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo
// Para isso, escreva no arquivo desafio18.js duas queries, nesta ordem:

// Crie uma query que faça a inclusão de bacon no final da lista de ingredientes dos sanduíches Big Mac e Quarteirão com Queijo.
db.produtos.updateMany({
    nome: {
        $in: ["Big Mac", "Quarteirão com Queijo"],
    },
}, {
    $push: {
        ingredientes: "bacon",
    },
});

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
}).pretty();
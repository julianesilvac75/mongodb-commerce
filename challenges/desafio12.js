// Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes
// Para isso, escreva no arquivo desafio12.js duas queries, nesta ordem:

// Crie uma query que adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes.
db.produtos.updateMany({
    nome: {
        $not: {
            $eq: "McChicken",
        },
    },
}, {
    $addToSet: {
        ingredientes: "ketchup",
    },
});

// Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find({}, {
    _id: 0, nome: 1, ingredientes: 1,
}).pretty();
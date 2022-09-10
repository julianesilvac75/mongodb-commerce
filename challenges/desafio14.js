// Crie uma query que retorne todos os lanches que possuem picles em seus ingredientes e mostre apenas os 3 primeiros itens contidos no array valoresNutricionais

// Sua query deve retornar apenas os campos nome, ingredientes e valoresNutricionais.

db.produtos.find({
    ingredientes: {
        $in: ["picles"],
    },
}, {
    _id: 0,
    nome: 1,
    ingredientes: 1,
    valoresNutricionais: {
        $slice: 3,
    },
}).pretty();
const fs = require('fs');

const caminhoDoArquivo = process.argv;
const link = caminhoDoArquivo[2];

fs.readFile(link, 'utf-8', (erro, texto)=>
{
    console.log(texto)
})




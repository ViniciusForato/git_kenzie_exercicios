let meuNome = 'Vinicius Luis Gomes Forato';
let tamanhoDoNome = meuNome.length;
console.log(`o meu nome possui ${tamanhoDoNome} caracteres`)

const preco = 15;
const precoFormatado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco);
console.log(`o valor ${preco} na moeda brasileira ficará ${precoFormatado}`);

let cumprimento = 'Bom dia!';
let nome = 'Vinicius';
let sobrenome = 'Forato'
let mensagemDeCumprimento = (`${cumprimento} ${nome} ${sobrenome}`);
console.log(mensagemDeCumprimento)



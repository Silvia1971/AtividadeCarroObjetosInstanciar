function Carro(nome, marca, cor, combustivel, letras, numeros) {
    this.nome = nome;
    this.marca = marca;
    this.cor = cor;
    this.combustivel = combustivel;
    this.placa = {
        letras: letras,
        numeros: numeros,
    };
    this.estacionamento = function() {
        console.log(`O carro ${this.nome} da marca ${this.marca} de cor ${this.cor}, placa ${this.placa.letras} ${this.placa.numeros} está neste estacionamento.`);
    };
    this.tipocombustivel = function() {
        console.log(`Este carro utiliza ${this.combustivel[0]} ou ${this.combustivel[1]} como combustível.`);
    }
}
var carro = new Carro('Sandero','Renault','Prata',['álcool','gasolina'], 'GIF','2020');
console.log(carro.nome);
console.log(carro.placa.letras + ' ' + carro.placa.numeros);
console.log(carro.estacionamento());
console.log(carro.tipocombustivel());

var carro = new Carro('Mobi','Fiat','Preta',['álcool','gasolina'],'EUA','1971');
console.log(carro.nome);
console.log(carro.placa.letras + ' ' + carro.placa.numeros);
console.log(carro.estacionamento());
console.log(carro.tipocombustivel());

var carro = new Carro('Gol','Volks','Cinza',['álcool','gasolina'],'PZA','1919');
console.log(carro.nome);
console.log(carro.placa.letras + ' ' + carro.placa.numeros);
console.log(carro.estacionamento());
console.log(carro.tipocombustivel());

var carro = new Carro('Captur','Renault','Branca',['álcool','gasolina'],'WUA','2018');
console.log(carro.nome);
console.log(carro.placa.letras + ' ' + carro.placa.numeros);
console.log(carro.estacionamento());
console.log(carro.tipocombustivel());

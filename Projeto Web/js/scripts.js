// funcion escopo global

var produto = {
    nome:"sapato",
    preco:"150"
};

var formulaImpostoA = function(preco){
    return preco * 0.1
};

var calculaPreco = function(produto, formulaWell){
    return   + formulaWell(produto.preco);
}

calcularPreco(produto, formulaImpostoA); //invocando funcão
// --------------------------------------------------------
// function objeto
var pessoa = {
    nome:"pedro",
    idade:3,
    getIdade: function(){
        return this.idade;
    }
};
console.log(pessoa.getIdade());//invocando funcão
// ou
var getIdade = function(){
    return this.idade;
}
var pessoa = {
    nome:"pedro",
    idade:3,
    getIdade: getIdade     
};
console.log(pessoa.getIdade);//invocando funcão
// this chamar propriedade de dentro do ojeto corrente
// --------------------------------------------------

// function call e apply
console.log(getIdade.call(pessoa)); //invocando call
console.log(getIdade.apply(pessoa,[2]));//por apply usando array

//funcão new (fabrica e construtor)
//fabrica
var criarPessoa = function(nome,idade){
    return {
        nome: nome,
        idade: idade
    };
}
console.log(criarPessoa("pedro",3));

//construtor
var Pessoa = function(nome,idade){
    this.nome = nome;
    this.idade = idade;
};

console.log(new Pessoa("Pedro",3));
console.log(new Pessoa("Maria",6));

// contador
var counter = 0;
var add = function(){
    return ++counter;
};
console.log(add());
// ----------------------------
var itens = [];
var add = function(item){
    itens.push(item);
    return itens;
};
console.log(add('A'));
console.log(add('B'));
console.log(add('C'));
// ----------------------------------------

var counter = {
    value:0,
    add:function(){
        return ++this.value;
    }
};
console.log(counter.add());

// ---------------------------------
var itens = {
    value:[],
    add:function(item){
        this.value.push(item);
        return this.value;
    }
};
console.log(itens.add('A'));

// usando fabrica chamada externa 
var createCounter = function(){
    var value = 0;
    return{
        add: function(){
            return ++value;
        }
    };
};
var counter = createCounter();
counter.add();//1
counter.add();//2
counter.add();//3

//usando construtor
var Counter = function(){
    var value = 0;
    this.add = function(){
        return ++value;
    ;}
};
var counter = new Counter();
counter.add();//1
counter.add();//2
counter.add();//3

// module pattern
var counter = (function(){
    var value = 0;
    return {
        add:function(){
            return ++value;
        }
    }
})();
counter.add();//1


// deixando em modo publico
var counter = (function(){
    var _value = 0;
    var _add = function(){
        return ++ _value;
    };
    var _reset = function(){
        _value = 0;
    };
    return {
      add: _add,
      reset: _reset  
    }
})();
counter.add();//1
counter.add();//2
counter.add();//3
counter.reset();


// ======================
// arrays
var carros = [];
var carros = ["fusion","corolla","civic","sonata"];
var carros = new Array("fusion","corolla","civic","sonata");
var carros = new Array(10);

// API arrays
// carros. + tab
carros.valueOf();  // function
carros.toString(); // function
carros.length //propriedade

// inserir ultimo array
carros.push('azira');

// remover ultimo array
carros.pop();

//inseri inicio
carros.unshift('azera');

// remove do inicio
carros.shift('azera');

//adicionar ou remover na posição exata
carros.splice(0,1,"new fusion");

// carros.splice("pos, qtd") ou  carros.splice("pos, qtd, newArray")

// forEach 
carros.forEach(function(elemento) {
    console.log(elemento);
});
// for 
for(var i=0; 
        i < carros.length;
        i++){
    console.log(carros[i]);
}

// carros.filter  
carros [
    {marca:'ford', modelo:'ka'},
    {marca:'Gm', modelo:'vectra'},
    {marca:'toyota', modelo:'corolla'}
];
var carrosFord = carros.filter(function(elemento){
    return elemento.marca === "ford";
});
carrosFord;

// CARROS VERIFICA SE EXISTE EVERY tudo
carros[];
carros[0] = {marca:"Ford", modelo:"Ka"};
carros[1] = {marca:"Gm", modelo:"Vectra"};
carros[2] = {marca:"Toyota", modelo:"Corolla"};


carros.every(function(elemento){
    return elemento.marca === "Ford";
});

// CARROS VERIFICA SE EXISTE SOME ALGUM
carros = [];
carros[0] = {marca:"Ford", modelo:"Ka"};
carros[1] = {marca:"Gm", modelo:"Vectra"};
carros[2] = {marca:"Toyota", modelo:"Corolla"};


carros.some(function(elemento){
    return elemento.marca === "Ford";
});

// MAP
carros.map(function(elemento){
    return elemento.marca;
});

carros.map(function(elemento){
    return elemento.marca.length;
});

// REDUCE
carros = [];
carros[0] = {marca:"Ford", preco:"15000"};
carros[1] = {marca:"Gm", preco:"20000"};
carros[2] = {marca:"Toyota", preco:"40000"};

// usando foreach
var total = 0;
carros.forEach(function(elemento){
    total += elemento.preco;
});
total

// reduce
carros.reduce(function(prev,cur){
    return prev + cur.preco;
},0);

// concat 
var carros = ["ka", "corsa", "palio",];
var motos = ["yamaha","honda",];

var veiculos = carros.concat(motos);
veiculos

// slices para mostrar desde de/até
carros.slice(0,2);
carros.slice(2,3);
carros.slice(2); //a partir de

// reverse inverte as ordem dos arrays
carros.reverse();

// sort ordena ordem alfabetica
carros.sort();
// por preco
carros.sort(function(a,b){
    return a.preco + b.preco;
})

// join
carros.join("/");
carros.join("/").split("/");

new Array(10).join("black");



// ====================================================

// EXPRESSÕES REGULARES
var regExp = /<expressão regular>/;
// or
var regExp = new RegExp("expressão regular");

// API DE REGEXP

// exec(details) and test(boolean)
var regExp = /9999-999/;
var telefone = "9999-9999";
console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

// usando escape
var regExp = /\(48\) 9999-9999/;
var telefone = "o telefone é (48) 9999-9999, tratar com joão";
console.log(regExp.exec(telefone));

//no inicio "^" e fim "$"
var regExp = /^\(48\) 9999-9999/;
var telefone = "(48) 9999-9999, tratar com joão";
console.log(regExp.exec(telefone));

var regExp = /joão$/;
var telefone = "(48) 9999-9999, tratar com joão";
console.log(regExp.exec(telefone));

//padronizando para qualquer tipo de numero de telefone
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
var telefone = "(48) 1234-5678, tratar com joão";
console.log(regExp.exec(telefone));//true 
// enxutando a regex acima ou quantificando
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}/;
var telefone = "(48) 1234-5678, tratar com joão";
console.log(regExp.exec(telefone));//true 
// flexibilizando um digito a mais nos telefones de sp
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/;
var telefone = "(48) 91234-5678, tratar com joão";
console.log(regExp.exec(telefone));//true 

// quantificadores para flexibilizar caracteres especiais   ("?","*","+")
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;
var telefone = "(48) 912345678, tratar com joão";
console.log(regExp.exec(telefone));//true 

// utilizando table com telefones
var regExp = /<table><tr>\(<td>\([0-9]{2}\)[0-9]{4,5}-?[0-9]{4}<\/td>\)+<\/tr><\/table>/;
var telefone = "<table><tr><td>(80) 99997788</td><td>(80) 99994433</td><td>(80) 99995566</td></tr></table>";
regExp.test(telefone);

// metacaracteres
var regExp = /^\(\d{2}\)\s\d{4,5}-?\d{4}/;
var telefone = "(48) 912345678, tratar com joão";
console.log(regExp.exec(telefone));//true 

// match
var regExp = /^\(\d{2}\)\s\d{4,5}-?\d{4}/g;
var telefone = "(48) 912345678, (48) 912342222,(48) 93333333,";
console.log(telefone.match(regExp));//true 

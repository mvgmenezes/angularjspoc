//####Segunda etapa criar o controller do modulo####

//criando um controller dentro do modulo alurapic, basta chamar o .controller() passando o nome do 
//controller 'FotosController' e o segundo parametro é a funcao que define o controller
angular.module('alurapic').controller('FotosController', function () {

    //definindo as propriedades do item foto, onde o index html acessa
    var foto = {
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
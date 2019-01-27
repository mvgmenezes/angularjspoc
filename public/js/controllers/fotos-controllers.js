//####Segunda etapa criar o controller do modulo####

//criando um controller dentro do modulo alurapic, basta chamar o .controller() passando o nome do 
//controller 'FotosController' e o segundo parametro é a funcao que define o controller
angular.module('alurapic').controller('FotosController', function ($scope) { 
    //a varialvel foto (var foto) é privada e para que a view(html) consiga visualiza-la nao é um bom padrao 
    //transforma-la em publica, pois somente a variavel 'angular' é publica, para isso usamos o  $scope
    //portanto deve-se alterar de var foto para $scope.foto

    //definindo as propriedades do item foto, onde o index html acessa
    $scope.foto = {
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});
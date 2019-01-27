//####Segunda etapa criar o controller do modulo####

//criando um controller dentro do modulo alurapic, basta chamar o .controller() passando o nome do 
//controller 'FotosController' e o segundo parametro é a funcao que define o controller
angular.module('alurapic').controller('FotosController', function ($scope, $http) { 
    //$scope - a varialvel foto (var foto) é privada e para que a view(html) consiga visualiza-la nao é um bom padrao 
    //transforma-la em publica, pois somente a variavel 'angular' é publica, para isso usamos o  $scope
    //portanto deve-se alterar de var foto para $scope.foto

    //$http - responsavel em fazer chamadas http (consumo de API, etc...) - Assincrona

    $scope.fotos = [];

    $scope.filtro = '';

    /*
    //pelo o $http ser assincrono ele nao garante que executara corretamente, por isso ele te dara
    //uma promessa que irá executar. promisse
    var promise = $http.get('v1/fotos');

    //se o promise conseguir pegar os dados entao (than)
    promise.then(function(retorno){
        $scope.fotos = retorno.data;
    }).catch(function(error){
        console.log(error);
    });
    */

    //Usando um atalho do bloco acima comentado 
    $http.get('v1/fotos')
    .success(function(fotos){
        $scope.fotos = fotos;
    })
    .error(function(erro){
        console.log(erro);
    });

});
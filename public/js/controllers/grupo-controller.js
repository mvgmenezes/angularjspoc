//moduo para buscar a lista de grupos
angular.module('alurapic').controller('GruposController', function($scope, $http){

    $scope.grupos = [];

    $http.get('/v1/grupos')
    .success(function(grupos){
        $scope.grupos = grupos;
    })
    .error(function(erro){
        console.log(erro);
    });
})
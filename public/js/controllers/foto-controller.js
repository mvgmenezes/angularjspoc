//criando o Controller FotoController
angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};

    $scope.submeter = function() {
       console.log($scope.foto);

        //verificando se os dados enviadaos foram validos
        if ($scope.formulario.$valid) {
            //enviando os dados para o salvar.
            $http.post('/v1/fotos', $scope.foto)
            .success(function() {
                console.log('Foto adicionada com sucesso');
            })
            .error(function(erro) {
                console.log('Não foi possível cadastrar a foto');
            })
        }
    }
})
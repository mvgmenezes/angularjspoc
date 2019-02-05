//criando o Controller FotoController
angular.module('alurapic').controller('FotoController', function($scope, $http){
    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function() {
       console.log($scope.foto);

        //verificando se os dados enviadaos foram validos
        if ($scope.formulario.$valid) {
            //enviando os dados para o salvar.
            $http.post('/v1/fotos', $scope.foto)
            .success(function() {
                //limpoando o objeto foto 
                $scope.foto = {};
                $scope.mensagem = 'Foto adicionada com sucesso';
                console.log('Foto adicionada com sucesso');
            })
            .error(function(erro) {
                $scope.mensagem = 'Não foi possível cadastrar a foto';
                console.log('Não foi possível cadastrar a foto');
            })
        }
    }
})
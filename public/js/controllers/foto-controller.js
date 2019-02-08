//criando o Controller FotoController
angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams){
    
    
    $scope.foto = {};
    $scope.mensagem = '';

    //verificando se veio no parametro da url o id, caso positivo será recarregado
    //fotoId - nome do parametro definido na minha rota(main.js)
    if ($routeParams.fotoId){
        //busca a foto do servidor
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
                $scope.foto = foto;
            },function(error){
                console.log(error);
                $scope.mensagem = 'Não foi possivel obter a foto'
            });
    }

    //acao no html de submeter o salvar da foto
    $scope.submeter = function() {
       console.log($scope.foto);

        //verificando se os dados enviadaos foram validos
        if ($scope.formulario.$valid) {

            //verificando se o paramentro fotoId veio e se veio será uma alteração
            if($routeParams.fotoId) {

                recursoFoto.update({$scope.foto._id}, $scope.foto, function(){
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + 'alterada com sucesso';
                }, function(erro){
                    console.log(erro);
                    $scope.mensagem = 'Não foi possivel alterar';
                });
            }else{

                //enviando os dados para o salvar.
                recursoFoto.save($scope.foto, function() {
                    //limpoando o objeto foto 
                    $scope.foto = {};
                    $scope.mensagem = 'Foto adicionada com sucesso';
                    console.log('Foto adicionada com sucesso');
                }, function(erro) {
                    $scope.mensagem = 'Não foi possível cadastrar a foto';
                    console.log('Não foi possível cadastrar a foto');
                })

            }

        }
    }
})
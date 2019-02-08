//criando o Controller FotoController
angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams,cadastroDeFotos){
    
    
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

            //Antes para alterar era necessario verificar se o fotoId estava preenchido, 
            //deixnado muita responsabilidade neste controller, a logica foi passada para o meus servicos
            //deixndo esse controler somnete com a funcao de cadastrar.
            cadastroDeFotos.cadastrar($scope.foto)
            .then(function(dados) {
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) $scope.foto = {};
            })
            .catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });

        }
    }
})
//####Segunda etapa criar o controller do modulo####

//criando um controller dentro do modulo alurapic, basta chamar o .controller() passando o nome do 
//controller 'FotosController' e o segundo parametro é a funcao que define o controller
angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) { 
    //$scope - a varialvel foto (var foto) é privada e para que a view(html) consiga visualiza-la nao é um bom padrao 
    //transforma-la em publica, pois somente a variavel 'angular' é publica, para isso usamos o  $scope
    //portanto deve-se alterar de var foto para $scope.foto


    $scope.fotos = [];

    $scope.filtro = '';

    $scope.mensagem = '';

    //Usando um atalho do bloco acima comentado 
    recursoFoto.query(function(fotos){
        $scope.fotos = fotos;
    }, function(erro){
        console.log(erro);
    });

    //funcao remover
    $scope.remover = function(foto){
        recursoFoto.delete({fotoId: foto._id}, function(){
                console.log('Foto ' + foto.titulo + 'excluída com sucesso');
                $scope.mensagem = 'Foto ' + foto.titulo + 'excluída com sucesso';

                //splice - remove um item de um array, removendo a foto do array de fotos
                var indiceDaFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceDaFoto, 1);
            }, function(erro){
                console.log('Não foi possivel apagar a foto ' + foto.titulo);
                $scope.mensagem = 'Não foi possivel apagar a foto ' + foto.titulo;
            });
    };

});
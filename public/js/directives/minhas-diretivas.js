//criando um modulo chamado minhas diretivas onde terá o objeto html de imagem para modulariar o html
//o angular troca o camel case (meuPainel) para <meu-painel> no momento que for usar na view. 
angular.module('minhasDiretivas', [])

    .directive('meuPainel', function(){

        //quando se cria uma diretiva deve-se sempre retornar um ddo (directive definition object)
        var ddo = {};

        //dizendo qual a restricao de uso do ddo
        //A = atributo , E elemento
        ddo.restric = "AE";

        //criando um escopo privado para poder ser reutilizados em varias views sem baguncar o scope 
        ddo.scope = {
            //define qual dado será privado na diretiva
            /* 
                ddo.scope = {
                    titulo: '@tituloPrivado'
                };

                <meu-painel tituloPrivado = "Leao">
                </meu-painel>
                
                Quando a diretiva é igual o atributo definido = titulo: '@titulo' pode-se colcoar diretamente 
                somente o @ ficando titulo:'@'

                <meu-painel titulo = "Leao">
                </meu-painel>
            */
            titulo: '@'
        };

        //definindo para minha diretiva mantenha os elementos filhos (declarados dentro da view, neste caso como <img> 
        //no momento que for processado o html 
        // e dentro do meu ddo.template indico qual deve ser mantido os filhos (ng-transclude)
        ddo.transclude = true;

        //defindo o template da diretiva
        /*
        ddo.template = 
                    '<div class="panel panel-default">'
                +   '   <div class="panel-heading">'
                +   '        <h3 class="panel-title text-center">{{titulo}}</h3> ' //{{titulo}} está sendo recuperado do escopo privado
                +   '   </div>'
                +   '   <div class="panel-body" ng-transclude>'
                +   '   </div>'
                +   '</div>'
        */

        //substituindo o ddo.template por um html
        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;

    })

    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           
        
        return ddo;
    })
    
    .directive('meuBotaoPerigo', function(){
        var ddo = {};

        ddo.restric = "AE";

        ddo.scope = {
            nome: '@',
            acao:'&' //como ação dependente do escopo como parametro, usamos o & para acessar a referencia
        }

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

        return ddo;
    });


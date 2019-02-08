//#####Primeira etapa criar o modulo para trabalhar com a foto.#####

//criando um modulo, incluindo a diretiva criada minhasDiretivas
//ngRoute cria uma rota para o angular
angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos'])
    .config(function($routeProvider, $locationProvider){

        //faz que o angular não utilize o # na url, mas deve preparar o backend para que isso funcione
        $locationProvider.html5Mode(true);

        //ROTA - mapemando a url fotos, quando a url for http://localhost:3000/#/fotos 
        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html', //view parcial que será carregada
            controller: 'FotosController' // Controlador que seja associado a parcial
        });

        //ROTA - mapemando a url new, quando a url for http://localhost:3000/#/fotos 
        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html', //view parcial que será carregada
            controller: 'FotoController' // Controlador que seja associado a parcial
        });

        //Rota- rota com edit, passando o paramentro id
        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController' 
        });
        //redirecionando se uma url for invalida para a pagina /fotos
        $routeProvider.otherwise({redirectTo: '/fotos'});

    });
angular.module('mpApp.controllers', [])


.controller('pokeController', function($scope, $log, $http) {
    
    $scope.getPokemon = function(){
        $scope.pokemon= [];
        
        var url="http://pokeapi.co/api/v2/pokemon/"+$scope.search+"/";
        
        $http({method:'GET',
            url:url})
                .then(function success(response){
                    $scope.pokemon = response.data;
                    $log.warn("Pokemon encontrado" + response.data);
                }, function error(response){
                    $scope.pokemon = [];
                });
         
    };

});
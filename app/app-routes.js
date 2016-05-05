angular.module('boardgames')
    .config(function($stateProvider){
        
        $stateProvider
            .state('home', {
                url: '',
                template: '<h1>Hello view 1</h1><a ui-sref="2">CLICK HERE TO GO TO VIEW 2</a>'
            })
            .state('2', {
                url: '/2',
                template: '<h1>Hello view 2</h1><a ui-sref="home">CLICK HERE TO GO BACK HOME</a>'
            })
        
    })
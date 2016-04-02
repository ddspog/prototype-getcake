// Angular JS and Needed Libraries
$.getScript( "//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js" );
$.getScript( "//angular-ui.github.io/ui-router/release/angular-ui-router.js" );
$.getScript( "//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-sanitize.js" );
// Bootstrap JS
$.getScript( "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" );

// Declare HomepageApp (used on html tag of index.html)
var homeApp = angular.module('HomepageApp', ['ui.router', 'ngSanitize']);

homeApp.directive('navBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        template: 'directives.navbar.html'
    };
});

homeApp.directive('footBar', function(){
    return {
        restrict: 'E',
        scope: {
            item: '=item'
        },
        template: 'directives.footbar.html'
    };
});

homeApp.controller('HomeController', function($scope) {
    $scope.navbarText = {
		brand: {
			text: 'GetCake',
			url: 'initial'
		},
		btns: [
			{ text: 'Sobre',
			  url: 'about'     },
			{ text: 'Servi�os',
			  url: 'services'  },
			{ text: 'Contato',
			  url: 'contact'   }
		]
	};
    $scope.footbarText = {
		btns: [
			{ text: 'Home',
			  url: 'initial'   },
			{ text: 'Sobre',
			  url: 'about'     },
			{ text: 'Servi�os',
			  url: 'services'  },
			{ text: 'Contato',
			  url: 'contact'   }
		],
		credits: [
			'Copyright � FriendlyFood 2016. Todos os direitos reservados.',
			'Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>'
		]
	};
    $scope.headerText = {};
    $scope.bannerText = {};
    $scope.content = {};
});

homeApp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
    // For any unmatched url, redirect to /initial
    $urlRouterProvider.otherwise("/");

    // States
    $stateProvider
        .state('initial', {
            url: "/",
            template: ''
        })
}]);
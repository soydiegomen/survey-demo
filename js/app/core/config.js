(function () {
	'use strict';

	var core = angular.module('surveyApp.core');

    core.constant('appConfig', 
    {
        apiBaseUrl : 'http://localhost:3000/api/',
        maxMonths : 6,
        //TODO: Change id for code. Will be more easy for setup
        surveyId : '591facd4eba7ce1d04000004',
        commentQuestion : '591facd4eba7ce1d04000005',
        generalScoreQue : '591facd4eba7ce1d04000009',
        priceQuestion : '591facd4eba7ce1d04000008',
        staffQuestion : '591facd4eba7ce1d04000007',
        recommendationQuestion : '591facd4eba7ce1d04000006'
    });

    /*
    core.constant('appConfig', 
    {
        maxMonths : 6,
        //TODO: Change id for code. Will be more easy for setup
        surveyId : '5927a0f9a8d5b8ac41000017',
        commentQuestion : '5927a0f9a8d5b8ac41000018',
        generalScoreQue : '5927a0f9a8d5b8ac4100001c',
        priceQuestion : '5927a0f9a8d5b8ac4100001b',
        staffQuestion : '5927a0f9a8d5b8ac4100001a',
        recommendationQuestion : '5927a0f9a8d5b8ac41000019'
    });
    */

    core.config(configure);

    //configure.$inject = ['$routeProvider', 'routehelperConfigProvider', 'locationProvider'];

    function configure ($routeProvider, routehelperConfigProvider, $locationProvider) {

        // Configure the common route provider
        routehelperConfigProvider.config.$routeProvider = $routeProvider;
        routehelperConfigProvider.config.docTitle = 'NG-Modular: ';

        // enable HTML5 mode as hashbang-type URLs will not work with mod_rewrite redirection
        //$locationProvider.html5Mode(true).hashPrefix('!');
    }
})();
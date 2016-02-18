angular.module('ContentContainer', []).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/bookroom/bookroom.html', controller: null}).
        when('/crm', {templateUrl: '/crm/index.html', controller: null}).
        when('/order', {templateUrl: '/order/index.html', controller: null}).
        when('/report', {templateUrl: '/report/chanel.html', controller: null}).
        when('/report/chanel', {templateUrl: '/report/chanel.html', controller: null}).
        when('/report/income', {templateUrl: '/report/income.html', controller: null}).
        when('/report/room', {templateUrl: '/report/room.html', controller: null}).
        when('/shortmessage', {templateUrl: '/shortmessage/automessage.html', controller: null}).
        when('/shortmessage/automessage', {templateUrl: '/shortmessage/automessage.html', controller: null}).
        when('/shortmessage/contacts', {templateUrl: '/shortmessage/contacts.html', controller: null}).
        otherwise({redirectTo: '/'});
}]);

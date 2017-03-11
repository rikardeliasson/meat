/**
 * Created by skroo_000 on 2017-03-10.
 */

app.controller('MainController', ['$scope', function($scope) {
    $scope.beef = {
        icon: 'http://localhost:63342/testApp/img/beef.gif',
        title: 'Nöt',
    };
    $scope.pork = {
        icon: 'http://localhost:63342/testApp/img/pork.jpg',
        title: 'Fläsk'
    };
    $scope.lamb = {
        icon: 'http://localhost:63342/testApp/img/theft.jpg',
        title: 'Lamm'
    }
}]);

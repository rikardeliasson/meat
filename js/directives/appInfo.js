/**
 * Created by skroo_000 on 2017-03-10.
 */
app.directive('appInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
    };
});

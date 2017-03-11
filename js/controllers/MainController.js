/**
 * Created by skroo_000 on 2017-03-10.
 */

app.controller('MainController', ['$scope', function($scope) {
    $scope.beef = {
        icon: 'http://localhost:63342/testApp/img/beef.gif',
        title: 'Nöt',
        slicemap: 'beefy',
        neck: "250,130,330,360",
        chuck: "345,125,410,260",
        thickrib: "330,270,420,370",
        forerib: "420,120,525,245",
        thinrib: "425,245,525,370",
        baisket: "350,370,550,420",
        shin: "420,420,490,540",
        sirloin: "525,120,800,265",
        flank: "525,285,846,415",
        rump: "820,110,900,260",
        silverside: "910,105,985,235",
        topside: "1000,120,1050,225",
        thickflank: "895,250,1025,355",
        leg: "925,365,1020,460"


    };

    $scope.pork = {
        icon: 'http://localhost:63342/testApp/img/pork.jpg',
        title: 'Fläsk',
        slicemap: 'porky',
        neck: "0,0,0,0",
        chuck: "0,0,0,0",
        thickrib: "330,270,420,370",
        forerib: "420,120,525,245",
        thinrib: "425,245,525,370",
        baisket: "350,370,550,420",
        shin: "420,420,490,540",
        sirloin: "525,120,800,265",
        flank: "525,285,846,415",
        rump: "820,110,900,260",
        silverside: "910,105,985,235",
        topside: "1000,120,1050,225",
        thickflank: "895,250,1025,355",
        leg: "925,365,1020,460"
    };
    $scope.lamb = {
        icon: 'http://localhost:63342/testApp/img/theft.jpg',
        title: 'Lamm',
        slicemap: 'lamby'
    }
}]);
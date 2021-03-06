module.exports = [{
    state: "index.home",
    url: "/home",
    views: {
        "": {
            templateUrl: "/app/states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
},
{
    state: "index.home.test",
    url: "/test",
    views: {
        "": {
            templateUrl: "/app/states/index/home.html",
            controller: ($scope) => {
                $scope.objectTest = {
                    text: "objectTest is working"
                };
            }
        }
    }
}];

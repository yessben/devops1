/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $encuestas, $internal) {
        $rootScope.spin = false;
        $scope.encuestaId = "";
        
        
        // MARK: - Crear nueva encuesta
        $scope.ingresar = function () {

            if ($scope.encuestaId !== "") {
                $rootScope.spin = true;
                $scope.encuesta = $encuestas.get({
                    id_encuesta: $scope.encuestaId
                }, function (data) {
                    $rootScope.spin = false;
                    $internal.encuesta = data;
                    console.log($internal.encuesta);
                    if (data.id !== undefined) {
                        $window.location = '#/responder-encuesta/' + $scope.encuestaId;
                    } else {
                        $window.location = '#/inicio-alert/' + $scope.encuestaId;
                    }
                }, function (e) {
                    $rootScope.spin = false;
                    console.log(e);
                });
            } else {

            }
        };

        
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$encuestas', '$internal'];

    angular
        .module('inicio')
        .controller('InicioController', Controller);
})();
'use strict';

angular.module('kingsPhone', [])
    .controller('Home', function($scope) {
        $scope.phone = [
            {
                "id": "dell-streak-7", 
                "images": [
                    "img/flip-phone.jpg" 
                    
                ], 
                "name": "Celular Flip Vita Dual Chip MP3 Azul Multilaser - P9020"
            }
        ];
    });

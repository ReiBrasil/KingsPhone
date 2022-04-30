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
            },
            {
            "id": "nokia6310", 
                "images": [
                    "img/nokia6310 3.jpg" 
                    
                ], 
                "name": "Nokia 6310, Celular modelo nokia tijolão - um classico"
            },
            {
            "id": "windowsphone", 
                "images": [
                    "img/nokia-lumia-520jpg.jpg" 
                    
                ], 
                "name": "Windows phone: com Wi-Fi, sistema windows"
            },
            {
            "id": "redmi10", 
                "images": [
                    "img/xiaomi-redmi-10.jpg" 
                    
                ], 
                "name": "Redmi 10 64, xaiomi com 4 cameras"
            }
        ];
    });
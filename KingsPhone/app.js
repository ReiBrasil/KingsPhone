'use strict';

angular.module('kingsPhone', [])
    .controller('Home', function($scope) {
        $scope.phone = [
            {
                "id": "dell-streak-7", 
                "images": [
                    "img/flip-phone.jpg"
                    
                ], 
                "name": "Celular Flip Vita Dual Chip MP3 Azul Multilaser - P9020",
                "description": "O novo celular Multilaser Flip Vita reúne as principais características para trazer versatilidade e segurança ao seu dia a dia. Desenvolvido para atender a melhor idade, possui tela de 2,4”, teclado numérico largo e preciso para facilitar a digitação. Além disso, fala os números ao digitar, para não ocorrer engano na hora de falar com aquela pessoa especial."

            },
            {
            "id": "nokia6310", 
                "images": [
                    "img/nokia6310 3.jpg" 
                    
                ], 
                "name": "Nokia 6310, Celular modelo nokia tijolão - um classico",
                "description": "O Nokia 6310 é um celular para quem precisa apenas do básico. Ele tem um desing simples e teclado T9."
            },
            {
            "id": "windowsphone", 
                "images": [
                    "img/nokia-lumia-520jpg.jpg" 
                    
                ], 
                "name": "Windows phone: com Wi-Fi, sistema windows",
                "description": "Windows Phone é uma família de sistema operacionais para smartphones, desenvolvido pela Microsoft, como sucessor do Windows Mobile com o foco no mercado consumidor, em vez do mercado empresarial. O Windows Phone apresenta uma interface de usuário derivado da Metro UI"
            },
            {
            "id": "redmi10", 
                "images": [
                    "img/xiaomi-redmi-10.jpg" 
                    
                ], 
                "name": "Redmi 10 64, xaiomi com 4 cameras",
                "description": "O Redmi 10 traz a quad câmera dos sonhos, preparada para qualquer cenário. Imagine ter em mãos 50MP de pura nitidez e poder combinar as lentes ultra angular, macro e o sensor de profundidade para definitivamente levar a fotografia mobile para o próximo nível? Tire Selfies normais e panorâmicas, faça vídeos curtos ainda mais criativos e explore uma galeria com os filtros cuidadosamente selecionados."
            }
        ];
    });

$scope.ui_estado = 'lista';
$scope.phone = null;

$scope.mostrarDetalhes = function(phone) {
    $scope.ui_estado = 'detalhes';
    $scope.phone = phone;
};

$scope.mostrarLista = function() {
    $scope.ui_estado = 'lista';
};
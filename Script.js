let cells = document.querySelectorAll('.cell');
let p_X = document.querySelector("#player_X");
let p_O = document.querySelector("#player_O");

cells = Array.from(cells);

let player_X = 0;
let player_O = 0;

let com = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
]
let combinations = [
        ['0','1','2'],
        ['3','4','5'],
        ['6','7','8'],
        ['0','3','6'],
        ['1','4','7'],
        ['2','5','8'],
        ['0','4','8'],
        ['2','4','6']
]

function Reset(){
        for (let i = 0; i < combinations.length; i++){
                for (let j = 0; j < combinations[i].length; j++){
                        combinations[i][j] = com[i][j];
                }
        }
        for (let i = 0;i<9;i++){
                cells[i].innerHTML = "";
        }
}

function Restart(){
        Reset();
        p_X.innerHTML=0;
        p_O.innerHTML=0;
}

function Combo(){
        for (let i = 0; i < combinations.length; i++) {
                if (combinations[i][0]+combinations[i][1]+combinations[i][2] === "XXX") {
                        player_X++;
                        p_X.innerHTML=player_X;
                        Reset()
                }else{
                        if(combinations[i][0]+combinations[i][1]+combinations[i][2] === "OOO"){
                                player_O++;
                                p_O.innerHTML=player_O;
                                Reset()
                        }
                }
        }
}

function Play() {
        let player = "x";
        cells.forEach(function (cell) {
                cell.addEventListener('click', function () {
                        player === "X" ? player = "O" : player="X";
                        for (let i = 0; i < combinations.length; i++) {
                                for (let j = 0; j < combinations[i].length; j++) {
                                        if (combinations[i][j] === cell.id) {
                                                combinations[i][j] = player;
                                                cell.innerHTML = player;
                                        }
                                }
                        }Combo();
                })
        })
}

Play();




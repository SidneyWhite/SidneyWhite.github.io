"use strict";
var EMPRY_SQUARE = {
    row: 3,
    column: 3
}

var move_square = () => {
    // return true;

};

var is_movable = () => {
    // return of movable
    // $(this).id 
    var x = EMPRY_SQUARE.x;
    var y = EMPRY_SQUARE.y;

    var id_1 = "square_" + (x - 1) + "_" + y;
    var id_2 = "square_" + (x + 1) + "_" + y;
    var id_3 = "square_" + (x) + "_" + y + 1;
    var id_4 = "square_" + (x) + "_" + y - 1;

    switch ($(this).id) {
        case id_1:
        case id_2:
        case id_3:
        case id_4:
            return true;
            break;
        default:
            return false;
            break;
    }
};

var get_square = (x, y) => {
    //return sqr

};

var init = function () {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    $(divs).click(() => {
        if (is_movable()) {
            move_square();
        }
    }).hover(
        function () {
            var movable = is_movable;
            if (movable) $(this).addClass("movablepiece");
        },
        function () {
            $(this).removeClass("movablepiece");
        });

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        div.id = "square_" + (i % 4) + "_" + (Math.floor(i / 4));

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
    }
};

document.addEventListener("DOMContentLoaded", init);

$(function () {
    // alert("HIII");
});
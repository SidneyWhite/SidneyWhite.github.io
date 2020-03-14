"use strict";
var EMPTY_SQUARE = {
    x: 3,
    y: 3
}
var shuffle_count = 0;
var shuffle_max = 10;
var last_shuffle_el_id = "";

var is_finish = function () {
    var divs = $('#puzzlearea div');
    var success = true;
    for (var i = 0; i < divs.length; i++) {
        var div = $(divs[i]);
        var row_num = (i % 4);
        var column_num = (Math.floor(i / 4));

        var div_row = parseInt(div.attr("row"));
        var div_column = parseInt(div.attr("column"));

        if (row_num != div_row || column_num != div_column) {
            success = false;
            break;
        }
    }

    if (success)
        setTimeout(
            function() 
            {
                alert("Yay you did it!");
              //do something special
            }, 90);
}

var move_square = (el) => {
    // return true;
    var empty_x = EMPTY_SQUARE.x;
    var empty_y = EMPTY_SQUARE.y;

    var x = parseInt($(el).attr("row"));
    var y = parseInt($(el).attr("column"));

    var left = empty_x * 100;
    var top = empty_y * 100;

    $(el).css("left", left);
    $(el).css("top", top);

    var idd = "square_" + empty_x + "_" + empty_y;
    $(el).attr("id", idd);
    $(el).attr("row", empty_x);
    $(el).attr("column", empty_y);

    EMPTY_SQUARE.x = x;
    EMPTY_SQUARE.y = y;


    is_finish();
    return idd;
};

var is_movable = (el) => {
    // return of movable
    // $(this).id 
    var x = EMPTY_SQUARE.x;
    var y = EMPTY_SQUARE.y;

    var id_1 = "square_" + (x - 1) + "_" + y;
    var id_2 = "square_" + (x + 1) + "_" + y;
    var id_3 = "square_" + (x) + "_" + (y + 1);
    var id_4 = "square_" + (x) + "_" + (y - 1);

    switch ($(el).attr("id")) {
        case id_1:
        case id_2:
        case id_3:
        case id_4:
            return true;
            // break;
        default:
            return false;
            // break;
    }
};

var refresh_divs = function () {
    //return sqr
    var divs = $('#puzzlearea div');

    $(divs).click(function () {
        if (is_movable(this)) {
            move_square(this);
        }
    }).hover(
        function () {
            var movable = is_movable(this);
            if (movable) {
                $(this).addClass("movablepiece")
            };
        },
        function () {
            $(this).removeClass("movablepiece");
        });
};

var shuffle = function () {
    if (shuffle_count == shuffle_max) {
        shuffle_count = 1;
        return false;
    }

    var x = EMPTY_SQUARE.x;
    var y = EMPTY_SQUARE.y;

    var id_1 = $("#square_" + (x - 1) + "_" + y);
    var id_2 = $("#square_" + (x + 1) + "_" + y);
    var id_3 = $("#square_" + (x) + "_" + (y + 1));
    var id_4 = $("#square_" + (x) + "_" + (y - 1));

    var movables = [];
    if (id_1 != undefined && id_1.length > 0 && id_1.attr("id") != last_shuffle_el_id) {
        movables.push(id_1);
    }
    if (id_2 != undefined && id_2.length > 0 && id_2.attr("id") != last_shuffle_el_id) {
        movables.push(id_2);
    }
    if (id_3 != undefined && id_3.length > 0 && id_3.attr("id") != last_shuffle_el_id) {
        movables.push(id_3);
    }
    if (id_4 != undefined && id_4.length > 0 && id_4.attr("id") != last_shuffle_el_id) {
        movables.push(id_4);
    }

    var length = movables.length;
    var random_index = Math.floor((Math.random() * length));
    last_shuffle_el_id = move_square(movables[random_index]);

    shuffle_count++;
    shuffle();
}

var init = function () {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var row_num = (i % 4);
        var column_num = (Math.floor(i / 4));

        div.id = "square_" + row_num + "_" + column_num;
        // 

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);
        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        //
        $(div).attr("row", row_num);
        $(div).attr("column", column_num);

        // store x and y for later
        div.x = x;
        div.y = y;
    }

    refresh_divs();

    $('#shufflebutton').click(() => {
        shuffle();
    });
};

document.addEventListener("DOMContentLoaded", init);

$(function () {
    // alert("HIII");
});
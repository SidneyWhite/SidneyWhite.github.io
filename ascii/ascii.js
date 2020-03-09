"use strict";
var txt = "";
// var txt_animation = "";
var speed = "250ms";
var i = 0;
var res = [];
var txt_area;
var my_interval;

var animate_func = () => {
    txt_area.val(res[i]);
    i++;
    if (i > res.length) {
        i = 0;
    }
}

$(document).ready(function () {
    $("#stop").prop( "disabled", true );
    // jQuery methods go here...
    $("#start").click(function () {
        // alert( "Handler for .click() called." );
        txt_area = $("#txt-area");
        txt = txt_area.val();
        // txt_animation = txt;
        res = txt.split("=====");

        txt_area.val(res[0]);
        var i = 1;
        my_interval = setInterval(animate_func, 250);

        //
        $("#start").prop( "disabled", true );
        $("#selection").prop( "disabled", true );
        $("#stop").prop( "disabled", false );
    });

    $("#stop").click(() => {
        clearInterval(my_interval);
        $("#txt-area").val(txt);

        $("#start").prop( "disabled", false );
        $("#selection").prop( "disabled", false );
        $("#stop").prop( "disabled", true );
    });

    $('#selection').change(() => {
        // $("mytextarea").value = JUGGLER;
        var txt_area = $("#txt-area");
        switch ($('#selection').val()) {
            case "exercise":
                txt_area.val(EXERCISE);
                break;
            case "juggler":
                txt_area.val(JUGGLER);
                break;
            case "bike":
                txt_area.val(BIKE);
                break;
            case "dive":
                txt_area.val(DIVE);
                break;
            case "custom":
                txt_area.val(CUSTOM);
                break;
            default:
                txt_area.val("");
        }
    });
    $('#size').change(() => {
        // $("mytextarea").value = JUGGLER;
        var size = $("#txt-area");
        switch ($('#size').val()) {
            case "Tiny":
                size.css({
                    'font-size': '7pt'
                });
                break;
            case "Small":

                size.css({
                    'font-size': '10pt'
                });
                break;
            case "Medium":

                size.css({
                    'font-size': '12pt'
                });
                break;
            case "Large":

                size.css({
                    'font-size': '16pt'
                });
                break;
            case "Extra Large":

                size.css({
                    'font-size': '24pt'
                });
                break;
            case "XXL":

                size.css({
                    'font-size': '32pt'
                });
                break;
            default:
                size.css({
                    'font-size': '12pt'
                });
        }
    });

    $('#turbo').change(() => {
        speed = 250;
        if ($('#turbo').is(":checked")) {
            speed = 50;
        }
        clearInterval(my_interval);
        my_interval = setInterval(animate_func, speed);
    });
    // Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
});

  /*jshint esversion: 6 */
(function () {
    "use strict";
    /*jshint esversion: 6 */
    var txt = "";
    // var txt_animation = "";
    var speed = 250;
    var i = 0;
    var res = [];
    var txtArea;
    var myInterval;

    var animateFunc = function () {
        txtArea.val(res[i]);
        i += 1;
        if (i == res.length) {
            i = 0;
        }
    };

    $(document).ready(function () {
        $("#stop").prop("disabled", true);
        // jQuery methods go here...
        $("#start").click(function () {
            // alert( "Handler for .click() called." );
            txtArea = $("#txt-area");
            txt = txtArea.val();
            // txt_animation = txt;
            res = txt.split("=====");

            txtArea.val(res[0]);
            i = 1;
            myInterval = setInterval(animateFunc, 250);

            //
            $("#start").prop("disabled", true);
            $("#selection").prop("disabled", true);
            $("#stop").prop("disabled", false);

            //
            if($('#selection').val() == "custom"){
                CUSTOM = txt;
            }
        });

        $("#stop").click(() => {
            clearInterval(myInterval);
            $("#txt-area").val(txt);

            $("#start").prop("disabled", false);
            $("#selection").prop("disabled", false);
            $("#stop").prop("disabled", true);
        });

        $('#selection').change(() => {
            // $("mytextarea").value = JUGGLER;
            var txtArea = $("#txt-area");
            switch ($('#selection').val()) {
                case "exercise":
                    txtArea.val(EXERCISE);
                    break;
                case "juggler":
                    txtArea.val(JUGGLER);
                    break;
                case "bike":
                    txtArea.val(BIKE);
                    break;
                case "dive":
                    txtArea.val(DIVE);
                    break;
                case "custom":
                    txtArea.val(CUSTOM);
                    break;
                default:
                    txtArea.val("");
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
            clearInterval(myInterval);
            myInterval = setInterval(animateFunc, speed);
        });
        // Tiny (7pt), Small (10pt), Medium (12pt), Large (16pt), Extra Large (24pt), XXL (32pt)
    });
})();
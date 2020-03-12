$(function () {

    var started = false;

    function start() {
        $(".boundary").removeClass("youlose");

        $(".boundary").mouseenter(function () {
            if (!started) {
                return;
            }

            started = false;
            $(".boundary").addClass("youlose");
            // event.preventDefault();
            // setTimeout(alert("Sorry. You lose :("), 500);
            $("#status").text("Sorry. You lose :( . Click the 'S' to begin.");

        });

        $("#end").mouseenter(function () {
            if (!started) {
                return;
            }
            started = false;
            // alert("You win :);")
            $("#status").text("You win :) . Click the 'S' to begin.");
        });

        $("body").mousemove(function (event) {
            // console.log("started" + started);
            if (!started) {
                return;
            }
            var p = $("#start").offset();
            // console.log("div position: " + p.left, " mouse position: ", event.pageX);

            if (event.pageX < p.left) {
                started = false;
                $(".boundary").addClass("youlose");
                $("#status").text("Sorry. You lose :( . Click the 'S' to begin.");
            }

        });
    }

    $("#start").click(function () {
        $("#status").text("GO!!!");
        started = true;
        start();
    });
});
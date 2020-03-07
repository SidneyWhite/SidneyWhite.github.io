var txt = "";
$("#start").click(function () {
    // alert( "Handler for .click() called." );
    var txt_area = $("txt-area");
    txt = txt_area.val();
    var res = str.split("=====");

    txt.val(res[0]);
    var i = 1;
    setInterval(animate_func, 250);
});

var animate_func = () => {
    txt.val(res[i]);
    i++;
    if (i > res.length) {
        i = 0;
    }
}


$("#stop").click(() => {
    clearInterval(animate_func);
    $("txt-area").val(txt);
})

$('#selection').on("change", () => {
    switch (this.val()) {
        case "Exercise":
            break;
        case "Juggler":
            text = "Soon it is Weekend";
            break;
        case 0:
        case 6:
            text = "It is Weekend";
            break;
        default:
            text = "Looking forward to the Weekend";
    }

})


// $("mytextarea").value = JUGGLER;